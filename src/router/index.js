import Vue from "vue";
import VueRouter from "vue-router";
import home from "./home";
import mian from "./mian";
import shopping from "./shopping";
import classify from "./classify";
import snapUp from "./snapUp"
Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
            path:"/",
            redirect:"/snapUp"
        },
        home,
        mian,
        shopping,
        classify,
        snapUp

    ]
})