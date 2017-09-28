<style lang="less" scoped>
    /*轮播图重置样式*/
    .swiper-container-horizontal > .swiper-pagination-bullets {
        bottom: 20px;
        left: 0;
        width: 100%;
    }

</style>

<!--header start-->
<template>
    <div class="about_right fl">
        <h3>关于幼狮</h3>
        <img src="../../resources/images/about_us/about_ys01.jpg" alt=""/>

        <p class="about_ys_para">《幼狮》为美国著名作家欧文 肖的代表作，被公认为最优秀的“战争小说”之一，其内涵表达的是人类对和平、美好生活的向往和对成功的渴望，如同幼小的狮子，必将凭借自己蓬勃的生命力和勇气，战胜成长道路上的一切困难，成为王者。而“幼狮空间”将为企业创造一个支点，助力幼狮企业在“大众创业、万众创新”的时代转折中独占鳌头。</p>

        <p class="about_ys_para">航远控股旗下华亮房产成立于2004年1月，历经13年的磨砺，现已在商业地产领域构建了资产管理、投资管理、房产经纪、金融服 务、企业升级服务、办公空间运营及装修定制为一体的全产业链服务体系。在与企业对接中，为提升企业运营效率助力企业成长，航远控股2015年创建幼狮科技，营造为企业提升全方位服务的幼狮空间。现已覆盖北京核心区域80个写字楼办公项目，空间面积逾25万平米，1200多家企业入驻。以幼狮空间为载体，航远控股已经拥有了华亮房产、幼狮科技、航远地产、幼狮装饰、航远投 资、幼狮商学院、幼狮财、法、税平台等多家子公司及商业联盟，全面为企业升级服务保驾护航。航远控股现已成为北京市唯一的 “商业地产投资＋办公空间运营＋企业升级服务”整合服务提供商，为企业创造全面的管家式服务体验。专注于满足企业进阶过程 中的核心需求，致力打造高成长性企业生态圈，助力企业更省更快走向强大。</p>
        <h3>我们的团队</h3>
        <p class="about_ys_para">创始人长期专注于地产领域，连续成功创业，对企业运营管理有独立思考和亲身实践。核心团队具有丰富的运营管理和业务拓展经验。以人为本的创业文化，活力激情，欢迎有抱负有理想的人加入我们。</p>
        <div class="about_ys_banner">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <a href="javascript:;">
                            <div class="about_ys_banner_img banner01"></div>
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="javascript:;">
                            <div class="about_ys_banner_img banner02"></div>
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="javascript:;">
                            <div class="about_ys_banner_img banner03"></div>
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="javascript:;">
                            <div class="about_ys_banner_img banner04"></div>
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="javascript:;">
                            <div class="about_ys_banner_img banner05"></div>
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="javascript:;">
                            <div class="about_ys_banner_img banner06"></div>
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="javascript:;">
                            <div class="about_ys_banner_img banner07"></div>
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="javascript:;">
                            <div class="about_ys_banner_img banner08"></div>
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="javascript:;">
                            <div class="about_ys_banner_img banner09"></div>
                        </a>
                    </div>
                </div>
                <!--左右按钮-->
                <div class="swiper-button-prev swiper-button-white"></div>
                <div class="swiper-button-next swiper-button-white"></div>
                <!-- 分页器 -->
                <div class="swiper-pagination"></div>
            </div>
        </div>

    </div>

</template>

<script>
    export default {
        mounted(){
            //about_ys_banner swiper
            var mySwiper = new Swiper('.swiper-container', {
                loop: true,
                pagination: '.swiper-pagination', //分页器
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                paginationClickable: true,  //分页可点
                //spaceBetween: 30,  //无缝
                centeredSlides: true,
                autoplay: 3500,
                //effect : 'fade', //切换效果(淡入淡出)
                //fade: {
                //    crossFade: false,
                //},
                autoplayDisableOnInteraction: true  //鼠标操作时关闭autopaly

            })
        }
    }
</script>
