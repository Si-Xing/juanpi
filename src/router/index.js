import Vue from "vue"
import VueRouter from "vue-router"
import Home from "./home"
import Classify from "./classify"
import ShopCar from "./shopCar"
import Mine from "./mine"
import Details from "./details"
import LifeMarket from "./lifeMarket"
import SnapUp from "./snapUp"
import Register from "./register";
import Enter from "./enter";
import HomeDetails from "./homeDetails";
import Search from "./search";
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
        Details,
        LifeMarket,
        SnapUp,
        Mine,
        Register,
        Enter,
        HomeDetails,
        Search,
        {
            path:"**",
            component:()=>import("@/pages/notFound")
           
        }
    ]
})
export default router;
