let uid = 1;

function Watcher(vm, key, nodeType, node){
    Dep.target = this;
    this.vm = vm;
    this.key = key;
    this.nodeType = nodeType;
    this.node = node;
    this.uid = uid++;
    this.update();
    Dep.target = null;
}

Watcher.prototype = {
    getValue(){
        this.value = this.vm[this.key];
    },
    update(){
        this.getValue();
        this.node[this.nodeType] = this.value;
    }
};
