<style scoped lang="less">
    @import "../resources/css/update/update.less";
    @import "../resources/plugin/animate/animate.min.css";
</style>
<template>
    <div class="all">
        <!--header-->
        <header1></header1>
        <!--update start-->
        <div update style="height: 600px; overflow: hidden">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src="../resources/images/update/update.png" alt="">

                    </div>
                    <div class="swiper-slide pr">
                        <img src="../resources/images/update/update_01.png" alt="">
                        <div class="up_two_prag">
                            <p>企业升级服务部以提供专业化服务为宗旨，解决用户在发展过程中遇到的有碍其成长的资金、人力、风险控制等困扰因素为目标，以办公空间为载体，
                                通过提供财税服务、法务服务、人力资源服务、商学院服务、FA服务等内容，与客户建立深度链接、超强黏性，进而带来新的办公空间需求，通过对空
                                间租户的服务，衍生辐射到非空间用户，从而形成具有影响力的企业办公服务品牌，服务助力空间、空间承载服务，最终形成“有形的空间+无形的服务”
                                一站式全新办公服务体验。
                            </p>
                        </div>
                        <div class="update_icon_wrap" id="animate">
                            <span><i class="up_icon1"></i>财税服务</span>
                            <span><i class="up_icon2"></i>法务服务</span>
                            <span><i class="up_icon3"></i>人力资源服务</span>
                            <span><i class="up_icon4"></i>商学院服务</span>
                            <span><i class="up_icon5"></i>FA服务</span>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <img src="../resources/images/update/update_02.png" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img src="../resources/images/update/update_03.png" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img src="../resources/images/update/update_04.png" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img src="../resources/images/update/update_05.png" alt="">
                    </div>
                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination"></div>
            </div>

        </div>

        <!--footer-->
        <footer1></footer1>
    </div>

</template>
<script>
    import header1 from '../components/header.vue';
    import footer1 from '../components/footer.vue';

    import '../resources/plugin/swiper/js/swiper.min.js';

    export default {
        components: {header1, footer1},
        mounted(){
            $(window).scrollTop(0);

            //banner swiper
            new Swiper('.swiper-container', {
                pagination: '.swiper-pagination', //分页器
                direction: 'vertical',
                slidesPerView: 1,
                paginationClickable: true,
                mousewheelControl: true,
                onScroll: function (swiper) {
                    if (swiper.activeIndex == 1) {
                        $('#animate').addClass('animated infinite bounceInUp');
                        setTimeout(function () {
                            $('#animate').removeClass('animated infinite bounceInUp')
                        }, 1000);
                    }
                }
            })

        }
    }
</script>
