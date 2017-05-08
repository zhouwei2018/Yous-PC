<style scoped lang="less">
    @import "../resources/css/base.less";
    @import "../resources/css/register/register.less";
</style>

<template>
    <div class="all">
      <!--topper  begin-->
      <div top_box white>
          <div class="contents" header>
              <div>
                  <h2 class="lion_text">幼狮空间</h2>
                  <router-link to="/index" class="login_switch"><img src="../resources/images/lion_logo.png" class="lion_logo"/></router-link>
              </div>
          </div>

          <div class="content_wrap login">
              <div class="login_bg">
                  <h3 class="tc">用户登录</h3>
                  <!--登录-->
                  <form id="signinForm" method="get" action="" novalidate="novalidate">
                      <div input-prompt inp_login>
                          <div class="inp">
                              <input autocomplete="off" value="" class="public" maxlength="11" id="phone" type="phone"
                                     name="phone"
                                     placeholder="请输入手机号码" required="">
                              <label id="phone_error" class="error" style="display: none;">请输入11位手机号</label>
                          </div>
                          <div class="inp clearfix">
                              <input class="public code fl" value="" placeholder="请输入验证码"><a class="sms_verification ml10 white fl"
                                                                                          href="javascript:;">获取验证码</a>
                              <label id="password_error" class="error" style="display: none;">请输入密码</label>
                          </div>
                          <div class="inp pt15">
                              <input class="next btn1_hover submit" type="submit" value="立即登录" id="login"></a>
                          </div>
                      </div>
                  </form>
                  <div class="status_switch">
                      <router-link to="/register">注册幼狮账号</router-link>
                      <span class="line_vertical"></span>
                      <router-link to="/register">忘记密码？</router-link>
                  </div>

                  <div class="login_mode">
                      <div class="login_mode_tab">
                          <span></span>
                          <i>其他方式登录</i>
                          <span class="right"></span>
                      </div>
                      <a href="javascript:;" class="weixin_switch"></a>
                  </div>
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

import header1 from '../components/header.vue';
import footer1 from '../components/footer.vue';
export default {
    components: { header1,footer1 }
}
</script>
