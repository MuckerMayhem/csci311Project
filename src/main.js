import Vue from 'vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;

new Vue({
    // data: store,
    router,
    render: h => h(App)
}).$mount('#app');