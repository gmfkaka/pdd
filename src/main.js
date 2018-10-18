import Vue from 'vue'
import App from './App'

//引入路由器
import router from './router/index'
import LyTab from 'ly-tab'

Vue.use(LyTab);

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
