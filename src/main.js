import Vue from 'vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'

import App from './App.vue'
import router from './router'
import { makeServer } from "../tests/unit/server"

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

if (process.env.NODE_ENV === "development") {
    makeServer()
}

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');