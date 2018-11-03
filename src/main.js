import Vue from 'vue'
import App from './App'
import store from './store'

//引入路由器
import router from './router/index'
import LyTab from 'ly-tab'
Vue.use(LyTab)

//配置mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//配置字体图标
import "@/common/css/style.css"

//配置图片懒加载


new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
