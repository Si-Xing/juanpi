export default {
    
    path:"/mine",
    name:"个人中心",
    //按需加载引入 ===》路由的懒加载
<<<<<<< HEAD
    component:()=>import("@/pages/mine")

=======
    component:()=>import("@/pages/mine"),
    meta:{
        tabBar:true,
        auth:false
    }
>>>>>>> 3c6b92ffad672a842a4e41bee7c8d9725b3bfa9d
};