/**
 * 单继承
 * 简单属性复制，非IE下可用
 * IE下valueOf toString的属性名不能被识别
 */
var extend = function(target, source) {
	//遍历对象中的所有属性
	for (var i in source) {
		//copy 2 new obj
		target[i] = source[i];
	}
	return target;
};
/**
 * 多继承
 * 多对象属性复制，非IE下可用
 * IE下valueOf toString的属性名不能被识别
 */
var mixin = function() {
	var i = 1, len = arguments.length, target = arguments[0], arg;
	//遍历
	for (; i < len; i++) {
		arg = arguments[i];
		for (var p in arg) {
			//copy 2
			target[p] = arg[p];
		}
	}
	return target;
};
/**
 * 多对象合并，并可选择是否覆盖
 * 多对象属性复制，非IE下可用
 * IE下valueOf toString的属性名不能被识别
 */
var mix = function() {
	var i = 1, key, args = [].slice.call(arguments), //对象转数组
	ride = typeof args[args.length - 1] == "undifened" ? args.pop() : true;
	if (args.length === 1) {
		target = !this.window ? this : {};
		i = 0;
	}
	//遍历
	while ((source == args[i++])) {
		//允许对象糅杂，用户保证都是对象
		for (var p in source) {
			//copy 2
			if (ride || !( p in target))
				target[p] = source[p];
		}
	}
	return target;
};
/**
 * 节流器
 * 节流器要做两件事：1、清楚要执行的函数，2、延迟执行为函数判断留下时间
 * 第1：是否清，执行函数；第2：执行函数，相关参数
 */
function throttle() {
	//获取第一个参数
	var isClear = arguments[0], fn;
	//如第一个参数是布尔型，那么第一个参数则表示是否清计时器
	if ( typeof isClear === 'boolean') {
		fn = arguments[1];
		//函数计时器句柄存在，则清除该计时器
		fn.__throttleID && clearTimeout(fn.__throttleID);
	} else {//通过计时器延迟函数的执行
		//第一个参数为函数
		fn = isClear;
		//第二个参数为函数执行时的参数
		param = arguments[1];
		//对执行时的参数适配默认值
		var p = extend({
			context : null,
			args : [],
			time : 300
		}, param);
		//清掉执行函数计时器句柄
		arguments.callee(true, fn);
		//为函数绑定句柄，延迟执行函数
		fn.__throttleID = setTimeout(function() {
			fn.apply(p.context, p.args);
		}, p.time);
	}
}

/**
 * 延迟图片加载
 * param id 加载图片的容器
 * url:data-src=realurl
 */

function lazyLoad(id) {
	//确认操作容器
	if (!id)
		return;
	this.container = document.getElementById(id);
	this.box = this.container.parentNode;
	//获取图片列表
	this.imgs = this.getImgs();
	//执行初始化
	this.init();
}

lazyLoad.prototype = {
	init : function() {
		//加载当前视图图片
		this.update();
		//绑定事件
		this.bindEvent();
	},
	getImgs : function() {
		var arr = [], imgs = this.container.getElementsByTagName('img');
		for (var i = 0, len = imgs.length; i < len; i++) {
			arr.push(imgs[i]);
		}
		return arr;
	},
	update : function() {
		//如图片都加载完成，返回
		if (!this.imgs.length) {
			return;
		}
		var i = this.imgs.length;
        var realSrc = "";
		for (--i; i >= 0; i--) {
			if (this.shouldShow(i)) {
				//加载图片 
                realSrc = this.imgs[i].getAttribute("data-src");
                if(realSrc.indexOf("http://") > -1){
                    this.imgs[i].src = realSrc;
                }else{
                    //没有图片
                    this.imgs[i].src = this.container.getAttribute("data-no-img");
                }
				//清理缓存
				this.imgs.splice(i, 1);
			}
		}
	},
	shouldShow : function(i) {
		//获取当前图片
		var img = this.imgs[i];
		if (this.container.parentNode.offsetHeight == document.documentElement.clientHeight) {
			var scrollTop = this.container.parentNode.scrollTop,
			scrollBottom = scrollTop + this.container.parentNode.clientHeight,
			imgTop = this.pageY(img),
			imgBottom = imgTop + img.offsetHeight;
			if (imgBottom > scrollTop && imgBottom < scrollBottom || (imgTop > scrollTop && imgTop < scrollBottom)) {
				return true;
			} else {
				return false;
			}
		} else {
			//网页可视范围内顶部高度
			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
			//可视范围内底部高度
			scrollBottom = scrollTop + document.documentElement.clientHeight,
			//图片顶部
			imgTop = this.pageY(img),
			//图片底部
			imgBottom = imgTop + img.offsetHeight;
			//成立条件：1、图片底部高度大于可视试图顶部高度，并图片底部高度小于可视视图底部高度；2、 图片顶部高度大于可视视图顶部高度，并图片顶部高度小于可视视图底部高度
			if (imgBottom > scrollTop && imgBottom < scrollBottom || (imgTop > scrollTop && imgTop < scrollBottom)) {
				return true;
			} else {
				return false;
			}
		}
	},
	pageY : function(node) {
		//如有父元素
		if (node.offsetParent) {
			//元素高+父元素高
			return node.offsetTop + this.pageY(node.offsetParent);
		} else {
			//元素高
			return node.offsetTop;
		}
	},
	on : function(node, type, handler) {
		node.addEventListener ? node.addEventListener(type, handler, false) : node.attachEvent('on' + type, handler);
	},
	bindEvent : function() {
		var that = this;
		//节流处理，绑定Window 滑动和屏幕大小改变，也可替换成其它元素
		this.on(window, 'resize', function() {
			throttle(that.update, {
				context : that
			});
		});
		this.on(window, 'scroll', function() {
			throttle(that.update, {
				context : that
			});
		});
		that.on(this.box, 'scroll', function() {
			throttle(that.update, {
				context : that
			});
		});
	}
};
/*
 var fns = function(){;}
 window.onscroll = function(){
 throttle(fns);
 }
 */