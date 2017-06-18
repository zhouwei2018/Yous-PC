<style scoped lang="less">
    @import "../resources/css/base.less";
    @import "../resources/css/register/register.less";
    @import "../resources/css/register/find_pass.less";
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
                    <div class="find_pass_title">找回密码</div>
                    <ul class="mod-sub-nav clearfix">
                        <li class="mod-sub-list1 active">确认帐号</li>
                        <li class="mod-sub-list2 ">安全验证</li>
                        <li class="mod-sub-list3">重置密码</li>
                    </ul>

                    <!--确认账号-->
                    <div class="new_pass_wrap">
                        <div class="mb15">请填写需要找回的账号</div>
                        <Form ref="formInline" :model="formInline" :rules="ruleInline">

                            <div class="user_item clearfix">
                                <Form-item prop="user" class="fl">
                                    <Input value="" class="pass_input" id="phone_num" type="text"
                                           v-model="formInline.user"
                                           placeholder="请输入手机号码" size="large"></Input>
                                </Form-item>
                            </div>
                            <div class="clearfix">
                                <div class="user_item clearfix fl">
                                    <Form-item prop="password">
                                        <Input value="" class="pass_input w240 mr10"
                                               id="identify_code" type="password"
                                               placeholder="请输入验证码"
                                               v-model="formInline.password" size="large"></Input>
                                    </Form-item>
                                </div>
                                <div class="fl identify_img_wrap">
                                    <i class="identify_img"></i>
                                    <span class="change_identify">换一张</span>
                                </div>
                            </div>

                            <div class="user_item clearfix mt25">
                                <Form-item>
                                    <Button size="large" class="next pass_input btnSubmit" :loading="loading"
                                            type="primary"
                                            @click="handleSubmit('formInline')">
                                        <span v-if="!loading">立即登录</span>
                                        <span v-else>Loading...</span></Button>
                                </Form-item>
                            </div>
                        </Form>
                    </div>

                    <!--安全验证-->
                    <div class="new_pass_wrap none">
                        <div class="mb15">为了您的账号安全,请完成身份验证</div>
                        <Form ref="formInline" :model="formInline" :rules="ruleInline">

                            <div class="user_item clearfix">
                                <Form-item prop="user" class="fl">
                                    <Input value="" class="pass_input"  type="text"
                                           v-model="formInline.user"
                                           placeholder="187……1234" size="large"></Input>
                                </Form-item>
                            </div>

                            <div class="clearfix">
                                <div class="user_item clearfix fl">
                                    <Form-item prop="password">
                                        <Input value="" class="pass_input w280 mr10" type="password"
                                               placeholder="请输入验证码"
                                               v-model="formInline.password" size="large"></Input>
                                    </Form-item>
                                </div>
                                <div class="fl tright">

                                    <TimerBtn ref="timerbtn" class="btn btn-default" v-on:run="sendCode"
                                              style="width: 100px; height: 54px;"
                                              second="60"></TimerBtn>
                                </div>
                            </div>


                            <div class="user_item clearfix mt25">
                                <Form-item>
                                    <Button size="large" class="next pass_input btnSubmit" :loading="loading"
                                            type="primary">
                                        <span v-if="!loading">下一步</span>
                                        <span v-else>Loading...</span></Button>
                                </Form-item>
                            </div>
                        </Form>
                    </div>

                    <!--重置密码-->
                    <div class="new_pass_wrap none">
                        <Form ref="formInline" :model="formInline" :rules="ruleInline">

                            <div class="user_item clearfix">
                                <label for="new_password">新密码</label>
                                <Form-item prop="user" class="fl">
                                    <Input value="" class="pass_input" id="new_password" type="text"
                                           v-model="formInline.user"
                                           placeholder="请输入手机号码" size="large"></Input>
                                </Form-item>
                            </div>

                            <div class="user_item clearfix">
                                <label for="new_password_sure">确认新密码</label>
                                <Form-item prop="password" class="fl">
                                    <Input value="" class="pass_input" id="new_password_sure" type="password"
                                           placeholder="请输入密码"
                                           v-model="formInline.password" size="large"></Input>
                                </Form-item>
                            </div>
                            <div class="user_item clearfix mt25">
                                <label for="new_password_sure"></label>
                                <Form-item>
                                    <Button size="large" class="next pass_input btnSubmit" :loading="loading"
                                            type="primary"
                                            @click="handleSubmit('formInline')">
                                        <span v-if="!loading">确  定</span>
                                        <span v-else>Loading...</span></Button>
                                </Form-item>
                            </div>
                        </Form>
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

    export default {
        data () {
            return {
                loading: false,
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        {required: true, message: '请输入手机号', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请填写密码', trigger: 'blur'},
                        {type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur'}
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
                                parameters: {
                                    "Col_telephone": this.formInline.user,
                                    "Col_password": this.formInline.password
                                },
                                foreEndType: "1",
                                code: "10000001"
                            }
                        ).then(function (response) {
                            var reslute = JSON.parse(response.bodyText);
                            if (reslute.success) {
                                this.$router.push({path: 'admin'})

                            } else {
                                this.$Message.error(reslute.message);
                            }
                            this.loading = false;

                        }, function (response) {
                            this.$Message.error('API接口报错-网络错误!');
                            this.loading = false;
                        });
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            }

        },
        created(){
            document.body.style.backgroundColor = '#fff';
        },
        beforeDestroy(){
            document.body.style.backgroundColor = '#f5f5f5';
        }
    }
</script>
