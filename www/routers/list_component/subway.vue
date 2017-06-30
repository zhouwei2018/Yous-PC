<style lang="less">

</style>


<template>

    <div class="screening_conts_detail pv20">
        <div class="screening_conts_list weizhi clearfix tj_box_1" @click="getDistrict($event)">
            <span class="screening_title mr15">位置:</span>
            <a href="javascript:;"
               v-for="(item,index) in district"
               :class="{active:active == index}"
               :id="item.id"
            >{{item.name}}</a>
        </div>
        <p class="tj_box_1 clearfix" v-show="sub_show_flag">
            <a href="javascript:;"
               v-for="(item1,index) in sub_district"
               :class="{active:sub_active == index}"
               class="pt05"
               :id="item1.id"
            >{{item1.name}}</a>
        </p>
    </div>

</template>

<script>
    export default {

        data (){
            return {
                district: [
                    {
                        name: '全部',
                        id: 'all'
                    },
                    {
                        name: '1号线',
                        id: 'one_line'
                    },
                    {
                        name: '2号线',
                        id: 'two_line'
                    },
                    {
                        name: '4号线大兴线',
                        id: 'four_line'
                    }
                ],
                sub_district: [
                    {
                        name: '全部',
                        id: 'sub_all'
                    },
                    {
                        name: '苹果园',
                        id: 'sub_pg'
                    },
                    {
                        name: '古城',
                        id: 'sub_gc'
                    },
                    {
                        name: '八角游乐园',
                        id: 'sub_bj'
                    }
                ],

                active: 0,
                sub_active: 0,

                sub_show_flag:false, //默认二级区域不显示
            }
        },
        methods: {

            //获取北京各区名称
            getDistrict(e){
                $(e.target).addClass('active').siblings().removeClass('active');

                if ($(e.target).attr('id') == 'all') {
                    this.sub_show_flag=false;
                    if(!$(e.target).hasClass('tj_box_1')){
                        $(e.target).parent().addClass('tj_box_1');
                    }

                } else {
                    //调用子级区域查询接口，更新数据


                    this.sub_show_flag=true;
                    $(e.target).parent().removeClass('tj_box_1');
                }
            },
        },

        mounted(){

        }
    }
</script>
