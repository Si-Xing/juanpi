export default {
    path:"/details",
    component:()=>import("@/pages/details"),
    name:"details",
    meta:{
        tabBar:false,
        auth:false
    }
}