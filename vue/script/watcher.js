function Watcher(){
    this.list = [];
}

Watcher.prototype = {
    addItem(item){
        this.list.push(item);
    },
    notify(){
        this.list.forEach(item => {
            item.update();
        });
    }
};