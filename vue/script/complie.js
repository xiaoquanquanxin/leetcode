function Complie(vm, el){
    return this.complieElement(vm, el);
}

Complie.prototype = {
    complieElement(vm, el){
        let firstChild = el.firstChild;
        const df = document.createDocumentFragment();
        while (firstChild !== null) {
            this.complieAttribute(vm, firstChild);
            df.appendChild(firstChild);
            firstChild = el.firstChild;
        }
        return df;
    },
    complieAttribute(vm, el){
        switch (el.nodeType) {
            case 1:
                if (!el.attributes['v-model']) {
                    return;
                }
                const key = el.attributes['v-model'].value;
                el.addEventListener('input', (e) => {
                    vm[key] = e.target.value;
                });
                el.value = vm[key];
                new Watcher(vm, key, 'value', el);
                break;
            case 3:
                const Reg = /\{\{(.*)\}\}/;
                if (Reg.test(el.nodeValue)) {
                    const key = RegExp.$1;
                    new Watcher(vm, key, 'nodeValue', el);
                    el.nodeValue = vm[key];
                }
                break;
            default:
                return;
        }
    }
};

