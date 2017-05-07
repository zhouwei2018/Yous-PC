<style scoped lang="less">
    @import "../resources/css/invest/invest.less";
</style>


<template>
    <div class="all">
      <!--header-->
      <header1></header1>

      <!--invest start-->
      <div invest>
          <div class="invest_banner">
              <h3>幼狮空间投资平台，您身边的投融资专家</h3>

              <p>为优质项目提供更多的投融资对接机会</p>

              <p>为专业的投资机构、投资人提供更多的项目选择</p>
              <a href="javascript:;" class="Release_pro_btn">发布项目</a>
          </div>

          <div class="invest_cooperate">
              <ul class="clearfix contents">
                  <li class="fl">
                      <img src="../resources/images/invest/venture.png" alt=""/>

                      <div>
                          <a href="javascript:;" class="coop_btn">我是创业者</a>
                      </div>
                      <p>有了项目，融资难</p>

                      <p>快速创建项目，与众多金牌投资人/机构零距离接触</p>
                  </li>
                  <li class="fl">
                      <img src="../resources/images/invest/investor.png" alt=""/>

                      <div>
                          <a href="javascript:;" class="coop_btn bg_blue">我是投资人</a>
                      </div>
                      <p>想要找到好项目</p>

                      <p>下载幼狮空间客户端，1分钟即刻认证成为投资人</p>
                  </li>
              </ul>
          </div>

          <div class="invest_procedure">
              <h3>申请流程</h3>
              <ul class="clearfix contents">
                  <li class="fl clearfix">
                      <div class="fl proce_text">
                          <img src="../resources/images/invest/project01.png" alt=""/>
                          <h4>项目发布</h4>

                          <p>点击”发布项目”提交项目详情</p>
                      </div>
                      <i class="fl proce_icon"></i>
                  </li>
                  <li class="fl clearfix">
                      <div class="fl proce_text">
                          <img src="../resources/images/invest/project02.png" alt=""/>
                          <h4>项目评审</h4>

                          <p>对项目进行初步评估审核，将于3个工作日内完成评审结果将会短信通知</p>
                      </div>
                      <i class="fl proce_icon"></i>
                  </li>
                  <li class="fl clearfix">
                      <div class="fl proce_text">
                          <img src="../resources/images/invest/project03.png" alt=""/>
                          <h4>项目上线</h4>

                          <p>项目将展示在幼狮空间客户端投融资平台开启与创始人一对一电话交流/面谈</p>
                      </div>
                      <i class="fl proce_icon"></i>
                  </li>
                  <li class="fl clearfix">
                      <div class="fl proce_text">
                          <img src="../resources/images/invest/project04.png" alt=""/>
                          <h4>合作撮合</h4>

                          <p>合作意向的项目幼狮空间将为双方提供合作机会为投融资双方保驾护航</p>
                      </div>
                  </li>

              </ul>
          </div>

          <div class="increment_wrap">
              <h3>增值服务</h3>

              <div class="contents">
                  <ul class="clearfix">
                      <li class="fl">
                          <img src="../resources/images/invest/increment01.png" alt=""/>
                          <p>市场传播</p>
                      </li>
                      <li class="fl brown">
                          <img src="../resources/images/invest/increment02.png" alt=""/>
                          <p>合作优惠</p>
                      </li>
                      <li class="fl red">
                          <img src="../resources/images/invest/increment03.png" alt=""/>
                          <p>客户关怀</p>
                      </li>
                  </ul>
              </div>
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
    components: { header1,footer1 }
}
</script>
