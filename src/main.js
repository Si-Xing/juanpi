<<<<<<< HEAD
import Vue from 'vue';
import App from './App.vue';
import router from "router/index";
import store from "store/index";
import AlleUl from "lib/index.js";
import "lib/loadimg/index.js";
import VueTouch from "vue-touch";
Vue.use(VueTouch, {name: 'v-touch'});
Vue.use(AlleUl);
Vue.config.productionTip = false;
=======
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

>>>>>>> 3c6b92ffad672a842a4e41bee7c8d9725b3bfa9d
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
