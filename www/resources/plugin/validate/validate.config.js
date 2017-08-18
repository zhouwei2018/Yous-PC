/***
 * @name  validate.js config
 * @author qzz
 * @date 2017-06-24
 *
 * **/

//配置错误提示的节点，默认为label，这里配置成 span （errorElement:'span'）
$.validator.setDefaults({
    errorElement: 'span',
    errorPlacement: function (error, element) {
        error.appendTo(element.parent());
    }
});

//配置通用的默认提示语
$.extend($.validator.messages, {
    required: "必选字段",
    remote: "请修正该字段",
    email: "请输入正确格式的电子邮件",
    url: "请输入合法的网址",
    date: "请输入合法的日期",
    dateISO: "请输入合法的日期 (ISO).",
    number: "请输入合法的数字",
    digits: "只能输入整数",
    creditcard: "请输入合法的信用卡号",
    equalTo: "请再次输入相同的值",
    accept: "请输入拥有合法后缀名的字符串",
    maxlength: $.validator.format("请输入一个长度最多是 {0} 的字符串"),
    minlength: $.validator.format("请输入一个长度最少是 {0} 的字符串"),
    rangelength: $.validator.format("请输入一个长度介于 {0} 和 {1} 之间的字符串"),
    range: $.validator.format("请输入一个介于 {0} 和 {1} 之间的值"),
    max: $.validator.format("请输入一个最大为 {0} 的值"),
    min: $.validator.format("请输入一个最小为 {0} 的值")
});

/*-------------扩展验证规则-------------*/
//邮箱
jQuery.validator.addMethod("mail", function (value, element) {
    var mail = /^[a-z0-9._%-]+@([a-z0-9-]+\.)+[a-z]{2,4}$/;
    return this.optional(element) || (mail.test(value));
}, "邮箱格式不对");

//电话验证规则
jQuery.validator.addMethod("phone", function (value, element) {
    var phone = /^0\d{2,3}-\d{7,8}$/;
    return this.optional(element) || (phone.test(value));
}, "电话格式如：0371-68787027");

//区号
jQuery.validator.addMethod("districtCode", function (value, element) {
    var districtCode = /^0\d{2,3}$/;
    return this.optional(element) || (districtCode.test(value));
}, "区号格式如：0371");

//手机验证规则
jQuery.validator.addMethod("mobile", function (value, element) {
    var mobile = /^1[3|4|5|7|8]\d{9}$/;
    return this.optional(element) || (mobile.test(value));
}, "请输入有效手机号");

//验证码验证规则
jQuery.validator.addMethod("identify", function (value, element) {
    var identify = /^[0-9]{6}$/;
    return this.optional(element) || (identify.test(value));
}, "验证码错误");

//验证码验证规则
jQuery.validator.addMethod("identify_four", function (value, element) {
    var identify_four = /^[0-9]{4}$/;
    return this.optional(element) || (identify_four.test(value));
}, "验证码错误");


//密码验证规则
jQuery.validator.addMethod("password", function (value, element) {
    var password = /^\w*.{6,16}$/;
    return this.optional(element) || (password.test(value));
}, "请输入6-16位密码");

//身份证
jQuery.validator.addMethod("idCard", function (value, element) {
    var isIDCard1 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;//(15位)
    var isIDCard2 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;//(18位)

    return this.optional(element) || (isIDCard1.test(value)) || (isIDCard2.test(value));
}, "格式不对");

//字数限制
jQuery.validator.addMethod("numLimit", function (value, element) {
    var numLimit = /^.{10,400}$/;
    return this.optional(element) || (numLimit.test(value));
}, "请输入10-400字评论");