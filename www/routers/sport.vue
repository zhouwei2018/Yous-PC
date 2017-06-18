<style scoped lang="less">
    @import "../resources/css/publicity/sport.less";

</style>
<style scoped>

</style>

<template>
    <div class="all">
        <!--header-->
        <header1></header1>

        <!--love_power  start-->
        <div sport>
            <div class="bg_white sport_wrap">
                <img src="../resources/images/about_us/ys_column01.jpg" alt="">
                <div class="sport_item01 clearfix">
                    <div class="fl sport_item01_left">
                        <h3 class="sport_rem_tit">还记得那些年的运动会吗？</h3>
                        <p>因为可以不用上课，所以天天祈祷不要下雨</p>
                        <p>严肃的班主任会握住你的手和气的说一定为班级多争几个第一</p>
                        <p>你暗恋的女生会为你加油呐喊声嘶力竭</p>
                        <p>你暗恋的男生在运动会场上自信的笑容那么好看</p>
                    </div>
                    <div class="fr sport_item01_right">
                        <h3>现在运动会以不一样的形式延续着那份青春的美好</h3>
                        <h2>运动会又回来了</h2>
                        <img src="../resources/images/about_us/sport/sport_bg.png" alt="">
                    </div>
                </div>
                <h3>团队风采</h3>
                <ul class="clearfix sport_exhibition">
                    <li><img src="../resources/images/about_us/sport/sport01.jpg" alt=""></li>
                    <li><img src="../resources/images/about_us/sport/sport02.jpg" alt=""></li>
                    <li><img src="../resources/images/about_us/sport/sport03.jpg" alt=""></li>
                    <li><img src="../resources/images/about_us/sport/sport04.jpg" alt=""></li>
                    <li><img src="../resources/images/about_us/sport/sport05.jpg" alt=""></li>
                    <li><img src="../resources/images/about_us/sport/sport06.jpg" alt=""></li>
                    <li><img src="../resources/images/about_us/sport/sport07.jpg" alt=""></li>
                    <li><img src="../resources/images/about_us/sport/sport08.jpg" alt=""></li>
                </ul>

                <h3>青春激昂</h3>
                <ul class="clearfix sport_exhibition">
                    <li><img src="../resources/images/about_us/sport/sport09.jpg" alt=""></li>
                    <li><img src="../resources/images/about_us/sport/sport10.jpg" alt=""></li>
                    <li><img src="../resources/images/about_us/sport/sport11.jpg" alt=""></li>
                    <li><img src="../resources/images/about_us/sport/sport12.jpg" alt=""></li>
                    <li><img src="../resources/images/about_us/sport/sport13.jpg" alt=""></li>
                    <li><img src="../resources/images/about_us/sport/sport14.jpg" alt=""></li>
                    <li><img src="../resources/images/about_us/sport/sport15.jpg" alt=""></li>
                    <li><img src="../resources/images/about_us/sport/sport16.jpg" alt=""></li>
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
        data(){
            return {}
        },
        methods: {},
        mounted: function () {

        },
        created(){
            document.body.style.backgroundColor = '#fff';
        },
        beforeDestroy(){
            document.body.style.backgroundColor = '#f5f5f5';
        }
    }
</script>
