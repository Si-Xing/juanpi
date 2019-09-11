export default {
    
    path:"/shopCar",
    name:"专注独家折扣,汇聚全网超值折扣,品牌商品低至1折",
    //按需加载引入 ===》路由的懒加载
<<<<<<< HEAD
    component:()=>import("@/pages/shopCar")
=======
    component:()=>import("@/pages/shopCar"),
    meta:{
        tabBar:true,
        auth:false
    }
>>>>>>> 3c6b92ffad672a842a4e41bee7c8d9725b3bfa9d

};