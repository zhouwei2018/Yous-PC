<style lang="less">

</style>


<template>

    <div class="screening_conts_detail pv20">
        <div class="screening_conts_list weizhi clearfix tj_box_1">
            <span class="screening_title mr15">位置:</span>
            <a href="javascript:;" @click="getSubDistrict($event)"
               v-for="(item,index) in district"
               :class="[{active:positon_active == index},item.class]"
               :id="item.code"
               :data-sortType="'sort_reg_dis_'+index"
            >{{item.name}}</a>
        </div>
        <p class="tj_box_1 clearfix" id="sub_district" v-show="sub_show_flag">
            <a href="javascript:;"
               v-for="(item1,index) in sub_district"
               :class="{active:sub_pos_active == index}"
               class="pt05"
               :id="item1.code"
               :data-sortType="'sort_reg_bus_'+index"
               @click="getHouseList($event)"
            >{{item1.name}}</a>
        </p>
    </div>

</template>

<script>
    export default {

        data (){
            return {
                district: [],
                sub_district: [],

                positon_active: 0,
                sub_pos_active: 0,

                sub_show_flag: false, //默认二级区域不显示
            }
        },
        methods: {

            //获取北京各区名称
            getDistrict(){
                var _this = this;
                //调用区域查询接口，更新数据
                this.$http.post(
                    this.$api,
                    {
                        "parameters": {},
                        "foreEndType": 2,
                        "code": "90000301"
                    }
                ).then(function (res) {
                    var result = JSON.parse(res.bodyText);
                    if (result.success) {
                        _this.district = result.data.districts;
                        var all_district = {
                            code: "district_all",
                            name: "全部",
                            class: "noArrow"
                        }
                        _this.district.unshift(all_district);
                    } else {
                        this.$Message.error(result.message);
                    }
                }, function (res) {
                    this.$Message.error('获取区域失败');
                });
            },

            show(){
                $('.weizhi a').removeClass('active');
            },

            //点击获取各区二级模块
            getSubDistrict(e){
                var _this = this;

                $(e.target).addClass('active').siblings().removeClass('active');

                var emitObj = {
                    id: $(e.target).attr('id'),
                    name: $(e.target).text(),
                    sortType: $(e.target).attr('data-sortType')
                };
                this.$emit("refreshbizlines", emitObj);

                if ($(e.target).attr('id') == 'district_all') {
                    this.sub_show_flag = false;
                    if (!$(e.target).hasClass('tj_box_1')) {
                        $(e.target).parent().addClass('tj_box_1');
                    }

                } else {
                    //调用子级区域查询接口，更新数据

                    this.$http.post(
                        this.$api,
                        {
                            "parameters": {
                                "city_code": $(e.target).attr('id')
                            },
                            "foreEndType": 2,
                            "code": "90000302"
                        }
                    ).then(function (res) {
                        var result = JSON.parse(res.bodyText);
                        if (result.success) {
                            _this.sub_show_flag = true;
                            _this.sub_district = result.data;
                            var all_sub_district = {
                                code: "dis_sta_all",
                                name: "全部"
                            }
                            _this.sub_district.unshift(all_sub_district);

                            $(e.target).parent().removeClass('tj_box_1');
                        } else {
                            this.$Message.error(result.message);
                        }
                    }, function (res) {
                        this.$Message.error('获取区域失败');
                    });
                }
            },

            //点击获取结果列表
            getHouseList(e){
                $(e.target).addClass('active').siblings().removeClass('active');

                var emitObj2 = {
                    id: $(e.target).attr('id'),
                    name: $(e.target).text(),
                    sortType: $(e.target).attr('data-sortType')
                };

                this.$emit("refreshbizlines2", emitObj2);
            },

        },

        mounted(){
            this.getDistrict();
        }
    }
</script>
