import Vue from 'vue'
import App from './App.vue'
import axios from "axios";

Vue.config.productionTip = false;
new Vue({
  render: h => h(App),
  el: '#app',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => (this.info = response))
  }
}).$mount('app');