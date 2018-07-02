#![no_std]
#![feature(lang_items)]
#![feature(asm)]
#![feature(const_fn)]
#![feature(naked_functions)]
#![feature(core_intrinsics)]
#![feature(alloc)]
#![feature(type_ascription)]
#![feature(allocator_api)]
#![feature(panic_implementation)]
#![feature(panic_info_message)]
#![feature(extern_prelude)]
#![allow(identity_op)]
#![allow(new_without_default)]

extern crate alloc;
extern crate spin;
extern crate volatile;
#[macro_use]
extern crate bitflags;
extern crate bit_field;
#[macro_use]
extern crate log;
#[macro_use]
extern crate common;
extern crate acpi;
extern crate kernel;
extern crate libmessage;
extern crate multiboot2;
extern crate xmas_elf;

#[macro_use]
mod registers;
#[macro_use]
mod serial;
mod acpi_handler;
mod apic;
mod cpu;
mod gdt;
mod i8259_pic;
mod idt;
mod interrupts;
mod memory;
mod panic;
mod pit;
mod port;
mod process;
mod tlb;
mod tss;
mod pci;

pub use panic::{_Unwind_Resume, panic, rust_eh_personality};

use acpi_handler::PebbleAcpiHandler;
use alloc::boxed::Box;
use gdt::{Gdt, GdtSelectors};
use kernel::arch::{Architecture, MemoryAddress, ModuleMapping};
use kernel::fs::File;
use kernel::node::Node;
use kernel::process::ProcessMessage;
use memory::paging::PhysicalAddress;
use memory::MemoryController;
use process::{Process, ProcessImage};
use tss::Tss;
use pci::Pci;

pub static mut PLATFORM: Platform = Platform::placeholder();

pub struct Platform {
    pub memory_controller: Option<MemoryController>,
    pub gdt_selectors: Option<GdtSelectors>,
    pub tss: Tss,
}

impl Platform {
    const fn placeholder() -> Platform {
        Platform {
            memory_controller: None,
            gdt_selectors: None,
            tss: Tss::new(),
        }
    }
}

impl Architecture for Platform {
    fn get_module_mapping(&self, module_name: &str) -> Option<ModuleMapping> {
        self.memory_controller
            .as_ref()
            .unwrap()
            .loaded_modules
            .get(module_name)
            .map(|mapping| ModuleMapping {
                physical_start: usize::from(mapping.start),
                physical_end: usize::from(mapping.end),
                virtual_start: mapping.ptr as usize,
                virtual_end: mapping.ptr as usize + mapping.size,
            })
    }

    fn create_process(&mut self, image: &File) -> Box<Node<MessageType = ProcessMessage>> {
        Box::new(Process::new(
            ProcessImage::from_elf(image, self.memory_controller.as_mut().unwrap()),
            &mut self.memory_controller.as_mut().unwrap(),
        ))
    }
}

#[no_mangle]
pub extern "C" fn kstart(multiboot_address: PhysicalAddress) -> ! {
    serial::initialise();
    log::set_logger(&serial::SERIAL_LOGGER).unwrap();
    log::set_max_level(log::LevelFilter::Trace);
    info!("Kernel connected to COM1");

    /*
     * We are passed the *physical* address of the Multiboot struct, so we need to translate it
     * into the higher half.
     */
    let boot_info = unsafe { multiboot2::load(usize::from(multiboot_address.in_kernel_space())) };
    unsafe {
        PLATFORM.memory_controller = Some(memory::init(&boot_info));
    }

    /*
     * We can now create and install a TSS and new GDT.
     *
     * Allocate a 4KiB stack for the double-fault handler. Using a separate stack for double-faults
     * avoids a triple fault happening when the guard page of the normal stack is hit (after a stack
     * overflow), which would otherwise:
     *      Page Fault -> Page Fault -> Double Fault -> Page Fault -> Triple Fault
     */
    let double_fault_stack = unsafe {
        PLATFORM
            .memory_controller
            .as_mut()
            .unwrap()
            .alloc_stack(1)
            .expect("Failed to allocate stack")
    };
    unsafe {
        PLATFORM.tss.interrupt_stack_table[tss::DOUBLE_FAULT_IST_INDEX] = double_fault_stack.top();
        PLATFORM
            .tss
            .set_kernel_stack(memory::get_kernel_stack_top());
    }
    let gdt_selectors = Gdt::install(unsafe { &mut PLATFORM.tss });
    interrupts::init(&gdt_selectors);
    unsafe {
        PLATFORM.gdt_selectors = Some(gdt_selectors);
    }

    /*
     * We now find and parse the ACPI tables. This also initialises the local APIC and IOAPIC, as
     * they are described by the MADT. We then enable interrupts.
     */
    // TODO: actually handle both types of tag for systems with ACPI Version 2.0+
    let rsdp_tag = boot_info.rsdp_v1_tag().expect("Failed to get RSDP V1 tag");
    // TODO: validate the RSDP tag
    // rsdp_tag.validate().expect("Failed to validate RSDP tag");
    PebbleAcpiHandler::parse_acpi(
        unsafe { PLATFORM.memory_controller.as_mut().unwrap() },
        PhysicalAddress::new(rsdp_tag.rsdt_address()),
        rsdp_tag.revision(),
    );
    // interrupts::enable();

    // info!("BSP: {:?}", acpi_info.bootstrap_cpu);
    // for cpu in acpi_info.application_cpus
    // {
    //     info!("AP: {:?}", cpu);
    // }

    /*
     * We can now initialise the local APIC timer to interrupt every 10ms. This uses the PIT to
     * determine the frequency the timer is running at, so interrupts must be enabled at this point.
     * We also re-initialise the PIT to tick every 10ms.
     */
    // unsafe {
    //     apic::LOCAL_APIC.enable_timer(10);
    // }
    // unsafe {
    //     pit::PIT.init(10);
    // }

    /*
     * Scan for PCI devices
     */
    let mut pci = unsafe { Pci::new() };
    pci.scan();

    /*
     * Finally, we pass control to the kernel.
     */
    kernel::kernel_main(unsafe { &mut PLATFORM });
}

#[lang = "oom"]
#[no_mangle]
pub extern "C" fn rust_oom() -> ! {
    panic!("Kernel ran out of heap memory!");
}
