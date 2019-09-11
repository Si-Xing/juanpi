export default {
        path:"/register",
        name:"register",
    component:()=>import("@/pages/register"),
    meta:{
        tabBar:false,
        auth:false
    }
};