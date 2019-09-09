export default {
<<<<<<< HEAD
    
    path:"/classify",
    name:"全部分类",
    //按需加载引入 ===》路由的懒加载
    component:()=>import("@/pages/classify")

};
=======
    path:"/classify",
    component:()=>import("views/classify"),
    name:"classify",
    meta:{
        tabBar:true,
        auth:false
    }
}
>>>>>>> 0acee20ce6ed6827caf1b3c755e8a070593f48ac
