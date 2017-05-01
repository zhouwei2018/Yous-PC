$(function () {

    // 手机号码验证
    jQuery.validator.addMethod("isMobile", function(value, element){
        var length = value.length;
        var mobile = /^(13[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})$/;
        return this.optional(element) || (length == 11 && mobile.test(value));
    }, "请正确填写您的手机号码");

    //密码强弱
    function checkStrong(sValue) {
        var modes = 0;
    //正则表达式验证符合要求的
        if (sValue.length < 8) return 0;
        if (/\d/.test(sValue)) modes++; //数字
        if (/[a-z]/.test(sValue)) modes++; //小写
        if (/[A-Z]/.test(sValue)) modes++; //大写
        if (/\W/.test(sValue)) modes++; //特殊字符
        if (sValue.length > 15) return 3;
        return modes;
    }

    //逻辑处理
    $("#password").keyup(function () {
        var val = $(this).val();
        var modes = checkStrong(val);
        console.log(modes);
        switch (modes) {
            case 0:
                $(".safe_level").addClass("passlow").removeClass("passmiddle").removeClass("passhigh");
                break;
            case 1:
                $(".safe_level").addClass("passlow").removeClass("passmiddle").removeClass("passhigh");
                break;
            case 2:
                $(".safe_level").addClass("passmiddle").removeClass("passhigh");
                break;
            case 3:
                $(".safe_level").addClass("passhigh");
                break;
        }
    })

    // 在键盘按下并释放及提交后验证提交表单
    $("#signupForm").validate({
        rules: {
            phone: {
                required: true,
                digits: true,
                minlength: 11,
                maxlength: 11,
                isMobile: true
            },
            password: {
                required: true,
                minlength: 6,
                maxlength: 20
            },
            confirm_password: {
                required: true,
                equalTo: "#password"
            }
        },
        messages: {
            phone: {
                required: "请输入手机号",
                minlength: "确认手机不能小于11个字符",
                maxlength: "确认手机不能大于11个字符",
                digits: "请正确填写您的手机号码",
                isMobile: "请正确填写您的手机号码"
            },
            password: {
                required: "请输入6-20位密码",
                minlength: "密码长度不能小于6个字母",
                maxlength: "密码长度不能大于20个字母"
            },
            confirm_password: {
                required: "请输入确认密码",
                equalTo: "两次密码输入不一致"
            }
        }
    });
});