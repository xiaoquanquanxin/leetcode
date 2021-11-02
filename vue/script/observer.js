function observer(vm, data){
    Object.keys(data).forEach(item => {
        setRelative(vm, item, data[item]);
    });
}

function setRelative(vm, key, value){
    const dep = new Dep();
    Object.defineProperty(vm, key, {
        set(v){
            if (v === value) {
                return;
            }
            value = v;
            dep.notify();
        },
        get(){
            if (Dep.target) {
                dep.addItem(Dep.target);
            }
            return value;
        }
    });
}
