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

          <div class="user_content login">
              <div class="user_main">
                  <div class="content_wrap login fr">
                      <div class="login_bg">
                          <h3 class="tc">用户登录</h3>
                          <!--登录-->
                        <Form  ref="formInline" :model="formInline" :rules="ruleInline">
                                <Form-item prop="user" >
                                    <Input  value="" style="width: 100%" type="text" v-model="formInline.user" placeholder="请输入手机号码"  size="large"></Input>
                                </Form-item>

                                 <Form-item prop="password" >
                                    <Input value="" style="width: 100%"  type="password" placeholder="请输入密码" v-model="formInline.password" size="large"></Input>
                                 </Form-item>

                                 <Form-item >
                                   <Button size="large" class="next  btnSubmit" :loading="loading" type="primary" @click="handleSubmit('formInline')">
                                     <span v-if="!loading">立即登录</span>
                                     <span v-else>Loading...</span></Button>
                                </Form-item>
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
    components: { header1,footer1 },
    data () {
            return {
                loading: false,
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请填写用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                //this.$Message.success('正在提交，请稍等!');
                this.$refs[name].validate((valid) => {
                    if (valid) {
                      this.loading = true;
                      this.$http.post(
                              this.$api,
                              {
                                  parameters:{
                                      "Col_telephone":this.formInline.user,
                                      "Col_password":this.formInline.password
                                  },
                                  foreEndType:"1",
                                  code:"10000001"
                              }
                      ).then(function(response) {
                                  var  reslute=JSON.parse(response.bodyText);
                                  if(reslute.success){
                                      this.$router.push({ path: 'admin' })

                                  }else{
                                      this.$Message.error(reslute.message);
                                  }
                                  this.loading = false;

                    }, function(response) {
                          this.$Message.error('API接口报错-网络错误!');
                          this.loading = false;
                    });
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            }
        }
}
</script>
