import Vue from 'vue'
import App from './App.vue'
import router from "router/index";
import store from "store/index"
Vue.config.productionTip = false
import AlleUl from "lib/index.js";
import "lib/loadimg/index.js"
import VueTouch from 'vue-touch';
import 'vant/lib/button/style';
import { CountDown } from 'vant';
Vue.use(CountDown);
Vue.use(VueTouch, { name: 'v-touch' })
Vue.use(AlleUl)
Vue.filter("Words",(value)=>{
  return value.replace(/销量；/," ")
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
