export default {
<<<<<<< HEAD
            path:"/home",
            name:"卷皮折扣手机版-全场1折起,特卖,值得买的打折网",
            //按需加载引入 ===》路由的懒加载
            component:()=>import("@/pages/home"),
            children:[        {
                path:"/home",
                redirect:"/home/listA"
            },
            {
                path:"listA",
                name:"listA",
                component:()=>import("components/home/listA")
            },
            {
                path:"listB",
                name:"listB",
                component:()=>import("components/home/listB")
            }  
            ] 
};
=======
    path:"/home",
    component:()=>import("views/home"),
    name:"home",
    meta:{
        tabBar:true,
        auth:false
    }
}
>>>>>>> 0acee20ce6ed6827caf1b3c755e8a070593f48ac
