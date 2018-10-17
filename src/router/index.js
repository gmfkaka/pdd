// 1.引入对应模块
import Vue from 'vue'
import VueRouter from 'vue-router'

// 一级路由
import Home from './../pages/Home/Home'
import Recommend from './../pages/Recommend/Recommend'
import Search from './../pages/Search/Search'
import Chat from './../pages/Chat/Chat'
import Me from './../pages/Me/Me'

// 2.声明使用
Vue.use(VueRouter);

// 3.输出路由对象
export default new VueRouter({
    // 3.1 配置一级路由
    routes: [
        {
            path: '/home',
            components: Home
        },
        {
            path: '/recommend',
            component: Recommend
        },
        {
            path: '/search',
            component: Search
        },
        {
            path: '/chat',
            component: Chat
        },
        {
            path: '/me',
            component: Me
        },
        {
            path: '/',
            redirect: '/home'
        }
    ]
})