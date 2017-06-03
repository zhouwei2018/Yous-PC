/**
 * Created by liuxiaolu on 2017/3/20.
 */
//首屏轮播
$('#carousel_building').banqh({
    box: '#carousel_building',//总框架
    pic: '#carousel_big',//大图框架
    pnum: '#carousel_small',//小图框架
    prev_btn: '#carousel_small_prev',//小图左箭头
    next_btn: '#carousel_small_next',//小图右箭头
    autoplay: true,//是否自动播放
    interTime: 5000,//图片自动切换间隔
    delayTime: 400,//切换一张图片时间
    pop_delayTime: 400,//弹出框切换一张图片时间
    order: 0,//当前显示的图片（从0开始）
    picdire: true,//大图滚动方向（true为水平方向滚动）
    mindire: true,//小图滚动方向（true为水平方向滚动）
    min_picnum: 4,//小图显示数量
    pop_up: true,//大图是否有弹出框
    pop_div: '#pop_carousel_box',//弹出框框架
    pop_pic: '#pop_carousel',//弹出框图片框架
    pop_xx: '.pop-carousel-close',//关闭弹出框按钮
    pop_prev: '#pop_carousel_prev',//弹出框左箭头
    pop_next: '#pop_carousel_next',//弹出框右箭头
    mhc: '.carousel-mask'//朦灰层
});

$(function () {
    //价格切换
    $('.price-wrap a').click(function () {
        $('#price-list').find('ul').toggleClass('none');
    });
    //全景图
    $('#panorama_btn').click(function(){
        $('.carousel-mask').toggle();
        $('#panorama').show();
        panorama_show();
    });
    $('.panorama-close').click(function(){
        $('.carousel-mask').toggle();
        $('#panorama').hide();
    });
    //分享给同事
    $('.share-attention .share').hover(function(){
        $(this).find('.zp-ewm').show();
    },function(){
        $(this).find('.zp-ewm').hide();
    });
    $('.sidebar-share').hover(function(){
        $(this).find('.attention-share-ewm').show();
    },function(){
        $(this).find('.attention-share-ewm').hide();
    });

    //价格变动
    $('.price-change').click(function(){
        $('.dialog-box').removeClass('none');
        $('#price_change').removeClass('none');
    });
    //新房通知
    $('.new-building').click(function(){
        $('.dialog-box').removeClass('none');
        $('#new-building').removeClass('none');
    });
    //免费回拨
    $('.expert-consult').click(function(){
        $('.dialog-box').removeClass('none');
        $('#dial-back').removeClass('none');
    });
    //在线咨询
    $('.detail-head-consultation, .expert-online').click(function(){
        kefu($(this).attr('data-id'));
    });

    /**收藏大楼**/
    bindfavorite();
    /**价格变动通知**/
    submitPriceChangeForm();

    /**新房通知**/
    submitNewHouseForm();

    /**免费回拨**/
    submitDialBackForm();

    /**预约看房**/
    submitFreeLookForm();
});

var officebuidling3d;
function panorama_show(){
    if (Detector.webgl) {
        if ($('#drawul li').size() > 0) {
            officebuidling3d = container_init("container", 1000, 500, $('#drawul li').eq(0).attr('dataid'), $(".loadbox"));
            officebuidling3d.animate();
            $('#quanjing').removeClass('none');
            $('#drawul li').eq(0).addClass('on');
        }
    } else {
        if ($('#drawul li').size() > 0) {
            //$('#no3dTip').show();//展示提示
            $('.panorama').find('img').toggleClass('none');
        }
    }
}
function draw3d(t) {
    $(t).siblings().removeClass('on');
    $(t).addClass('on');
    officebuidling3d.changePic($(t).attr('dataid'));
}

//侧边栏固定
$(window).on("scroll",function(){
    var window_height = $(window).height(); //浏览器当前窗口可视区域高度
    var document_height = $(document).height(); //浏览器当前窗口文档的高度
    var scroll_top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    var navStandard_line = $('.navfixed-box').offset().top;
    var standard_line = $('.category-message-box').offset().top;
    var standard_line_wrap = $('#category_message').height();
    var fixed_self = $('#sidebar_fix').height();
    if(scroll_top > navStandard_line ){
        $('.navfixed').slideDown(50);
    }else {
        $('.navfixed').slideUp(50);
    }

    if(scroll_top > (standard_line)){
        $('#sidebar_fix').addClass('fixed');
        $('.sidebar-box').css('bottom','auto');
    }else {
        $('#sidebar_fix').removeClass('fixed');
        $('.sidebar-box').css('bottom','auto');
    }

    if(scroll_top > (standard_line + standard_line_wrap - fixed_self - 66) ){
        $('#sidebar_fix').removeClass('fixed');
        $('.sidebar-box').css('bottom','0');
    }
});

