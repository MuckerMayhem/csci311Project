import Vue from 'vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import router from './router'

// var store = {
//   state: {
//     authenticated: false,
//   },

//   isLoggedIn() {
//     if (this.$cookies.isKey("session_id")) {
//       this.state.authenticated = true;
//     } else {
//       this.state.authenticated = false;
//     }
//   }
// }

Vue.config.productionTip = false;

new Vue({
    // data: store,
    router,
    render: h => h(App)
}).$mount('#app');