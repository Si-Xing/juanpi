import Vue from "vue"
import VueRouter from "vue-router"
import Home from "./home"
import Classify from "./classify"
import ShopCar from "./shopCar"
import Mine from "./mine"
Vue.use(VueRouter)
const router = new VueRouter({
    mode:"hash",
    routes:[
        {
            path:'/',
            redirect:"/home",
        },
        Home,
        Classify,
        ShopCar,
        Mine,
        // export default {
        //     path:"/movie",
        //     name:"movie",
        //     //按需加载引入 ===》路由的懒加载
        //     component:()=>import("@pages/movie")
        // }
        {
            path:"**",
            component:()=>import("@/pages/notFound")
           
        }
    ]
})
export default router;