export default {
    path: "/homeDetails/:id",
    name: "homeDetails",
    component: () => import("@/pages/homeDetails"),
    props:true,
    meta: {
        tabBar: false,
        auth: false
    }
};