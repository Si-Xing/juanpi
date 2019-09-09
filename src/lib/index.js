import BScroll from "./bscroll/index.vue";

const components=[
    BScroll
]

const install=(Vue)=>{
    if (Vue) {
        components.map(item=>{
            Vue.component(item.name,item)
        })
    }
}


export default install;