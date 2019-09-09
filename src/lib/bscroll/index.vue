<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    name:"JianPi-BScroll",
    mounted(){
        this.scroll=new BScroll(this.$refs.wrapper,{
            pullDownRefresh:true,
            pullUpLoad:true
        })
    },
    methods:{
        pullDownHandle(cd){
            this.scroll.on("pullingDown",()=>{
                cd()
            })
        },
        finishPullDownHandle(){
            this.scroll.finishPullDown();
            this.scroll.refresh();
        },
        pullUpHandle(cd){
            this.scroll.on("pullingUp",()=>{
                cd();
            })
        },
        finishPullUpHandle(){
            this.scroll.finishPullUp();
            this.scroll.refresh()
        }

    }
}
</script>
<style scoped>
 .wrapper{
        height: 100%;
    }
</style>