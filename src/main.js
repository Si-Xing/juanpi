import Vue from 'vue'
import App from './App.vue'
import router from "router/index";
import store from "store/index"
Vue.config.productionTip = false
import AlleUl from "lib/index.js";
import "lib/loadimg/index.js"
Vue.use(AlleUl)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
