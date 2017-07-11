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
//懒加载lazyload
import VueLazyload from 'vue-lazyload';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(iView, {locale});

//懒加载lazyload use
Vue.use(VueLazyload, {
    error: 'http://www.atrip.com/resources/images/hotelDetailerrorpic.png',
    loading: 'http://www.atrip.com/resources/images/hotelDetailerrorpic.png',
    try: 3 // default 1
})

//const变量
Vue.prototype.$api = "http://116.62.71.76:8001/api/GetServiceApiResult" //api地址
//Vue.prototype.$api = "http://localhost:8001//api/GetServiceApiResult" //api地址
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
            path: '/update',
            component: require('./routers/update.vue')
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
            path: '/find_pass',
            component: require('./routers/find_pass.vue')
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
            path: '/admin',
            component: require('./routers/admin/main.vue')
        },
        {
            path: '/love',
            component: require('./routers/love_power.vue')
        },
        {
            path: '/room_sale',
            component: require('./routers/room_sale.vue')
        },
        {
            path: '/sport',
            component: require('./routers/sport.vue')
        },
        {
            path: '/sport_pre',
            component: require('./routers/sport_pre.vue')
        },
        {
            path: '/annual_meeting',
            component: require('./routers/annual_meeting.vue')
        },
        {
            path: '/map_search',
            component: require('./routers/map_search.vue')
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
