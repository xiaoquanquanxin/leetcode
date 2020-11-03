function Vue(option){
    const el = document.getElementById(option.el);
    const data = option.data;
    this.data = data;
    observer(this,data);
    const df = new Complie(this,el);
    el.appendChild(df);
}