function bindfavorite(){
    $('[data-favorite]').unbind().click(function () {
        var id = $(this).attr('data-id');
        if ($(this).attr('data-favorite') == 0) {
            addFavoriteOffice(id, this);
        } else {
            cancelFavoriteoffice(id, this);
        }
    });
};
function addFavoriteOffice(id, t){
    var res = islogin();
    if(res){
        $.ajax({
            url: '/interface/addfavoriteoffice/',
            type: 'post',
            data: {"id": id},
            success: function (data) {
                if (data.res == 'success') {
                    $('.attention').toggleClass('none');
                    $('.sidebar-attention').toggleClass('none');
                    $('.retal-none-attention').toggleClass('none');

                    $(t).unbind();
                    $(t).click(function () {
                        cancelFavoriteoffice(id, t);
                    });
                }
            }
        });
    }else{
        currentcallback = function () {
            addFavoriteOffice(id, t)
        };
        showLoginBox();
    }
}
function cancelFavoriteoffice(id, t) {
    var res = islogin();
    if(res){
        $.ajax({
            url: '/interface/cancelfavoriteoffice/',
            type: 'post',
            data: {"officeId": id},
            success: function (data) {
                if (data.res == 'success') {
                    $('.attention').toggleClass('none');
                    $('.sidebar-attention').toggleClass('none');
                    $('.retal-none-attention').toggleClass('none');

                    $(t).unbind();
                    $(t).click(function () {
                        addFavoriteOffice(id, t);
                    });
                }
            }
        });
    }else{
        currentcallback = function () {
            cancelFavoriteoffice(id, t)
        };
//      $('#nologed').click();
        showLoginBox();
    }
};

function submitFreeLookForm(){
    if ($('#freeLookForm').length > 0) {
        $('#freeLookForm')[0].reset();
    }
    //表单验证
    $('#freeLookForm').validator({
        theme: 'default',
        focusInvalid:true,//是否自动让第一个出错的输入框获得的焦点，默认获得
        focusCleanup: true,//是否在输入框获得焦点的时候清除消息，默认不清除
        stopOnError:true,//是否在验证出错时停止继续验证，默认不停止
        debug: false,
        timely: 0,//启用实时验证，在输入的同时验证该字段
        ignore:':hidden',//指定需要忽略验证的元素的jQuery选择器
        //自定义规则（PS：建议尽量在全局配置中定义规则，统一管理）
        rules: {
//	        username: [/^[a-zA-Z0-9]+$/, '用户名无效! 仅支持字母与数字。']
        },
        fields: {
            "phone": {
                rule: "required; mobile;",
//	            tip: "请输入您的手机号码。",
//	            ok: "手机号码输入正确",
                msg: {required: "手机号码必填！",mobile:"请您输入正确的手机号码！"},
                target: "#msg-phone"
            }
        },
        //验证成功
        valid: function(form) {
            submitFreeLook();//验证成功，提交订单
        }
    });

    $('#freeLookForm :button').click(function(){
        $('#freeLookForm').trigger("validate");
    });
};
function submitFreeLook(){
    $.ajax({
        url:'/interface/freelook/',
        type:'post',
        data:$('#freeLookForm').serialize(),
        success:function(data){
            if (data.res == "success") {
                popClose();
                $('.popup h2').hide();
                $('.popup .close-popup').hide();
                $('#freeLookWechat2').show();
                popUpSuccess();
            }else{
                alert('免费看房预约失败!');
            }
        },
        error:function(){
            alert('免费看房预约失败!');
        }
    });
};

function submitNewHouseForm(){
    $('#newBuildingForm')[0].reset();
    //表单验证
    $('#newBuildingForm').validator({
        theme: 'default',
        focusInvalid:true,//是否自动让第一个出错的输入框获得的焦点，默认获得
        focusCleanup: true,//是否在输入框获得焦点的时候清除消息，默认不清除
        stopOnError:true,//是否在验证出错时停止继续验证，默认不停止
        debug: false,
        timely: 0,//启用实时验证，在输入的同时验证该字段
        ignore:':hidden',//指定需要忽略验证的元素的jQuery选择器
        //自定义规则（PS：建议尽量在全局配置中定义规则，统一管理）
        rules: {
//	        username: [/^[a-zA-Z0-9]+$/, '用户名无效! 仅支持字母与数字。']
        },
        fields: {
            "subscriptionPhone": {
                rule: "required; mobile;",
//	            tip: "请输入您的手机号码。",
//	            ok: "手机号码输入正确",
                msg: {required: "手机号码必填！",mobile:"请您输入正确的手机号码！"},
                target: "#tip-house"
            }
        },
        //验证成功
        valid: function(form) {
            submitNewHouseNotice();//验证成功，提交订单
        }
    });

    $('#newBuildingForm :button').click(function(){
        $('#newBuildingForm').trigger("validate");
    });
};
function submitNewHouseNotice(){
    $.ajax({
        url:'/interface/newHouseNotice/',
        type:'post',
        data:$('#newBuildingForm').serialize(),
        success:function(data){
            if (data.res == "success") {
                $('#new-building').addClass('none');
                $('#newhouse-notice-success').removeClass('none');
            }else{
                alert('新房通知提交失败!');
            }
        },
        error:function(){
            alert('系统异常!');
        }
    });
};