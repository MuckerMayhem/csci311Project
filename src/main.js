import Vue from 'vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import router from './router'
import { makeServer } from "../tests/unit/server"

if (process.env.NODE_ENV === "development") {
    makeServer()
}

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');