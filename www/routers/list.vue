<style scoped lang="less">
    @import "../resources/css/list/list.less";
    @import "../resources/css/right_column/right_column.less";
    @import "../resources/css/update/page.less";
</style>
<style scoped>

</style>

<template>
    <div class="all">
        <!--header-->
        <header1></header1>

        <!--list  start-->
        <div list>

            <div class="search_box">
                <div class="contents clearfix">
                    <div class="list_search fl">
                        <div class="fl">
                            <input type="text" placeholder="请输入写字楼名称或商圈" maxlength="30">
                            <div class="search-3">
                                <div class="s-result sem-search" id="association" style="display: none;">智能提示</div>
                            </div>
                        </div>
                        <a class="map_btn" id="bannerSearchbtn">搜索</a>
                    </div>
                </div>
            </div>

            <div class="address_tit contents">
                <h1>
                    <i class="sem_icon"></i>
                    <a href="/">幼狮空间</a>
                    <a class="text_gray6">&gt; 写字楼出租</a>
                </h1>
            </div>

            <!--sem-main-->
            <div class="contents">
                <!-- 筛选区域 start  -->
                <div class="screening_conditions mt15">
                    <div class="screening_item">
                        <div class="screening_conts tj_box" id="care_nav">
                            <a href="javascript:;" class="active"><i class="sem_icon quyu"></i>区域</a>
                            <a href="javascript:;"><i class="sem_icon ditie"></i>地铁</a>
                        </div>

                        <div class="screening_conts_detail pv20">
                            <div class="screening_conts_list weizhi clearfix tj_box_1">
                                <span class="screening_title mr15">位置:</span>
                                <a class="active" href="javascript:;">全部</a>
                                <a href="javascript:;">朝阳</a>
                                <a href="javascript:;">海淀</a>
                                <a href="javascript:;">西城</a>
                                <a href="javascript:;">东城</a>
                                <a href="javascript:;">丰台</a>
                                <a href="javascript:;">昌平</a>
                                <a href="javascript:;">大兴</a>
                                <a href="javascript:;">石景山</a>
                                <a href="javascript:;">通州</a>
                                <a href="javascript:;">顺义</a>
                            </div>
                        </div>
                    </div>

                    <div class="screening_conts_detail pv20">
                        <div class="tj_box_1 screening_conts_list clearfix">
                            <span class="screening_title mr15">面积:</span>

                            <a class="active">全部</a>
                            <a href="javascript:;">
                                <span class="font_num">0</span>-<span class="font_num">100</span><span class="font_num">m²</span>
                            </a>
                            <a href="javascript:;">
                                <span class="font_num">100</span>-<span class="font_num">200</span><span
                                    class="font_num">m²</span>
                            </a>
                            <a href="javascript:;">
                                <span class="font_num">200</span>-<span class="font_num">300</span><span
                                    class="font_num">m²</span>
                            </a>
                            <a href="javascript:;">
                                <span class="font_num">300</span>-<span class="font_num">500</span><span
                                    class="font_num">m²</span>
                            </a>
                            <a href="javascript:;">
                                <span class="font_num">500</span>-<span class="font_num">1000</span><span
                                    class="font_num">m²</span>
                            </a>
                            <a href="javascript:;">
                                <span class="font_num">1000</span>-<span class="font_num">2000</span><span
                                    class="font_num">m²</span>
                            </a>
                            <a href="javascript:;">
                                <span class="font_num">2000</span>-<span class="font_num">3000</span><span
                                    class="font_num">m²</span>
                            </a>
                            <a href="javascript:;">
                                &gt;<span class="font_num">3000</span><span class="font_num">m²</span>
                            </a>
                            <div class="area_wrap pr">
                                <div class="interval pr" style="display: block">
                                    <input type="text" name="temp-beginArea" value="">
                                    <samp>-</samp>
                                    <input type="text" name="temp-endArea" value="">
                                    <em class="ml05 font_num">m²</em>
                                </div>

                                <!--价格选择窗 默认隐藏 start-->
                                <div class="interval_pop clearfix" style="display: none;">
                                    <div class="interval ma0">
                                        <form style="display:inline-block" id="areaForm" action="/searchlist/">
                                            <input type="text" name="beginArea" maxlength="5" value=""
                                                   onkeyup="this.value=this.value.replace(/[^\d.]/g,'');"
                                                   onafterpaste="this.value=this.value.replace(/[^\d.]/g,'')">
                                            <samp>—</samp>
                                            <input type="text" name="endArea" maxlength="5" value=""
                                                   onkeyup="this.value=this.value.replace(/[^\d.]/g,'');"
                                                   onafterpaste="this.value=this.value.replace(/[^\d.]/g,'')">
                                            <a class="confrim-btn cur-pointer" style="display: none;" id="areaConfirm">确定</a>
                                            <em class="ml05 font-num">m²</em>
                                        </form>
                                    </div>
                                </div>
                                <!--价格选择窗 end-->
                            </div>

                        </div>
                    </div>
                    <div class="screening_conts_detail clearfix pv20" id="price-list">
                        <div class="tj_box_1 screening_conts_list clearfix">
                            <span class="screening_title mr15">价格:</span>

                            <a class="active" href="javascript:;">全部</a>
                            <a href="javascript:;"><span class="font_num">1</span>-<span class="font_num">3</span>元</a>
                            <a href="javascript:;"><span class="font_num">3</span>-<span class="font_num">5</span>元</a>
                            <a href="javascript:;"><span class="font_num">5</span>-<span class="font_num">8</span>元</a>
                            <a href="javascript:;"><span class="font_num">8</span>-<span class="font_num">10</span>元</a>
                            <a href="javascript:;"><span class="font_num">10</span>-<span
                                    class="font_num">20</span>元</a>
                            <a href="javascript:;"><span class="font_num">20</span>-<span
                                    class="font_num">30</span>元</a>
                            <a href="javascript:;">&gt;<span class="font_num">30</span>元</a>
                            <div class="price_wrap pr">
                                <div class="interval pr">
                                    <input name="temp-startprice" type="text">
                                    <samp>-</samp>
                                    <input name="temp-endprice" type="text">
                                    <em class="text-black ml05">元</em>
                                </div>
                                <div class="interval_pop clearfix" style="display: none;">
                                    <div class="interval ma0">
                                        <form action="/searchlist/">
                                            <input type="text" id="beginPrice4Day" name="startprice" maxlength="5"
                                                   onkeyup="this.value=this.value.replace(/[^\d.]/g,'');"
                                                   onafterpaste="this.value=this.value.replace(/[^\d.]/g,'')">
                                            <samp>-</samp>
                                            <input type="text" id="endPrice4Day" name="endprice" maxlength="5"
                                                   onkeyup="this.value=this.value.replace(/[^\d.]/g,'');"
                                                   onafterpaste="this.value=this.value.replace(/[^\d.]/g,'')">
                                            <em class="text-black ml05">元</em>
                                            <input type="hidden" name="type" value="1">

                                            <a class="cur-pointer priceConfirm" style="display: none;">确定</a>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div class="conts_section ml15">
                                <a class="conts_option tag"><em>按单价</em></a>
                                <a class="conts_option"><em>按总价</em></a>
                            </div>
                        </div>
                        <div class="tj_box_1 screening_conts_list clearfix none">
                            <span class="screening_title mr15">价格:</span>

                            <a class="active" href="/searchlist/">全部</a>
                            <a href="javascript:;"><span class="font_num">0</span>-<span class="font_num">1</span>万元</a>
                            <a href="javascript:;"><span class="font_num">1</span>-<span class="font_num">3</span>万元</a>
                            <a href="javascript:;"><span class="font_num">3</span>-<span class="font_num">5</span>万元</a>
                            <a href="javascript:;"><span class="font_num">5</span>-<span class="font_num">8</span>万元</a>
                            <a href="javascript:;"><span class="font_num">8</span>-<span
                                    class="font_num">10</span>万元</a>
                            <a href="javascript:;"><span class="font_num">10</span>-<span
                                    class="font_num">20</span>万元</a>
                            <a href="javascript:;"><span class="font_num">20</span>-<span
                                    class="font_num">30</span>万元</a>
                            <a href="javascript:;">&gt;<span class="font_num">30</span>万元</a>
                            <div class="price_wrap pr">
                                <div class="interval pr">
                                    <input type="text" name="temp-startprice">
                                    <samp>-</samp>
                                    <input type="text" name="temp-endprice">
                                    <em class="text-black ml05">万元</em>
                                </div>
                                <div class="interval_pop clearfix">
                                    <div class="interval ma0">
                                        <form action="">
                                            <input type="text" name="startprice" maxlength="5"
                                                   onkeyup="this.value=this.value.replace(/[^\d.]/g,'');"
                                                   onafterpaste="this.value=this.value.replace(/[^\d.]/g,'')">
                                            <samp>-</samp>
                                            <input type="text" name="endprice" maxlength="5"
                                                   onkeyup="this.value=this.value.replace(/[^\d.]/g,'');"
                                                   onafterpaste="this.value=this.value.replace(/[^\d.]/g,'')">
                                            <input type="hidden" name="type" value="2">

                                            <em class="text-black ml05">万元</em>
                                            <a class="cur-pointer priceConfirm" style="display: none;">确定</a>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="conts_section ml15">
                                <a class="conts_option"><em>按单价</em></a>
                                <a class="conts_option tag"><em>按总价</em></a>
                            </div>
                        </div>
                    </div>
                    <div class="screening_conts_detail clearfix pv20">
                        <div class="screening_conts_list clearfix">
                            <span class="screening_title mr15">特色:</span>
                            <a href="javascript:;" class="active">全部</a>
                            <a href="javascript:;">地铁周边</a>
                            <a href="javascript:;">互联网</a>
                            <a href="javascript:;">金融精英</a>
                            <a href="javascript:;">健康空气</a>
                            <a href="javascript:;">LEED</a>
                            <a href="javascript:;">新楼</a>
                            <a href="javascript:;">地标建筑</a>
                            <a href="javascript:;">创意园区</a>
                            <a href="javascript:;">名企开发商</a>
                            <a href="javascript:;">知名物业</a>
                            <a href="javascript:;">5A写字楼</a>
                            <a href="javascript:;">纳什空间</a>
                        </div>
                    </div>
                </div>
                <!-- 筛选区域 end  -->

                <div class="list_result clearfix mb40 pr" id="list_result">
                    <div class="office_list pt20">
                        <div class="conditions_result_box clearfix tj_box">
                            <div class="fl mt07">
                                <i class="sem_icon"></i><em class="result_conts_txt">为您找到 <span
                                    class="font-num">2580</span> 栋写字楼</em>
                            </div>
                        </div>

                        <div class="sort_box">
                            <a href="javascript:;" class="on">默认</a>
                            <a href="javascript:;" class="pr">面积<p class="bubble">点击按面积从小到大排序</p></a>
                            <a href="javascript:;" class="pr">价格<p class="bubble">点击按价格从低到高排序</p></a>
                        </div>
                        <hr class="sort_box_line">

                        <!--搜索结果list start-->
                        <div class="office_list_item">
                            <a href="javascript:;" class="db pr clearfix">
                                <div class="fl pr">
                                    <img src="http://img1.static.uban.com/fcfc04d8-26d0-11e5-a40d-00163e00571b.jpg-wh480x320"
                                         alt="望京SOHO">
                                </div>
                                <div class="price_box tright">
                                    <span class="db text_gray6"><em class="font26 font_num fb text_pink_app">6.5</em> 元/<span
                                            class="font-num">m²</span>·天</span>
                                    <span class="db text_gray9 font12 mt10">均价</span>
                                </div>
                                <dl class="office_building_cont pr clearfix">
                                    <dt class="mb25 clearfix">
                                        <b class="fl">望京SOHO</b>
                                    </dt>
                                    <dd>
                                        <i class="sem_icon item_address"></i>[朝阳-望京] 望京街与阜安西路交叉路口
                                    </dd>
                                    <dd>
                                        <i class="sem_icon item_area"></i>可租面积 <span class="text-black fb">0-4576</span><span
                                            class="font-num"> m²</span>, 待租办公室&nbsp;<span
                                            class="font-num text-black fb">2380</span>&nbsp;套
                                    </dd>
                                    <dd>
                                        <span><i class="sem_icon item_see"></i>近7天有 <b
                                                class="hover">27</b> 位用户咨询过</span>
                                    </dd>
                                    <dd class="last_fix_bottom">
                                        <div class="fl building_tag">
                                            <span>互联网</span>
                                            <span>LEED认证</span>
                                            <span>地标建筑</span>
                                            <span>名企开发商</span>
                                            <span>知名物业</span>
                                        </div>
                                    </dd>
                                </dl>
                            </a>
                        </div>
                        <div class="office_list_item">
                            <a href="javascript:;" class="db pr clearfix">
                                <div class="fl pr">
                                    <img src="http://img1.static.uban.com/fcfc04d8-26d0-11e5-a40d-00163e00571b.jpg-wh480x320"
                                         alt="望京SOHO">
                                </div>
                                <div class="price_box tright">
                                    <span class="db text_gray6"><em class="font26 font_num fb text_pink_app">6.5</em> 元/<span
                                            class="font-num">m²</span>·天</span>
                                    <span class="db text_gray9 font12 mt10">均价</span>
                                </div>
                                <dl class="office_building_cont pr clearfix">
                                    <dt class="mb25 clearfix">
                                        <b class="fl">望京SOHO</b>
                                    </dt>
                                    <dd>
                                        <i class="sem_icon item_address"></i>[朝阳-望京] 望京街与阜安西路交叉路口
                                    </dd>
                                    <dd>
                                        <i class="sem_icon item_area"></i>可租面积 <span class="text-black fb">0-4576</span><span
                                            class="font-num"> m²</span>, 待租办公室&nbsp;<span
                                            class="font-num text-black fb">2380</span>&nbsp;套
                                    </dd>
                                    <dd>
                                        <span><i class="sem_icon item_see"></i>近7天有 <b
                                                class="hover">27</b> 位用户咨询过</span>
                                    </dd>
                                    <dd class="last_fix_bottom">
                                        <div class="fl building_tag">
                                            <span>互联网</span>
                                            <span>LEED认证</span>
                                            <span>地标建筑</span>
                                            <span>名企开发商</span>
                                            <span>知名物业</span>
                                        </div>
                                    </dd>
                                </dl>
                            </a>
                        </div>
                        <div class="office_list_item">
                            <a href="javascript:;" class="db pr clearfix">
                                <div class="fl pr">
                                    <img src="http://img1.static.uban.com/fcfc04d8-26d0-11e5-a40d-00163e00571b.jpg-wh480x320"
                                         alt="望京SOHO">
                                </div>
                                <div class="price_box tright">
                                    <span class="db text_gray6"><em class="font26 font_num fb text_pink_app">6.5</em> 元/<span
                                            class="font-num">m²</span>·天</span>
                                    <span class="db text_gray9 font12 mt10">均价</span>
                                </div>
                                <dl class="office_building_cont pr clearfix">
                                    <dt class="mb25 clearfix">
                                        <b class="fl">望京SOHO</b>
                                    </dt>
                                    <dd>
                                        <i class="sem_icon item_address"></i>[朝阳-望京] 望京街与阜安西路交叉路口
                                    </dd>
                                    <dd>
                                        <i class="sem_icon item_area"></i>可租面积 <span class="text-black fb">0-4576</span><span
                                            class="font-num"> m²</span>, 待租办公室&nbsp;<span
                                            class="font-num text-black fb">2380</span>&nbsp;套
                                    </dd>
                                    <dd>
                                        <span><i class="sem_icon item_see"></i>近7天有 <b
                                                class="hover">27</b> 位用户咨询过</span>
                                    </dd>
                                    <dd class="last_fix_bottom">
                                        <div class="fl building_tag">
                                            <span>互联网</span>
                                            <span>LEED认证</span>
                                            <span>地标建筑</span>
                                            <span>名企开发商</span>
                                            <span>知名物业</span>
                                        </div>
                                    </dd>
                                </dl>
                            </a>
                        </div>
                        <div class="office_list_item">
                            <a href="javascript:;" class="db pr clearfix">
                                <div class="fl pr">
                                    <img src="http://img1.static.uban.com/fcfc04d8-26d0-11e5-a40d-00163e00571b.jpg-wh480x320"
                                         alt="望京SOHO">
                                </div>
                                <div class="price_box tright">
                                    <span class="db text_gray6"><em class="font26 font_num fb text_pink_app">6.5</em> 元/<span
                                            class="font-num">m²</span>·天</span>
                                    <span class="db text_gray9 font12 mt10">均价</span>
                                </div>
                                <dl class="office_building_cont pr clearfix">
                                    <dt class="mb25 clearfix">
                                        <b class="fl">望京SOHO</b>
                                    </dt>
                                    <dd>
                                        <i class="sem_icon item_address"></i>[朝阳-望京] 望京街与阜安西路交叉路口
                                    </dd>
                                    <dd>
                                        <i class="sem_icon item_area"></i>可租面积 <span class="text-black fb">0-4576</span><span
                                            class="font-num"> m²</span>, 待租办公室&nbsp;<span
                                            class="font-num text-black fb">2380</span>&nbsp;套
                                    </dd>
                                    <dd>
                                        <span><i class="sem_icon item_see"></i>近7天有 <b
                                                class="hover">27</b> 位用户咨询过</span>
                                    </dd>
                                    <dd class="last_fix_bottom">
                                        <div class="fl building_tag">
                                            <span>互联网</span>
                                            <span>LEED认证</span>
                                            <span>地标建筑</span>
                                            <span>名企开发商</span>
                                            <span>知名物业</span>
                                        </div>
                                    </dd>
                                </dl>
                            </a>
                        </div>
                        <div class="office_list_item">
                            <a href="javascript:;" class="db pr clearfix">
                                <div class="fl pr">
                                    <img src="http://img1.static.uban.com/fcfc04d8-26d0-11e5-a40d-00163e00571b.jpg-wh480x320"
                                         alt="望京SOHO">
                                </div>
                                <div class="price_box tright">
                                    <span class="db text_gray6"><em class="font26 font_num fb text_pink_app">6.5</em> 元/<span
                                            class="font-num">m²</span>·天</span>
                                    <span class="db text_gray9 font12 mt10">均价</span>
                                </div>
                                <dl class="office_building_cont pr clearfix">
                                    <dt class="mb25 clearfix">
                                        <b class="fl">望京SOHO</b>
                                    </dt>
                                    <dd>
                                        <i class="sem_icon item_address"></i>[朝阳-望京] 望京街与阜安西路交叉路口
                                    </dd>
                                    <dd>
                                        <i class="sem_icon item_area"></i>可租面积 <span class="text-black fb">0-4576</span><span
                                            class="font-num"> m²</span>, 待租办公室&nbsp;<span
                                            class="font-num text-black fb">2380</span>&nbsp;套
                                    </dd>
                                    <dd>
                                        <span><i class="sem_icon item_see"></i>近7天有 <b
                                                class="hover">27</b> 位用户咨询过</span>
                                    </dd>
                                    <dd class="last_fix_bottom">
                                        <div class="fl building_tag">
                                            <span>互联网</span>
                                            <span>LEED认证</span>
                                            <span>地标建筑</span>
                                            <span>名企开发商</span>
                                            <span>知名物业</span>
                                        </div>
                                    </dd>
                                </dl>
                            </a>
                        </div>
                        <div class="office_list_item">
                            <a href="javascript:;" class="db pr clearfix">
                                <div class="fl pr">
                                    <img src="http://img1.static.uban.com/fcfc04d8-26d0-11e5-a40d-00163e00571b.jpg-wh480x320"
                                         alt="望京SOHO">
                                </div>
                                <div class="price_box tright">
                                    <span class="db text_gray6"><em class="font26 font_num fb text_pink_app">6.5</em> 元/<span
                                            class="font-num">m²</span>·天</span>
                                    <span class="db text_gray9 font12 mt10">均价</span>
                                </div>
                                <dl class="office_building_cont pr clearfix">
                                    <dt class="mb25 clearfix">
                                        <b class="fl">望京SOHO</b>
                                    </dt>
                                    <dd>
                                        <i class="sem_icon item_address"></i>[朝阳-望京] 望京街与阜安西路交叉路口
                                    </dd>
                                    <dd>
                                        <i class="sem_icon item_area"></i>可租面积 <span class="text-black fb">0-4576</span><span
                                            class="font-num"> m²</span>, 待租办公室&nbsp;<span
                                            class="font-num text-black fb">2380</span>&nbsp;套
                                    </dd>
                                    <dd>
                                        <span><i class="sem_icon item_see"></i>近7天有 <b
                                                class="hover">27</b> 位用户咨询过</span>
                                    </dd>
                                    <dd class="last_fix_bottom">
                                        <div class="fl building_tag">
                                            <span>互联网</span>
                                            <span>LEED认证</span>
                                            <span>地标建筑</span>
                                            <span>名企开发商</span>
                                            <span>知名物业</span>
                                        </div>
                                    </dd>
                                </dl>
                            </a>
                        </div>
                        <!--搜索结果list end-->

                        <div class="page_box">
                            <span class="pg_pre"><i>&lt;</i>上一页</span>
                            <a class="pg_link" href="javascript:;">1</a>
                            <a class="pg_link" href="javascript:;">2</a>
                            <a class="pg_link" href="javascript:;">3</a>
                            <a class="pg_link" href="javascript:;">4</a>
                            <a class="pg_link" href="javascript:;">…</a>
                            <a class="pg_link" href="javascript:;">14</a>
                            <span class="pg_next">下一页<i>&gt;</i></span>
                        </div>


                    </div>

                    <!--右侧栏-->
                    <div class="sidebar_box">
                        <div class="sidebar_main" id="sidebar_fix">
                            <div class="map_house">
                                <img src="../resources/images/list/maps.png" alt="">
                                <a class="map_find_btn">地图找房</a>
                            </div>
                            <div class="booking_house mt20">
                                <div class="booking_house_mes">
                                    <h2>快速找房</h2>
                                    <form id="freeLookForm" class="nice-validator n-default" novalidate="novalidate">
                                        <input type="hidden" name="flag" value="5">
                                        <input name="searchengine" type="hidden" value="">
                                        <input name="phone" class="form_control form_telphone" type="text"
                                               placeholder="手机号" maxlength="11"
                                               onkeyup="this.value=this.value.replace(/[^\d.]/g,'');"
                                               onafterpaste="this.value=this.value.replace(/[^\d.]/g,'')"
                                               aria-required="true" data-target="#msg-phone" data-tip="请输入您的手机号码。">
                                        <span class="db text-left mt05" id="msg-phone"></span>
                                        <div class="form_control form_btn mt10 cur_pointer" id="list_yijianyuyue">一键咨询
                                        </div>
                                    </form>

                                    <p class="nearby">客服将在10分钟内联系您</p>
                                </div>
                                <div class="ph20 tc text_gray9">
                                    咨询热线：<b class="text_pink_app">400-810-6698</b>
                                </div>
                            </div>
                            <div class="app_download mt20">
                                <p>随时随地查阅最新房源，<br>即刻关注官方微信</p>
                                <div class="mh25">
                                    <img src="http://img2.static.uban.com/www/images/appicon72.png" alt="幼狮APP">
                                    <img src="../resources/images/ys_weixin.jpg" class="ml25 weixin_img"
                                         alt="扫描二维码关注">
                                </div>
                                <p>扫描二维码关注</p>
                            </div>
                        </div>
                    </div>
                    <!--右侧栏-->
                </div>

            </div>

        </div>
        <!--list  end-->

        <!--footer-->
        <footer1></footer1>
    </div>
