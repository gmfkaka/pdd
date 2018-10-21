import Vue from 'vue'
import App from './App'
import store from './store'

//引入路由器
import router from './router/index'
import LyTab from 'ly-tab'

Vue.use(LyTab);

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
