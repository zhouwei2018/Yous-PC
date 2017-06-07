<style scoped lang="less">
    @import "../resources/css/collect/collect.less";
</style>
<style>
    body{
        background-color: #f5f5f5 !important;
    }
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
                          <h4>幼狮空间送你三重创业大礼包（报名中...）</h4>

                          <p>活动时间：3月21日-4月21日</p>

                          <p>活动地点：幼狮空间</p>

                          <p>活动摘要：价值万元的工位免费赠送（限量）、世界500强CEO商战有声课免费听、互联网中高端人才简历免费下载、人才免费直租试用，幼狮空间送您创业大礼包啦~</p>
                          <a href="javascript:;" class="sign_up_btn">我要报名</a>
                      </div>
                  </li>
                  <li class="clearfix">
                      <img class="fl" src="../resources/images/activity/activity02.jpg" alt=""/>

                      <div class="fl act_text_wrap">
                          <h4>幼狮空间送你三重创业大礼包（报名中...）</h4>

                          <p>活动时间：3月21日-4月21日</p>

                          <p>活动地点：幼狮空间</p>

                          <p>活动摘要：价值万元的工位免费赠送（限量）、世界500强CEO商战有声课免费听、互联网中高端人才简历免费下载、人才免费直租试用，幼狮空间送您创业大礼包啦~</p>
                          <a href="javascript:;" class="sign_up_btn">我要报名</a>
                      </div>
                  </li>
                  <li class="clearfix">
                      <img class="fl" src="../resources/images/activity/activity03.jpg" alt=""/>

                      <div class="fl act_text_wrap">
                          <h4>幼狮空间送你三重创业大礼包（报名中...）</h4>

                          <p>活动时间：3月21日-4月21日</p>

                          <p>活动地点：幼狮空间</p>

                          <p>活动摘要：价值万元的工位免费赠送（限量）、世界500强CEO商战有声课免费听、互联网中高端人才简历免费下载、人才免费直租试用，幼狮空间送您创业大礼包啦~</p>
                          <a href="javascript:;" class="sign_up_btn">我要报名</a>
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
    components: { header1,footer1 },
    mounted(){
        $(window).scrollTop(0);
    }
}
</script>
