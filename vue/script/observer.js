function observer(vm, data){
    Object.keys(data).forEach(item => {
        setRelative(vm, item, data[item]);
    });
}

function setRelative(vm, key, value){
    const dep = new Watcher();
    Object.defineProperty(vm, key, {
        set(v){
            if (v === value) {
                return;
            }
            value = v;
            dep.notify();
        },
        get(){
            if (Watcher.target) {
                dep.addItem(Watcher.target);
            }
            return value;
        }
    });
}