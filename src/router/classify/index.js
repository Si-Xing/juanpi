export default {
    path:"/classify",
    name:"全部分类",
    //按需加载引入 ===》路由的懒加载
    component:()=>import("@/pages/classify")

};

