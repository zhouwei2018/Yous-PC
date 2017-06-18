<style scoped lang="less">
    @import "../resources/css/publicity/love_power.less";

</style>
<style scoped>

</style>

<template>
    <div class="all">
        <!--header-->
        <header1></header1>

        <!--love_power  start-->
        <div love_power>
            <div class="content980 bg_white">
                <div class="love_head_wrap">
                    <div class="love_head">
                        <h4>幼狮空间，租房优惠卡上线啦！</h4>
                        <div class="author_wrap">
                            <span class="create_ori">原创</span>
                            <span class="author_msg">作者：幼狮空间</span>
                            <span class="export_time">发表于：2017-01-10</span>
                        </div>
                    </div>
                </div>

                <ul class="love_exhibition pt40">
                    <li>
                        <img class="mb25" src="../resources/images/room_sale/room_sale01.jpg" alt="">
                        <p>持该卡，您将享受以下福利：</p>
                        <p> 1、此卡的面值金额，可用作抵扣房租使用</p>
                        <p>2、享有基础项免费服务，包括：协助陪同注册、代开发票、布局设计、灯具维修、门窗门锁维修</p>
                    </li>
                    <li>
                        <img class="mb25" src="../resources/images/room_sale/room_sale02.jpg" alt="">
                        <p>持该卡，您须遵循以下规则：</p>
                        <p>1、此卡为现金卡，用于幼狮空间的房租用途</p>
                        <p>2、使用时，必须携带此卡并向服务人员出示</p>
                        <p>3、此卡不支持提取现金和补办，请妥善保管</p>
                        <p>4、此卡最终解释权归幼狮科技所有</p>
                    </li>
                    <li>
                        <img class="mb25" src="../resources/images/room_sale/room_sale03.jpg" alt="">
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
        data(){
            return {}
        },
        methods: {},
        mounted: function () {

        },
    }
</script>
