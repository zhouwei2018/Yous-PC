/**
 * Created by aresn on 16/6/20.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import $ from 'jquery';
import App from './app.vue';
import iView from '../src/index';
// import locale from '../src/locale/lang/en-US';
import locale from '../src/locale/lang/zh-CN';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(iView, {locale});

//const变量
Vue.prototype.$api = "http://116.62.71.76:8001/api/GetServiceApiResult" //api地址
Vue.prototype.$resouceUrl = "http://localhost:8081/"  //资源文件地址

// 开启debug模式
Vue.config.debug = true;

// 路由配置
var router = new VueRouter({
    mode: "history",
    hashbang: false,
    routes: [
        {
            path: '/index',
            component: require('./routers/index.vue')
        },
        {
            path: '/office',
            component: require('./routers/office.vue')
        },
        {
            path: '/service',
            component: require('./routers/service.vue')
        },
        {
            path: '/collect',
            component: require('./routers/collect.vue')
        },
        {
            path: '/invest',
            component: require('./routers/invest.vue')
        },
        {
            path: '/about',
            component: require('./routers/about.vue')
        },
        {
            path: '/register',
            component: require('./routers/register.vue')
        },
        {
            path: '/login',
            component: require('./routers/login.vue')
        },
        {
            path: '/list',
            component: require('./routers/list.vue')
        },
        {
            path: '/detail',
            component: require('./routers/detail.vue')
        },
        {
            path: '*',
            redirect: '/index'
        }

    ]
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
