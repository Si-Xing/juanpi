export default {
            path:"/home",
            name:"卷皮折扣手机版-全场1折起,特卖,值得买的打折网",
            //按需加载引入 ===》路由的懒加载
            component:()=>import("@/pages/home"),
<<<<<<< HEAD
            children:[        
                {
                path:"/home",
                redirect:"/home/listA",
                meta:{
                    tabBar:true,
                    auth:false
                }
=======
            children:[        {
                path:"/home",
                redirect:"/home/listA"
>>>>>>> 3c6b92ffad672a842a4e41bee7c8d9725b3bfa9d
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
<<<<<<< HEAD
            },
=======
            }  
>>>>>>> 3c6b92ffad672a842a4e41bee7c8d9725b3bfa9d
            ] 
};
