export default {
    path:"/main",
    component:()=>import("views/mian"),
    name:"main",
    meta:{
        tabBar:true,
        auth:false
    }
}