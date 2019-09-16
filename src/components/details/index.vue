<template>
	<div>
		<div class="bottom">
			<ul>
				<router-link  tag="li" to="/home">
					<i class="iconfont">&#xe719;</i>首页
                </router-link>
				<router-link tag="li" to="/shopCar">
					<i class="iconfont">&#xe674;</i>购物车
				</router-link>
				<van-button tag="li" class="buy" @click="showPopup">立即购买
				</van-button>				
                <van-button tag="li" class="get"  @click="showPopup">加入购物车
				</van-button>
			</ul>
		</div>
     <van-popup closeable position="bottom" :style="{ height: '60%' }" tag="div" v-model="show">   
   <div class="popuPpriceInfo"> 
           <img :src="info.pic_url || detailsInfo.pic_url" alt="">
           <div class="info">{{info.title || detailsInfo.title}}</div>
           <span class="new">￥{{info.cprice || detailsInfo.cprice}}</span>   
           <span class="right">{{info.bottomTexts.rightText || detailsInfo.bottomTexts.rightText }}</span>
       </div>
       <div class="affirm" @click="clickHandler(info.goods_id || detailsInfo.goods_id )" >确认添加</div>
       </van-popup>
	</div>
</template>
<script>
import {mapState,mapMutations} from "vuex"
import Vue from 'vue';
import { Popup,Button } from 'vant';
Vue.use(Popup,Button);
export default {
	name:"PopupCar",
	components: {
		[Popup.name]:Popup,
		[Button.name]:Button,
	},
	data() {
		return {
      show:false,
      info:[]
		}
	},

	methods: {
		showPopup() {
			this.show = true
    },
    ...mapMutations({
        clickHandler:"HomeListB/clickHandler"
    }),
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
.bottom {
	position: fixed;
	bottom: 0;
	left: 0;
	height: 0.49rem;
	width: 100%;
	border-top: 1px solid #ebebeb;
	background-color: #fff;
}
.bottom ul {
	width: 100%;
	height: 100%;
	display: flex;
	/* justify-content: space-between; */
	align-items: center;
	background:#fff;
}
/* .bottom ul .router-link-active {
	color: #FF464E;
} */
.bottom ul li {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	font-size: 0.1rem;
	align-items: center;
	color: #666;
}
.bottom ul li:nth-child(2){
    border-left:1px solid #ebebeb;
	flex:1;
}
.bottom ul li:nth-child(1){
	flex:1;
    border-left:1px solid #ebebeb;
}
.bottom ul .get{
    background: #ff464e;
    width:1.38rem;
    color:#fff;
	font-size:.12rem;
}
.bottom ul .buy{
    width:.93rem;
    color:#333;
	font-size:.12rem;
    /* border-left:1px solid #ebebeb; */
}
.affirm{
  height:.44rem;
  width:100%;
  color:#fff;
  background: #ff464e;
  font-size:.15rem;
  text-align: center;
  line-height: .44rem;
  position: absolute;
  bottom:0;
  left:0;
}
.popuPpriceInfo img{
  height:2rem;
  width:2rem;
}
.popuPpriceInfo span{
  display: block;
  text-align: center;
  margin: .1rem  0;
}
.popuPpriceInfo .new{
 font-size:.3rem;
 color:#ff464e;
}
.popuPpriceInfo .info{
 font-size:.16rem;
 color: #333333;
}
.popuPpriceInfo .right{
  font-size:.12rem;
  color: #999;
}
</style>