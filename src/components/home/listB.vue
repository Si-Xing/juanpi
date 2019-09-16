<template>
    <div class="goods" >
        <router-link tag="div" :to="{name:'details'}">
            <v-touch tag="div" class="goodsItem" v-for=" (item,index) in listB"  :key="index" @tap="idHandler(item.goods_id)">
            <div class="img">
                <img :src="item.pic_url" alt="">
            </div>
            <div  class="price">
                <span class="new">￥{{item.cprice}}</span>    
                <span class="old">￥{{item.oprice}}</span>   
          
            </div>
            <div  class="info">
                <span>{{item.title}}</span>
            </div>
        </v-touch>
        </router-link>
    </div>
</template>
<script>
import {HomeListB} from "api/mocvie"
import {mapState,mapActions,mapMutations} from "vuex" 
export default {
    name:"ListB",
    async created(){
        let data = await HomeListB();
        this.listBhandler( data.data.goods )
    },
 methods:{
        ...mapActions({
            listBhandler:"HomeListB/listBhandler"
        }),
        ...mapMutations({
            idHandler:"HomeListB/idHandler"
        }),

    },
    computed:{
        ...mapState({
            listB:state=>state.HomeListB.listB
        })
    },
}
</script>

<style>

.goods .goodsItem{
    width:1.83rem;
    height:2.42rem;
    float:left;
    margin: .02rem .04rem  0 0;
    background-color:  #f2f2f2;
}
.goods .goodsItemR{
    margin: .02rem 0  0 .04rem;
}
.goods .goodsItem .img{
    width:1.83rem;
    height:1.87rem;
}
.goods .goodsItem img{
    width:100%;
    height:100%;
}
.goods .goodsItem .price{
    display: flex;
    margin-top:.06rem;
    padding:0  .08rem;
    height:.21rem;
    line-height: .21rem;
}
.goods .goodsItem  .old{
    font-size:.11rem;
    color: #bbb;
    text-decoration: line-through;
}
.goods .goodsItem  .new{
    margin-right:.04rem;
    font-size:.15rem;
    color: #ff464e;

}
.goods .goodsItem .info{
    padding-left:.16rem;
    font-size:.12rem;
    margin-bottom:.49rem;
    line-height:1;
}
</style>