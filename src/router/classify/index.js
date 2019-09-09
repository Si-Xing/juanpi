export default {
    path:"/classify",
    component:()=>import("views/classify"),
    name:"classify",
    meta:{
        tabBar:true,
        auth:false
    }
}