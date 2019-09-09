import Vue from "vue";
import VueRouter from "vue-router";
import home from "./home";
import mian from "./mian";
import shopping from "./shopping";
import classify from "./classify";
Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
            path:"/",
            redirect:"/home"
        },
        home,
        mian,
        shopping,
        classify

    ]
})