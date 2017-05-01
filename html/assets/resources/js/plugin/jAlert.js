/**
 * Created by zhouwei on 2016/8/21.
 */
//锁定背景屏幕
function lockScreen() {
    var clientH = document.body.offsetHeight; //body高度
    var clientW = document.body.offsetWidth; //body宽度
    var docH = document.body.scrollHeight; //浏览器高度
    var docW = document.body.scrollWidth; //浏览器宽度
    var bgW = clientW > docW ? clientW : docW; //取有效宽
    var bgH = clientH > docH ? clientH : docH; //取有效高
    //var blackBg = document.createElement("div");
    //blackBg.id = "blackBg";
    //blackBg.style.position = "absolute";
    //blackBg.style.zIndex = "99999";
    //blackBg.style.top = "0";
    //blackBg.style.left = "0";
    //blackBg.style.width = bgW+"px";
    //blackBg.style.height = bgH+"px";
    //blackBg.style.opacity = "0.4";
    //blackBg.style.backgroundColor = "#333";
    //document.body.appendChild(blackBg);
}
//关闭按钮事件
function popupClose(id) {
    var id = id || "H-dialog";
    var blackBg = document.getElementById("blackBg");
    var objDiv = document.getElementById(id);
    blackBg && document.body.removeChild(blackBg);
    objDiv.style.display = "none";
}
//自动关闭
function autoClose(id) {
    var id = id || "H-dialog";
    var blackBg = document.getElementById("blackBg");
    var objDiv = document.getElementById(id);
    setTimeout(function(){
        blackBg && document.body.removeChild(blackBg);
        objDiv.style.display = "none";
    },2000);
}
/**
 *功能 : 弹窗信息
 *参数1 : 提示信息内容
 *参数2 : 提示信息状态默认0 为提示信息,1为成功信息
 *参数3 : 弹窗div的id,默认"H-dialog"
 *参数4 : 弹窗内容的id,默认"msgCont"
 **/
function showMsg(msg) {

    msg = msg || "请重新操作";
    var status = arguments[1] || 1,
        callback=arguments[2] || null,
        popupId = arguments[3] || "H-dialog",
        contentId = arguments[4] || "msgCont";

    $("#alert-div").remove();

    var html='<div id="alert-div" bombBox btn-default>'
        +' <div class="pop_box" id="H-dialog"  >'
        +'<p class="bg"></p>'
        +'<div class="pop_font">'
        +'<p class="pop_title pr">'
        +'提示'
        +'<a class="close" href="javascript:;"  onclick="popupClose()"> </a>'
        +'</p>'
        +'<div id="msgCont" class="word">'
        +'<p>写内容</p>'
        +'</div>'
        +'<div class="button btn_one pa">'
        +' <p class="btn order btn1_hover btn_confirm">确认</p>'
        +'</div>'
            //+'<div class="button btn_two pa clearfix">'
            //+'<p class="btn order btn1_hover fl">确认</p>'
            //+'<p id="blackBg" class="btn btn2_hover fr close">取消</p>'
            //+'</div>'
        +'</div>'
        +'</div>'
        +'</div>'
    var _div = document.createElement("div");
    var first=document.body.firstChild; //得到第一个元素
    document.body.insertBefore(_div,first); //在第原来的第一个元素之前插入
    _div.innerHTML =html;


    var objDiv = document.getElementById(popupId);
    document.getElementById(contentId).innerHTML = msg;
    objDiv.style.display = "block";
    if(status==0) {
        autoClose(popupId);
    }
    $(".btn_confirm").on("click",function(){
        if (callback !=null) {
            callback();
        }
        popupClose();
    })
}
