<style scoped lang="less">
    @import "../resources/css/publicity/annual_meeting.less";

</style>
<style scoped>

</style>

<template>
    <div class="all">
        <!--header-->
        <header1></header1>

        <!--love_power  start-->
        <div annual_meeting>
            <img src="../resources/images/about_us/ys_column02.jpg" alt="">
            <div class="bg_white meeting_content">
                <p>光阴似箭，日月如梭。在忙碌的工作中我们送走了一年，去迎接新的一年。以“年会”的形式，
                    对过去一年的总结和对新一年的期望。
                    2017年1月17日航远控股年会正式举行。大会分两大部分,上午是针对员工这一年的努力进行表
                    彰大会，下午是合伙人大会。</p>
                <img src="../resources/images/about_us/meeting/meeting01.jpg" alt="">
                <p>我们以一首澎湃激昂的司歌《光彩华亮》正式开启这场大会。每个人都精神抖擞，眼神是那样
                    的坚定和自信。正如歌词中所写：“光彩华亮，我们全力以赴”“有你陪伴，终将实现梦想”。</p>
                <img src="../resources/images/about_us/meeting/meeting02.jpg" alt="">
                <img src="../resources/images/about_us/meeting/meeting03.jpg" alt="">
                <p>大会上正式宣布北京航远控股正式成立，旗下公司已经正式运营，其中华亮房产已经成立13周年。</p>
                <h2>颁奖典礼</h2>
                <ul class="clearfix">
                    <li><img src="../resources/images/about_us/meeting/meeting_sm01.jpg" alt=""></li>
                    <li><img src="../resources/images/about_us/meeting/meeting_sm02.jpg" alt=""></li>
                    <li><img src="../resources/images/about_us/meeting/meeting_sm03.jpg" alt=""></li>
                    <li><img src="../resources/images/about_us/meeting/meeting_sm04.jpg" alt=""></li>
                    <li><img src="../resources/images/about_us/meeting/meeting_sm05.jpg" alt=""></li>
                    <li><img src="../resources/images/about_us/meeting/meeting_sm06.jpg" alt=""></li>
                    <li><img src="../resources/images/about_us/meeting/meeting_sm07.jpg" alt=""></li>
                    <li><img src="../resources/images/about_us/meeting/meeting_sm08.jpg" alt=""></li>
                    <li><img src="../resources/images/about_us/meeting/meeting_sm09.jpg" alt=""></li>
                    <li><img src="../resources/images/about_us/meeting/meeting_sm10.jpg" alt=""></li>
                    <li><img src="../resources/images/about_us/meeting/meeting_sm11.jpg" alt=""></li>
                    <li><img src="../resources/images/about_us/meeting/meeting_sm12.jpg" alt=""></li>
                </ul>
                <h2>合伙人大会</h2>
                <ul class="clearfix">
                    <li><img src="../resources/images/about_us/meeting/meeting_sm13.jpg" alt=""></li>
                    <li><img src="../resources/images/about_us/meeting/meeting_sm14.jpg" alt=""></li>
                    <li><img class="cooperator" src="../resources/images/about_us/meeting/meeting_big01.jpg" alt=""></li>
                </ul>
                <h2>彭总慷慨激昂的作大会总结</h2>
                <img src="../resources/images/about_us/meeting/meeting_big02.jpg" alt="">
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
