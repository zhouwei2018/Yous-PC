function yScroll(opts) {
    this.wrapBox = opts.wrapBox;
    this.wrapUl = opts.wrapUl;
    this.scrollBox = opts.scrollBox;
    this.scrollBar = opts.scrollBar;
    this.cb = opts.cb;
    this.scale = 0;
    this.height = 30;
    this.maxTop = 0;
    this.ListMaxTop = 0;
    this.top = 0;
    this.init();
}
yScroll.prototype = {
    constructor: yScroll,
    init: function() {
        this.scale = this.wrapBox.clientHeight / this.wrapUl.scrollHeight;
        if (this.scale > 1) this.scale = 1;
        this.maxTop = this.scrollBox.scrollHeight - this.height;
        this.ListMaxTop = this.wrapBox.clientHeight - this.wrapUl.scrollHeight;
        if (this.scale == 1) this.scrollBox.style.display = 'none';
        //this.scrollBar.style.height = this.height + 'px';
        this.bindEvent();
    },
    bindEvent: function() {
        var that = this, fx=0;
        var mouseScroll = function(ev) {
            ev = ev || event;
            if (ev.preventDefault) {
                ev.preventDefault();
            }

            var bDown = true; //默认后滚下拉
            if(ev.wheelDelta){//IE/Opera/Chrome
                fx=ev.wheelDelta;
                bDown = fx > 0 ? false: true;
            }else if(ev.detail){//Firefox
                fx=ev.detail;
                bDown = fx > 0 ? true: false;
            }
            if (bDown) {
                that.top += 10;
            } else {
                that.top -= 10;
            }
            that.setScroll();
            return false;
        };
        this.scrollBar.onmousedown = function(ev) {
            ev = ev || event;
            var self =this;
            var disY = ev.clientY - this.offsetTop;
            document.onmousemove = function(ev) {
                ev = ev || event;
                that.top = ev.clientY - disY;
                that.setScroll();
            };
            document.onmouseup = function() {
                document.onmouseup = document.onmousemove = null;
            };
            return false;
        };
        //事件注册
        if(this.wrapUl.addEventListener){
            this.wrapUl.addEventListener('DOMMouseScroll',mouseScroll,false);
        }
        this.wrapBox.onmousewheel = mouseScroll;
    },
    loadMore:function(){
        console.log("分页加载数据：启动loading样式，发起请求")
        this.cb();
    },
    hasToEnd:function(){
        var out = document.querySelector('#ul-outer'),inUl = document.querySelector('#list-ul')
        var hasEnd = false;
        hasEnd= (out.clientHeight-inUl.offsetTop)>=inUl.clientHeight?true:false;
        //if(hasEnd&&inUl.getAttribute('load-more')==="yes"&&inUl.getAttribute('is-loading')==="no"){
        if(hasEnd){
            this.loadMore();
        }
    },
    setScroll: function() {
        //this.hasToEnd();
        if (this.top < 0) this.top = 0;
        if (this.top > this.maxTop) this.top = this.maxTop;
        var scale = this.top / this.maxTop;
        var listTop = scale * this.ListMaxTop;
        this.scrollBar.style.top = this.top + 'px';
        this.wrapUl.style.top = listTop + 'px';
    }
};

export default yScroll
