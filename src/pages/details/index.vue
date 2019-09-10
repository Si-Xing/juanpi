<template>
    <div>
     <div class="top">
       <img src="https://goods4.juancdn.com/goods/190908/6/a/5d73e795b6f8ea4bf80b8baf_800x800.jpg?imageMogr2/quality/88!/format/jpg" alt="">
   </div> 
   <div class="banner">
    <img src="https://goods7.juancdn.com/jas/190906/d/4/5d71c795b6f8ea5548364849_1080x144.png?iopcmd=convert&Q=88&dst=png" alt="">
   </div>
   <div class="price">
       <div class="top">
           <img src="https://goods6.juancdn.com/jas/190830/a/a/5d689257b6f8ea0a3f0b5d65_126x45.png?imageMogr2/quality/88!/format/png" alt="">
           <span class="new">￥109</span>
           <span class="center">包邮</span>
           <span class="right">2195人已购</span>
       </div>
       <div class="info">花花公子ICON男士秋季新款休闲百搭时尚舒适男装时尚连帽卫衣</div>
   </div>
   <PopupExp/>
    <PopupCar/>
    </div>
</template>

<script>
import PopupExp from "components/details/popup"
import PopupCar from "components/details"
export default {
    name:"Details",
    components:{
        PopupCar,
        PopupExp
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
.banner{
    height:.5rem;
    width:100%;
}
.banner img{
    height:100%;
    width:100%;
}
.price{
    width:100%;
    height:.95rem;
    padding: .12rem .14rem .1rem;
    background: #fff;
    
}
.price .top{
    height:.35rem;
    width:100%;
    display: flex;
    align-items: center;
    position: relative;
}
.price img{
    width:.42rem;
    height:.15rem;
    margin-right:.08rem;
}
.price .new{
    color:#ff464e;
    font-size:.24rem;
    margin-right:.04rem;
}
.price .center{
    background-color: rgb(255, 70, 78);
    border-color: rgb(255, 70, 78);
    color: rgb(255, 255, 255);
    font-size:.1rem;
    padding: .02rem .04rem;
}
.price .right{
    color: #999;
    font-size:.12rem;
    position: absolute;
    right:0;
}
.price .info{
    color: #333333;
    font-size:.16rem;
}

</style>