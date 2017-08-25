<style scoped lang="less">
    @import "../resources/css/collect/collect.less";
</style>

<template>
    <div class="all">
        <!--header-->
        <header1></header1>

        <!--activity start-->
        <div activity>
            <h3 class="contents act_head">创业活动</h3>

            <div class="act_wrap">
                <ul>
                    <li class="clearfix">
                        <img class="fl" src="../resources/images/activity/activity01.jpg" alt=""/>

                        <div class="fl act_text_wrap">
                            <h4>幼狮未来公开课第二期<span class="pub_ver_line"></span>助企业成为独角兽</h4>
                            <p>主办单位：北京幼狮科技有限公司</p>
                            <p>活动时间：2017/5/20  13:30-16:00</p>
                            <p>活动类型：讲座/公开课</p>
                            <p>针对人群：企业CEO、创始人</p>
                            <p>参与人数：50人</p>
                            <p>活动地点：北京市朝阳区建外SOHO东区A座</p>
                            <a href="javascript:;" class="sign_up_btn">报名结束</a>
                        </div>
                    </li>
                    <li class="clearfix">
                        <img class="fl" src="../resources/images/activity/activity02.jpg" alt=""/>

                        <div class="fl act_text_wrap">
                            <h4>幼狮企业服务沙龙第一期<span class="pub_ver_line"></span>战略定位给企业做瘦身</h4>
                            <p>主办单位：北京幼狮科技有限公司</p>
                            <p>活动时间：2017/4/15 13:30-16:00</p>
                            <p>活动类型：讲座/公开课</p>
                            <p>针对人群：企业CEO、创始人</p>
                            <p>参与人数：50人</p>
                            <p>活动地点：北京市朝阳区双桥</p>
                            <a href="javascript:;" class="sign_up_btn">报名结束</a>
                        </div>
                    </li>
                    <li class="clearfix">
                        <img class="fl" src="../resources/images/activity/activity03.jpg" alt=""/>

                        <div class="fl act_text_wrap">
                            <h4>幼狮未来公开课第一期<span class="pub_ver_line"></span>HR人才战略</h4>
                            <p>主办单位：北京幼狮科技有限公司</p>
                            <p>活动时间：2017/3/15  13:30-16:00</p>
                            <p>活动类型：讲座/公开课</p>
                            <p>针对人群：企业CEO、创始人</p>
                            <p>参与人数：50人</p>
                            <p>活动地点：北京市朝阳区望京</p>
                            <a href="javascript:;" class="sign_up_btn">报名结束</a>
                        </div>
                    </li>
                </ul>

            </div>
        </div>


        <!--footer-->
        <footer1></footer1>
    </div>
</template>
<script>

    import header1 from '../components/header.vue';
    import footer1 from '../components/footer.vue';
    export default {
        components: {header1, footer1},
        mounted(){
            $(window).scrollTop(0);
        }
    }
</script>