</template>
<script>

    import header1 from '../components/header.vue';
    import footer1 from '../components/footer.vue';
    export default {
        components: {header1, footer1},

        data(){
            return {
                list_scroll: true
            }
        },
        mounted: function () {
            var _this = this;
            //右侧栏 跟随滑动
            $(window).on("scroll", function () {
                if (_this.list_scroll) {
                    var scroll_top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
                    var standard_line = $('.office_list').offset().top;
                    var standard_line_wrap = $('.office_list').height();
                    var fixed_self = $('#sidebar_fix').height();
                    if (scroll_top > (standard_line)) {
                        $('#sidebar_fix').addClass('right_fixed');
                        $('.sidebar_box').css('bottom', 'auto');
                    } else {
                        $('#sidebar_fix').removeClass('right_fixed');
                        $('.sidebar_box').css('bottom', 'auto');
                    }

                    if (scroll_top > (standard_line + standard_line_wrap - 75 - fixed_self )) {
                        $('#sidebar_fix').removeClass('right_fixed');
                        $('.sidebar_box').css({'bottom': '73px'});
                    }

                    if (fixed_self > standard_line_wrap) {
                        $('#sidebar_fix').removeClass('right_fixed');
                        $('.sidebar_box').css({'bottom': 'auto'});
                    }
                }

            });
        },
        methods: {},

        destroyed(){
            this.list_scroll = false;
        }
    }
</script>
