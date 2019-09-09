export default {
    path:"/shopping",
    component:()=>import("views/shopping"),
    name:"shopping",
    meta:{
        tabBar:true,
        auth:true
    }
}