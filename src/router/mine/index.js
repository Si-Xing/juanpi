export default {
    
    path:"/mine",
    name:"个人中心",
    //按需加载引入 ===》路由的懒加载
    component:()=>import("@/pages/mine"),
    meta:{
        tabBar:true,
        auth:false
    }
};