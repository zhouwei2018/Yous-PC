<style scoped lang="less">
    @import "../resources/css/base.less";
    @import "../resources/css/register/register.less";
</style>

<template>
    <div class="all">
        <!--topper  begin-->
        <div top_box>
            <div header>
                <div class="contents">
                    <h2 class="lion_text">幼狮空间</h2>
                    <router-link to="/index" class="login_switch"><img src="../resources/images/lion_logo.png"
                                                                       class="lion_logo"/></router-link>
                </div>
            </div>

            <div class="find_pass contents">
                <div class="mod-forgot">
                    <ul class="mod-sub-nav">
                        <li class="mod-sub-list1 list1-active">确认帐号</li>
                        <li class="mod-sub-list2">安全验证</li>
                        <li class="mod-sub-list3">重置密码</li>
                    </ul><form action="/?getpassindex" method="post" id="forgotsel">
                    <div class="mod-step-detail">
                        <p class="step-email-info">请填写您需要找回的帐号,海外用户请点击<a id="overseas">海外手机号找回密码</a></p>
                        <div class="pass-input-container clearfix" id="pass-auth-select">
                            <input type="text" class="pass-input pass-input-forgot pass-input-error" name="username" value="" id="account">
                            <label class="pass-input-label input-label-new1 w260" style="display: block;">请您输入用户名/邮箱/手机</label>
                            <span class="fix-clear userName-clearbtn" id="userName_clearBtn"></span>
                            <span class="pass-input-msg l-h40">请您输入用户名/邮箱/手机</span>
                        </div>
                        <div class="pass-account-slect clearfix m_b15 hide" style="position: relative; display: none;">
                            <p>请协助我们确认一下您输入的内容，便于更快的定位您的信息：</p>
                            <p class="pass-radio pass-radio-list" s="username">我输入的是用户名</p>
                            <p class="pass-radio pass-radio-list pass-radion-active" s="securemobil">我输入的是手机号</p>
                        </div>
                        <div class="pass-input-container vcode-container clearfix">
                            <input type="text" class="pass-input pass-input-forgot vcode-input vcode-input-width" name="veritycode" value="" id="veritycode">
                            <label class="pass-input-label input-label-new1 vcode-label">请输入验证码</label>
                            <img class="vcode-img vcode-img-big hide" alt="验证码图片" title="验证码图片" src="https://passport.baidu.com/cgi-bin/genimage?jxG5e06c1cac8e8e2a702d014ce4301bd7e538a9807d4017b08&amp;v=1497669793811" style="display: inline;">
                            <a href="###" class="vcode-img-change p-t13">换一张</a>
                            <input type="hidden" name="captcha_str" value="jxG5e06c1cac8e8e2a702d014ce4301bd7e538a9807d4017b08">
                            <span class="pass-input-msg l-h40"></span>
                        </div>
                        <div>
                            <input type="hidden" name="bdstoken" value="df48fa6b924aa5e02069d1e0d8ab60fe">
                            <input type="hidden" name="tpl" value="bceplat">
                            <input type="hidden" name="index" value="">
                            <input type="hidden" name="countrycode" value="" id="countrycode">
                            <input type="submit" name="" value="下一步" class="pass-button-submit" id="submit">
                            <input type="hidden" value="" id="error">
                            <input type="hidden" value="" id="username">
                            <input type="hidden" value="" id="veritycode">
                            <input type="hidden" value="" id="bdErrMsg">
                        </div>
                    </div>
                </form>
                </div>

            </div>

            <div footer add_login>
                <div class="foot_wrap">
                    <p class="bottom_nav">
                        <span><a href="javascript:;">关于我们</a></span>
                        <i>|</i>
                        <span><a href="javascript:;">工作机会</a></span>
                        <i>|</i>
                        <span><a href="javascript:;">条款与隐私</a></span>
                    </p>
                    <p class="bottom_copyright">北京幼狮空间有限公司 保留所有权利 京ICP备20176444</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    export default {
        data () {
            return {

            }
        },
        methods: {

        }
    }
</script>
