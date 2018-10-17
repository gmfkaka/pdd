import Vue from 'Vue'
import App from './App'

//引入路由器
import router from './router/index'

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
