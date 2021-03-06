# Pebble
[![Build Status](https://travis-ci.org/IsaacWoods/pebble.svg?branch=master)](https://travis-ci.org/IsaacWoods/pebble)
[![License: MPL-2.0](https://img.shields.io/badge/license-MPL--2.0-blue.svg)](https://opensource.org/licenses/MPL-2.0)
[![Gitter chat](https://badges.gitter.im/gitterHQ/gitter.png)](https://gitter.im/pebble-os/Lobby)

**Pebble is still early in development.**

Pebble is a microkernel and userspace written in Rust, with a focus on safety and simplicity. It is designed to be
simple to understand, extend, and develop for. Pebble does not aim for POSIX compliance. The best way to learn
about Pebble is to read [the book](https://isaacwoods.github.io/pebble/book/).
[The website](https://isaacwoods.github.io/pebble) also hosts some other useful resources.

## Building and running
To build Pebble, you will need a few things (this assumes you are running a Linux of some type):
- A nightly Rust compiler
- `cargo-xbuild` (install with `cargo install cargo-xbuild`)
- The `rust-src` component (install with `rustup component add rust-src`)
- Mtools
- A working QEMU installation (providing `qemu-system-x86_64`)
- Probably a few other things, depending on what your distro includes. Please read error messages and install
  missing dependencies, if there are any.

When you clone the Pebble repository, you will need to manually fetch the submodules:
```
git clone https://github.com/IsaacWoods/pebble.git
git submodule update --init --recursive
```

You should now be able to build Pebble by simply running `make`.

To try Pebble out in Qemu, run `make qemu`. The bundled versions of the OVMF firmware (NOTE: depending on how we
decide to package Pebble in the future, you may need to manually build OVMF) will boot into an EFI shell. Try
running:
```
fs0:\efiloader.efi kernel=kernel.elf image.simple_fb=simple_fb.elf fb.width=800 fb.height=600
```
This should show some output on the VGA, and will log a bunch of output to the serial port.

## Contributing
You are very welcome to contribute to Pebble! Have a look at the issue tracker, or come hang out in the Gitter room
to find something to work on.

Any contribution submitted for inclusion in Pebble by you shall be licensed according to the MPL-2.0, without
additional terms or conditions.
