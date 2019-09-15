import Vue from "vue";
import Vuex from "vuex";
import HomeListA from "./homeListA"
import HomeListB from "./homeListB"
Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        HomeListA,
        HomeListB
    }
})