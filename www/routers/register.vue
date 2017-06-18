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
            <div class="user_content">
                <div class="user_main">
                    <div class="content_wrap">
                        <div class="reg_bg">
                            <div class="reg_wrap">
                                <div class="reg_head clearfix">
                                    <h3 class="fl">注册</h3>
                                    <div class="fr login_tab">已有账户？
                                        <router-link to="/login" class="login_switch">登录</router-link>
                                    </div>
                                </div>
                                <Form ref="formInline" :model="formInline" :rules="ruleInline">

                                    <!--注册-->
                                    <div input-prompt>
                                        <div class="inp">
                                            <Form-item prop="user">
                                                <Input value="" style="width: 300px" type="text"
                                                       v-model="formInline.user" placeholder="请输入手机号码"
                                                       size="large"></Input>
                                            </Form-item>
                                        </div>
                                        <div class="clearfix inp">
                                            <div class=" fl">
                                                <Form-item prop="password" style="width: 300px">
                                                    <Input value="" type="password" v-model="formInline.password"
                                                           placeholder="请输入登录密码" size="large"></Input>
                                                </Form-item>
                                            </div>
                                            <div class="fl" style="margin-left:12px">
                                                <span>请输入6-20位密码，由数字和字母组成。</span>
                                                <p class="safe_level">安全程度：
                                                    <span class="low">低</span>
                                                    <span class="middle">中</span><span class="high">高</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="inp">
                                            <Form-item prop="passwdCheck" style="width: 300px">
                                                <Input value="" type="password" v-model="formInline.passwdCheck"
                                                       placeholder="请输入确认密码" size="large"></Input>
                                            </Form-item>

                                        </div>
                                        <div class="clearfix inp">
                                            <div class="fl">
                                                <Form-item style="width: 300px">
                                                    <Input value="" type="text" placeholder="邀请码（选填）"
                                                           size="large"></Input>
                                                </Form-item>
                                            </div>
                                            <div class="fl tright">
                                                <a class="ml10" href="javascript:;">请填写推荐人邀请码</a>
                                            </div>
                                        </div>
                                        <div class="clearfix inp">
                                            <div class="fl">
                                                <Form-item prop="code" style="width: 200px">
                                                    <Input value="" style="width: 200px" type="text"
                                                           v-model="formInline.code" placeholder="请输入验证码"
                                                           size="large"></Input>
                                                </Form-item>
                                            </div>
                                            <div class="fl tright">

                                                <TimerBtn ref="timerbtn" class="btn btn-default" v-on:run="sendCode"
                                                          style="width: 90px; height: 54px;"
                                                          second="60"></TimerBtn>
                                            </div>
                                        </div>
                                        <div class="clearfix inp">
                                            <div class="fl">
                                                <Form-item style="width: 300px">
                                                    <Button size="large" class="next  btnSubmit" :loading="loading"
                                                            type="primary" @click="handleSubmit('formInline')">
                                                        <span v-if="!loading">同意协议并注册</span>
                                                        <span v-else>Loading...</span></Button>
                                                </Form-item>
                                            </div>
                                            <div class="fl tright">
                                            </div>

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
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
    export default {
        data () {
            const validatePassCheck = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.formInline.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                loading: false,
                formInline: {
                    user: '',
                    password: '',
                    passwdCheck: '',
                    code: ""
                },
                ruleInline: {
                    user: [
                        {required: true, message: '请填写用户名', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请填写密码', trigger: 'blur'},
                        {type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur'}
                    ],
                    passwdCheck: [
                        {validator: validatePassCheck, trigger: 'blur'}
                    ],
                    code: [
                        {required: true, message: '请填验证码', trigger: 'blur'}
                    ],
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
                                parameters: {
                                   "VerifiationCCodeType":1,
                                   "Col_telephone":this.formInline.user,
                                   "Col_password":this.formInline.password,
                                   "InputCode":this.formInline.code
                                },
                                foreEndType: "1",
                                code: "10000002"
                            }
                        ).then(function (response) {
                            var reslute = JSON.parse(response.bodyText);
                            if (reslute.success) {
                                  this.$router.push({ path: 'login' })
                            } else {
                                this.$Message.error(reslute.message);
                            }
                        }, function (response) {
                            this.$Message.error('API接口报错-网络错误!');
                            this.loading = false;
                        });
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            },
            sendCode: function () {
                this.$refs.timerbtn.start(); //启动倒计时
                this.$http.post(
                    this.$api,
                    {
                        parameters: {
                            "VerifiationCCodeType": 1,
                            "Col_telephone": this.formInline.user
                        },
                        foreEndType: "1",
                        code: "90000102"
                    }
                ).then(function (response) {
                    var reslute = JSON.parse(response.data);
                    if (reslute.success) {
                        this.$route.router.go({name: "main"})
                    } else {
                        this.$Message.error(reslute.message);
                    }
                }, function (response) {
                    this.$Message.error('API接口报错-网络错误!');
                    this.loading = false;
                });

            }
        },
        created(){
            document.body.style.backgroundColor='#fff';
        },
        beforeDestroy(){
            document.body.style.backgroundColor='#f5f5f5';
        }
    }

</script>
