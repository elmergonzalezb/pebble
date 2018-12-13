(function() {var implementors = {};
implementors["kernel"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"kernel/x86_64/logger/struct.KernelLogger.html\" title=\"struct kernel::x86_64::logger::KernelLogger\">KernelLogger</a>",synthetic:true,types:["kernel::x86_64::logger::KernelLogger"]},];
implementors["log"] = [{text:"impl&lt;'a&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"log/struct.Record.html\" title=\"struct log::Record\">Record</a>&lt;'a&gt;",synthetic:true,types:["log::Record"]},{text:"impl&lt;'a&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"log/struct.RecordBuilder.html\" title=\"struct log::RecordBuilder\">RecordBuilder</a>&lt;'a&gt;",synthetic:true,types:["log::RecordBuilder"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"log/struct.Metadata.html\" title=\"struct log::Metadata\">Metadata</a>&lt;'a&gt;",synthetic:true,types:["log::Metadata"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"log/struct.MetadataBuilder.html\" title=\"struct log::MetadataBuilder\">MetadataBuilder</a>&lt;'a&gt;",synthetic:true,types:["log::MetadataBuilder"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"log/struct.SetLoggerError.html\" title=\"struct log::SetLoggerError\">SetLoggerError</a>",synthetic:true,types:["log::SetLoggerError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"log/struct.ParseLevelError.html\" title=\"struct log::ParseLevelError\">ParseLevelError</a>",synthetic:true,types:["log::ParseLevelError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"log/enum.Level.html\" title=\"enum log::Level\">Level</a>",synthetic:true,types:["log::Level"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"log/enum.LevelFilter.html\" title=\"enum log::LevelFilter\">LevelFilter</a>",synthetic:true,types:["log::LevelFilter"]},];
implementors["spin"] = [{text:"impl&lt;'a, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"spin/struct.MutexGuard.html\" title=\"struct spin::MutexGuard\">MutexGuard</a>&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>",synthetic:true,types:["spin::mutex::MutexGuard"]},{text:"impl&lt;'a, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"spin/struct.RwLockReadGuard.html\" title=\"struct spin::RwLockReadGuard\">RwLockReadGuard</a>&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>",synthetic:true,types:["spin::rw_lock::RwLockReadGuard"]},{text:"impl&lt;'a, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"spin/struct.RwLockWriteGuard.html\" title=\"struct spin::RwLockWriteGuard\">RwLockWriteGuard</a>&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>",synthetic:true,types:["spin::rw_lock::RwLockWriteGuard"]},{text:"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"spin/struct.Mutex.html\" title=\"struct spin::Mutex\">Mutex</a>&lt;T&gt;",synthetic:false,types:["spin::mutex::Mutex"]},{text:"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"spin/struct.RwLock.html\" title=\"struct spin::RwLock\">RwLock</a>&lt;T&gt;",synthetic:false,types:["spin::rw_lock::RwLock"]},{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"spin/struct.Once.html\" title=\"struct spin::Once\">Once</a>&lt;T&gt;",synthetic:false,types:["spin::once::Once"]},];
implementors["x86_64"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"x86_64/boot/struct.BootInfo.html\" title=\"struct x86_64::boot::BootInfo\">BootInfo</a>",synthetic:true,types:["x86_64::boot::BootInfo"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"x86_64/hw/port/struct.Port.html\" title=\"struct x86_64::hw::port::Port\">Port</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>",synthetic:true,types:["x86_64::hw::port::Port"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"x86_64/hw/serial/struct.SerialPort.html\" title=\"struct x86_64::hw::serial::SerialPort\">SerialPort</a>",synthetic:true,types:["x86_64::hw::serial::SerialPort"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"x86_64/memory/struct.PhysicalAddress.html\" title=\"struct x86_64::memory::PhysicalAddress\">PhysicalAddress</a>",synthetic:true,types:["x86_64::memory::physical_address::PhysicalAddress"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"x86_64/memory/struct.VirtualAddress.html\" title=\"struct x86_64::memory::VirtualAddress\">VirtualAddress</a>",synthetic:true,types:["x86_64::memory::virtual_address::VirtualAddress"]},{text:"impl&lt;M&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"x86_64/memory/paging/struct.InactivePageTable.html\" title=\"struct x86_64::memory::paging::InactivePageTable\">InactivePageTable</a>&lt;M&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;M: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>",synthetic:true,types:["x86_64::memory::paging::InactivePageTable"]},{text:"impl&lt;M&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"x86_64/memory/paging/struct.ActivePageTable.html\" title=\"struct x86_64::memory::paging::ActivePageTable\">ActivePageTable</a>&lt;M&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;M: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>",synthetic:true,types:["x86_64::memory::paging::ActivePageTable"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"x86_64/memory/paging/entry/struct.Entry.html\" title=\"struct x86_64::memory::paging::entry::Entry\">Entry</a>",synthetic:true,types:["x86_64::memory::paging::entry::Entry"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"x86_64/memory/paging/entry/struct.EntryFlags.html\" title=\"struct x86_64::memory::paging::entry::EntryFlags\">EntryFlags</a>",synthetic:true,types:["x86_64::memory::paging::entry::EntryFlags"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"x86_64/memory/paging/frame/struct.Frame.html\" title=\"struct x86_64::memory::paging::frame::Frame\">Frame</a>",synthetic:true,types:["x86_64::memory::paging::frame::Frame"]},{text:"impl&lt;'a, M&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"x86_64/memory/paging/mapper/struct.Mapper.html\" title=\"struct x86_64::memory::paging::mapper::Mapper\">Mapper</a>&lt;'a, M&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;M: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>",synthetic:true,types:["x86_64::memory::paging::mapper::Mapper"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"x86_64/memory/paging/page/struct.Page.html\" title=\"struct x86_64::memory::paging::page::Page\">Page</a>",synthetic:true,types:["x86_64::memory::paging::page::Page"]},{text:"impl&lt;L, M&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"x86_64/memory/paging/table/struct.Table.html\" title=\"struct x86_64::memory::paging::table::Table\">Table</a>&lt;L, M&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;M: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>",synthetic:true,types:["x86_64::memory::paging::table::Table"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"x86_64/memory/paging/table/enum.Level4.html\" title=\"enum x86_64::memory::paging::table::Level4\">Level4</a>",synthetic:true,types:["x86_64::memory::paging::table::Level4"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"x86_64/memory/paging/table/enum.Level3.html\" title=\"enum x86_64::memory::paging::table::Level3\">Level3</a>",synthetic:true,types:["x86_64::memory::paging::table::Level3"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"x86_64/memory/paging/table/enum.Level2.html\" title=\"enum x86_64::memory::paging::table::Level2\">Level2</a>",synthetic:true,types:["x86_64::memory::paging::table::Level2"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"x86_64/memory/paging/table/enum.Level1.html\" title=\"enum x86_64::memory::paging::table::Level1\">Level1</a>",synthetic:true,types:["x86_64::memory::paging::table::Level1"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"x86_64/memory/paging/table/enum.IdentityMapping.html\" title=\"enum x86_64::memory::paging::table::IdentityMapping\">IdentityMapping</a>",synthetic:true,types:["x86_64::memory::paging::table::IdentityMapping"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"x86_64/memory/paging/table/enum.RecursiveMapping.html\" title=\"enum x86_64::memory::paging::table::RecursiveMapping\">RecursiveMapping</a>",synthetic:true,types:["x86_64::memory::paging::table::RecursiveMapping"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
