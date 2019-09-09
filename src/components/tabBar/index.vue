<template>
	<div class="botm">
		<ul>
			<router-link
                :to="item.path"
                tag="li"
                v-for="(item,index) in btnList" 
                :key="index">
				<i class="iconfont" v-html="item.icon"></i>
				<span>{{item.txt}}</span>
			</router-link>
		</ul>
	</div>
</template>
<script>
export default {
	name: 'Wxs-TabBar',
	data() {
		return {
			btnList: [
				{ icon: '&#xe719;', txt: '首页' ,path:"/home"},
				{ icon: '&#xe86c;', txt: '分类' ,path:"/classify"},
				{ icon: '&#xe674;', txt: '购物车' ,path:"/shopCar"},
				{ icon: '&#xe61f;', txt: '我的' ,path:"/mine"}
			]
		}
	}
}
</script>
<style>
.botm {
	position: fixed;
	bottom: 0;
	left: 0;
	height: 0.49rem;
	width: 100%;
	border-top: 1px solid #ebebeb;
	background-color: #fff;
}
.botm ul {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background:#fff;
}
.botm ul .router-link-active {
	color: #FF464E;
}
.botm ul li {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 0.1rem;
	color: #666;
}
</style>