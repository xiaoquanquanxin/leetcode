//  基础的无序数组
window.getArr = (n = 30) => {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push((Math.random() * n)|0);
    }
    return arr;
};
//  交换位置
window.swap = (arr, a, b) => {
    if (a === b) {
        return;
    }
    arr[a] = arr[a]^arr[b];
    arr[b] = arr[a]^arr[b];
    arr[a] = arr[a]^arr[b];
};

//  大根堆对数器
window.checkBigRootHeap = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        const left = arr[i * 2 + 1] || -Infinity;
        const right = arr[i * 2 + 2] || -Infinity;
        if (current < left || current < right) {
            return false;
        }
    }
    return true;
};

//  验证是否排序
window.checkIsSort = (arr, type) => {
    if (arr.length < 2) {
        return true;
    }
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) {
            throw `排序错误 ${i - 1} ${i} ${type}`;
        }
    }
    return true;
};

//  单向链表的node
window.OneWayNode = function (value){
    this.value = value;
    this.next = null;
};

OneWayNode.prototype.add = function (node){
    this.next = node;
};

//  双向链表的node
window.DoubleWayNode = function (value){
    this.value = value;
    this.next = null;
    this.last = null;
};

DoubleWayNode.prototype.add = function (node){
    this.next = node;
    node.last = this;
};