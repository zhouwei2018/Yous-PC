<template>
    <Table border :content="self" :columns="columns7" :data="data6"></Table>
</template>
<script>
  import {formatDate} from '../../components/date.js';
    export default {
        data () {
            return {
                self: this,
                columns7: [
                    {
                        title: '电话',
                        key: 'Col_telephone',
                        render (row, column, index) {
                            return `<Icon type="ios-telephone"></Icon> <strong>${row.Col_telephone}</strong>`;
                        }
                    },
                    {
                        title: '商圈',
                        key: 'Col_city'
                    },
                    {
                        title: '区域',
                        key: 'Col_business'
                    },
                    {
                        title: '面积',
                        key: 'Col_measure'
                    },
                    {
                        title: '租金',
                        key: 'Col_rent'
                    },
                    {
                        title: '发布时间',
                        key: 'create_time'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render (row, column, index) {
                            return `<i-button type="primary" size="small" @click.native="show(${index})">查看</i-button>`;
                        }
                    }
                ],
                data6:[]
            }
        },
        filters: {
            formatDate(time) {
                var date = new Date(time);
                return formatDate(date, "yyyy-MM-dd");
            }
        },
        methods: {
            show (index) {
                this.$Modal.info({
                    title: '详细信息',
                    content: `电话：${this.data6[index].Col_telephone}<br>城市：${this.data6[index].Col_city}<br>商圈：${this.data6[index].Col_business}<br>面积：${this.data6[index].Col_measure}<br>租金：${this.data6[index].Col_rent}<br>描述：${this.data6[index].Col_desc}`
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            },
            bindDate(){
              this.$http.post(
                  this.$api,
                  {
                      parameters: {

                      },
                      foreEndType: "1",
                      code: "20000003"
                  }
              ).then(function (response) {
                  var reslute = JSON.parse(response.bodyText);
                  console.info(reslute);
                  this.data6=reslute.data
                  if (!reslute.success) {
                        this.$Message.error(reslute.message);
                  }
              }, function (response) {
                  this.$Message.error('API接口报错-网络错误!');
                  this.loading = false;
              });
              this.$emit()
            }
        },
        mounted() {
          this.$nextTick(function() {
            this.bindDate()
          })
        }
    }
</script>
