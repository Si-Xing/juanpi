import Vue from 'vue'
import App from './App.vue'
<<<<<<< HEAD
import router from './router'
// import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  // store,
=======
import router from "router/index";
import store from "store/index"
Vue.config.productionTip = false
import AlleUl from "lib/index.js";
import "lib/loadimg/index.js"
Vue.use(AlleUl)

new Vue({
  router,
  store,
>>>>>>> 0acee20ce6ed6827caf1b3c755e8a070593f48ac
  render: h => h(App)
}).$mount('#app')
