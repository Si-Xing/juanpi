export default {
    
    path:"/shopCar",
    name:"专注独家折扣,汇聚全网超值折扣,品牌商品低至1折",
    //按需加载引入 ===》路由的懒加载
    component:()=>import("@/pages/shopCar"),
    meta:{
        tabBar:false,
        auth:false
    }

};