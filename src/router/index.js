// 1.引入对应模块
import Vue from 'vue'
import VueRouter from 'vue-router'

// 一级路由
import Home from './../pages/Home/Home'
import Recommend from './../pages/Recommend/Recommend'
import Search from './../pages/Search/Search'
import Chat from './../pages/Chat/Chat'
import Me from './../pages/Me/Me'

import Hot from '../pages/Home/Children/Hot/Hot'
import Box from './../pages/Home/Children/Box'
import Dress from './../pages/Home/Children/Dress'
import Ele from './../pages/Home/Children/Ele'
import Food from './../pages/Home/Children/Food'
import General from './../pages/Home/Children/General'
import Man from './../pages/Home/Children/Man'
import Mbaby from './../pages/Home/Children/Mbaby'
import Shirt from './../pages/Home/Children/Shirt'

// 2.声明使用
Vue.use(VueRouter)

// 3.输出路由对象
export default new VueRouter({
    // 3.1 配置一级路由
    routes: [
        {
            path: '/home',
            component: Home,
            children: [
                // 热门板块
                { path: 'hot', component: Hot },
                // 服饰板块
                { path: 'dress', component: Dress },
                // 鞋包版块
                { path: 'box', component: Box },
                // 母婴版块
                { path: 'mbaby', component: Mbaby },
                // 百货版块
                { path: 'general', component: General },
                // 食品版块
                { path: 'food', component: Food },
                // 内衣版块
                { path: 'shirt', component: Shirt },
                // 男装版块
                { path: 'man', component: Man },
                // 电器版块
                { path: 'ele', component: Ele },
                // 首页重定向
                { path: '/home', redirect: "/home/hot" }
            ]
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