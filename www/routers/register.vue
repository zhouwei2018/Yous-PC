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
                <router-link to="/index" class="login_switch"><img src="../resources/images/lion_logo.png" class="lion_logo"/></router-link>
            </div>
        </div>

        <div class="content_wrap">
            <div class="reg_bg">
                <div class="reg_wrap">
                    <div class="reg_head">
                        <h3 class="fl" >注册</h3>

                        <div class="fr login_tab">已有账户？ <router-link to="/login" class="login_switch">登录</router-link></div>
                    </div>
                    <form id="signupForm" method="get" action="" novalidate="novalidate">
                        <!--注册-->
                        <div input-prompt inp_login>
                            <div class="inp">
                                <input autocomplete="off" class="public" id="phone" type="phone" name="phone"
                                placeholder="请输入手机号码" required="" aria-required="true">
                            </div>
                            <div class="clearfix">
                                <div class="inp fl">
                                    <input autocomplete="off" class="public" id="password" type="password" name="password"
                                    maxlength="20" placeholder="请输入登录密码" required="">
                                </div>
                                <div class="fl ml10 tright">
                                    <span>请输入6-20位密码，由数字和字母组成。</span>
                                    <p class="safe_level">安全程度：<span class="low">低</span><span class="middle">中</span><span class="high">高</span></p>
                                </div>
                            </div>
                            <div class="inp">
                                <input autocomplete="off" class="public" id="confirm_password" type="password"
                                name="confirm_password" maxlength="20" placeholder="请确认密码" required="">
                            </div>
                            <div class="inp">
                                <input class="public" placeholder="邀请码（选填）"><a class="ml10" href="javascript:;">请填写推荐人邀请码</a>
                            </div>
                            <div class="inp clearfix">
                                <input class="public code fl" placeholder="请输入验证码"><a class="sms_verification fl ml10"
                                href="javascript:;">获取验证码</a>
                            </div>
                            <div class="inp pt15">
                                <input class="next btn1_hover submit" type="submit" value="同意协议并注册" id="register"><a
                                class="service_btn ml5" href="javascript:;">《用户服务协议》</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div footer add_reg>
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

    import header1 from '../components/header.vue';
    import footer1 from '../components/footer.vue';
    export default {
        components: { header1,footer1 }
    }
</script>
