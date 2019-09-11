export default {
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
                component:()=>import("components/home/listA"),
                meta:{
                    tabBar:true,
                    auth:false
                }
            },
            {
                path:"listB",
                name:"listB",
                component:()=>import("components/home/listB"),
                meta:{
                    tabBar:true,
                    auth:false
                }
            }  
            ] 
};
