function Dep(){
    this.list = [];
}

Dep.prototype = {
    addItem(item){
        this.list.push(item);
    },
    notify(){
        console.log(this.list);
        this.list.forEach(item => {
            item.update();
        });
    }
};

