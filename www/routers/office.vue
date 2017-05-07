<style scoped lang="less">
    @import "../resources/css/office/office.less";
</style>
<style scoped>
</style>

<template>
    <div class="all">
      <!--header-->
      <header1></header1>

      <!--office  start-->
      <div office>
          <h2>
              <div class="contents">一站式服务</div>
          </h2>
          <div class="contents procedure">
              <ul class="clearfix">
                  <li class="clearfix">
                      <span class="office_num one fl"></span>

                      <div class="fl office_mid">
                          <span class="office_icon icon1"></span>

                          <p class="office_text">确定需求</p>
                      </div>
                      <span class="office_arrow"></span>
                  </li>
                  <li class="clearfix">
                      <span class="office_num two fl"></span>

                      <div class="fl office_mid">
                          <span class="office_icon icon2"></span>

                          <p class="office_text">确定需求</p>
                      </div>
                      <span class="office_arrow"></span>
                  </li>
                  <li class="clearfix">
                      <span class="office_num three fl"></span>

                      <div class="fl office_mid">
                          <span class="office_icon icon3"></span>

                          <p class="office_text">确定需求</p>
                      </div>
                      <span class="office_arrow"></span>
                  </li>
                  <li class="clearfix">
                      <span class="office_num four fl"></span>

                      <div class="fl office_mid">
                          <span class="office_icon icon4"></span>

                          <p class="office_text">确定需求</p>
                      </div>
                  </li>
              </ul>
          </div>

          <div class="center_trade clearfix contents">
              <div class="center_trade_head clearfix">
                  <span class="fl">核心商圈</span>

                  <div class="fl">
                      <a href="javascript:;" class="active">CBD区</a>
                      <a href="javascript:;">朝阳门</a>
                      <a href="javascript:;">建国门</a>
                  </div>
              </div>

              <div class="center_list clearfix">
                  <ul class="fl">
                      <li class="clearfix">
                          <img class="fl" src="../resources/images/office/tradeArea01.png" alt=""/>
                          <div class="fl center_detail">
                              <h3>建外SOHO</h3>
                              <span>北京市朝阳区东三环中路</span>
                              <ul>
                                  <li><span class="list_square"></span>共8000个工位，40独立办公室</li>
                                  <li><span class="list_square"></span>返税优惠 | 装修定制 | 创业补贴</li>
                                  <li><span class="list_square"></span>最新活动：创业分享会“网红经济”</li>
                              </ul>
                              <a href="javascript:;" class="apply_btn">申请入驻</a>
                          </div>
                      </li>
                      <li class="clearfix">
                          <img class="fl" src="../resources/images/office/tradeArea02.png" alt=""/>
                          <div class="fl center_detail">
                              <h3>建外SOHO</h3>
                              <span>北京市朝阳区东三环中路</span>
                              <ul>
                                  <li><span class="list_square"></span>共8000个工位，40独立办公室</li>
                                  <li><span class="list_square"></span>返税优惠 | 装修定制 | 创业补贴</li>
                                  <li><span class="list_square"></span>最新活动：创业分享会“网红经济”</li>
                              </ul>
                              <a href="javascript:;" class="apply_btn">申请入驻</a>
                          </div>
                      </li>
                      <li class="clearfix">
                          <img class="fl" src="../resources/images/office/tradeArea02.png" alt=""/>
                          <div class="fl center_detail">
                              <h3>建外SOHO</h3>
                              <span>北京市朝阳区东三环中路</span>
                              <ul>
                                  <li><span class="list_square"></span>共8000个工位，40独立办公室</li>
                                  <li><span class="list_square"></span>返税优惠 | 装修定制 | 创业补贴</li>
                                  <li><span class="list_square"></span>最新活动：创业分享会“网红经济”</li>
                              </ul>
                              <a href="javascript:;" class="apply_btn">申请入驻</a>
                          </div>
                      </li>
                  </ul>
                  <div class="fl trade_per">
                      <h3>与我们的团队取得联系</h3>
                      <span class="tel_number">联系电话：400-800-8888</span>
                      <div class="manager_wrap">
                          <img src="../resources/images/office/trade_person.png" alt="" class="manager_portrait" />
                          <span class="manager_name">常春雷</span>
                          <span>社区经理</span>
                      </div>
                      <div class="manage_attract">
                          <i class="double_marks"></i>
                          <p>这里是一个有趣的空间，办公、运动、社交、美食...我们终陷红尘之中，但是总会有人仰望星空。</p>
                      </div>
                  </div>
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
