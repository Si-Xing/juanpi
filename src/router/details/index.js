export default {
    path:"/details/:id",
    component:()=>import("@/pages/details"),
    name:"details",
    meta:{
        tabBar:false,
        auth:false
    }
}