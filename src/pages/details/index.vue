<template>
    <div>
     <div class="top">
       <img :src="info.pic_url || detailsInfo.pic_url" alt="">
   </div> 
   <div class="priceInfo">
       <div class="top">
           <span class="new">￥{{info.cprice || detailsInfo.cprice}}</span>   
           <span class="old">￥{{info.oprice || detailsInfo.oprice}}</span>
           <span class="detailsCenter">包邮</span>
           <span class="right">{{info.bottomTexts.rightText || detailsInfo.bottomTexts.rightText }}</span>
       </div>
       <div class="info">{{info.title_long || detailsInfo.title_long}}</div>
   </div>
   <PopupExp/>
    <PopupCar/>
    </div>
</template>

<script>
import {mapState} from "vuex"
import PopupExp from "components/details/popup"
import PopupCar from "components/details"
export default {
    name:"Details",
    data(){
        return{
            info:[],
        }
    },
    components:{
        PopupCar,
        PopupExp
    },
    created(){
        if(sessionStorage.getItem("detailsInfo")){
            this.info = JSON.parse(sessionStorage.getItem("detailsInfo"))
        }
    },
    computed:{
        ...mapState({
            detailsInfo:state=>state.HomeListB.detailsInfo
        })
    }
}
</script>

<style>
    .top{
    height:3.75rem;
    width:100%;
}
.top img{
    height:100%;
    width:100%;
}
.priceInfo{
    width:100%;
    height:.95rem;
    padding: .12rem .14rem .1rem;
    background: #fff;
    
}
.priceInfo .top{
    height:.35rem;
    width:100%;
    display: flex;
    align-items: center;
    position: relative;
}
.priceInfo .old{
        color: #bbbbbb;
        font-size:.12rem;
        text-decoration: line-through;
        margin-right:.04rem;
}
.priceInfo .new{
    color:#ff464e;
    font-size:.24rem;
    margin-right:.04rem;
}
.priceInfo .detailsCenter{
    background-color: rgb(255, 70, 78);
    border-color: rgb(255, 70, 78);
    color: rgb(255, 255, 255);
    font-size:.1rem;
    padding: .02rem .04rem;
}
.priceInfo .right{
    color: #999;
    font-size:.12rem;
    position: absolute;
    right:0;
}
.priceInfo .info{
    color: #333333;
    font-size:.16rem;
    margin-top:.1rem;
}

</style>