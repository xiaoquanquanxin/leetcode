let uid = 1;

function Dep(vm, key, nodeType, node){
    Watcher.target = this;
    this.vm = vm;
    this.key = key;
    this.nodeType = nodeType;
    this.node = node;
    this.uid = uid++;
    this.update();
    Watcher.target = null;
}

Dep.prototype = {
    getValue(){
        this.value = this.vm[this.key];
    },
    update(){
        this.getValue();
        this.node[this.nodeType] = this.value;
    }
};