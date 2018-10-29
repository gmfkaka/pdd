import Vue from 'vue'
import App from './App'
import store from './store'

//引入路由器
import router from './router/index'
import LyTab from 'ly-tab'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

//配置字体图标
import "@/common/css/style.css"

Vue.use(MintUI)
Vue.use(LyTab);

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
