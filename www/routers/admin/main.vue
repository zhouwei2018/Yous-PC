<template>
  <div class="all">
    <header1></header1>
    <div main>
       <Menu :theme="theme2" :open-names="['1']" accordion>
        <Submenu name="1">
            <template slot="title">
                <Icon type="ios-paper"></Icon>
                 需求单管理
            </template>
            <Menu-item name="1-1">企业需求单</Menu-item>
            <Menu-item name="1-2">业主需求单</Menu-item>
        </Submenu>
        <Submenu name="2">
            <template slot="title">
                <Icon type="ios-people"></Icon>
                用户管理
            </template>
            <Menu-item name="2-1">新增用户</Menu-item>
            <Menu-item name="2-2">活跃用户</Menu-item>
        </Submenu>
        <Submenu name="3">
            <template slot="title">
                <Icon type="stats-bars"></Icon>
                统计分析
            </template>
            <Menu-group title="使用">
                <Menu-item name="3-1">新增和启动</Menu-item>
                <Menu-item name="3-2">活跃分析</Menu-item>
                <Menu-item name="3-3">时段分析</Menu-item>
            </Menu-group>
            <Menu-group title="留存">
                <Menu-item name="3-4">用户留存</Menu-item>
                <Menu-item name="3-5">流失用户</Menu-item>
            </Menu-group>
        </Submenu></Menu>
    </div>
  </div>
</template>
<script>
import header1 from '../../components/header.vue';
import footer1 from '../../components/footer.vue';
export default {
    components: {header1, footer1},
    data () {
        return {
            theme2: 'light'
        }
    }
}
</script>
