import Vue from "vue"
import VueRouter from "vue-router"
import Home from "./home"
import Classify from "./classify"
import ShopCar from "./shopCar"
import Mine from "./mine"
<<<<<<< HEAD
import Details from "./details"
import LifeMarket from "./lifeMarket"
=======
import SnapUp from "./snapUp"
import Register from "./register";
import Enter from "./enter";
import HomeDetails from "./homeDetails";
>>>>>>> 3c6b92ffad672a842a4e41bee7c8d9725b3bfa9d
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
<<<<<<< HEAD
        Mine,
        Details,
        LifeMarket,
=======
        SnapUp,
        Mine,
        Register,
        Enter,
        HomeDetails,
>>>>>>> 3c6b92ffad672a842a4e41bee7c8d9725b3bfa9d
        {
            path:"**",
            component:()=>import("@/pages/notFound")
           
        }
    ]
})
<<<<<<< HEAD
export default router;
=======
export default router;
>>>>>>> 3c6b92ffad672a842a4e41bee7c8d9725b3bfa9d
