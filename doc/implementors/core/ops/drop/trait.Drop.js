(function() {var implementors = {};
implementors["kernel"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"kernel/x86_64/struct.Arch.html\" title=\"struct kernel::x86_64::Arch\">Arch</a>",synthetic:false,types:["kernel::x86_64::Arch"]},];
implementors["spin"] = [{text:"impl&lt;'a, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"spin/struct.MutexGuard.html\" title=\"struct spin::MutexGuard\">MutexGuard</a>&lt;'a, T&gt;",synthetic:false,types:["spin::mutex::MutexGuard"]},{text:"impl&lt;'rwlock, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"spin/struct.RwLockReadGuard.html\" title=\"struct spin::RwLockReadGuard\">RwLockReadGuard</a>&lt;'rwlock, T&gt;",synthetic:false,types:["spin::rw_lock::RwLockReadGuard"]},{text:"impl&lt;'rwlock, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"spin/struct.RwLockWriteGuard.html\" title=\"struct spin::RwLockWriteGuard\">RwLockWriteGuard</a>&lt;'rwlock, T&gt;",synthetic:false,types:["spin::rw_lock::RwLockWriteGuard"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
