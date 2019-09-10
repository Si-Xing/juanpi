<template>
	<div>
		<div class="bottom">
			<ul>
				<li>
					<i class="iconfont">&#xe719;</i>首页
				</li>
				<li>
					<i class="iconfont">&#xe674;</i>购物车
				</li>
				<van-button tag="li" class="buy" @click="showPopup">立即购买
				</van-button>				
                <van-button tag="li" class="get"  @click="showPopup">加入购物车
				</van-button>
			</ul>
		</div>
		<van-popup closeable position="bottom" :style="{ height: '70%' }" v-model="show">内容</van-popup>
	</div>
</template>

<script>
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
			show: false
		}
	},

	methods: {
		showPopup() {
			this.show = true
		}
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
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 0.1rem;
	color: #666;
}
.bottom ul li:nth-child(2){
    border-left:1px solid #ebebeb;
}
.bottom ul li div{
    height:100%;
    text-align: center;
    line-height:0.49rem;
    font-size:.12rem;
}
.bottom ul .get{
    background: #ff464e;
    /* width:1.38rem; */
    color:#fff;
}
.bottom ul .buy{
    /* width:.93rem; */
    color:#333;
    /* border-left:1px solid #ebebeb; */
}
</style>