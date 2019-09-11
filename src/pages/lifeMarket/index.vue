<template>
	<div>
		<div class="topimg">
			<img src="https://goods7.juancdn.com/act/180913/c/f/5b99e462b6f8ea5fe9592566_750x633.png" alt />
		</div>
		<div class="goodsNav">
			<ul>
				<v-touch
					tag="li"
					v-for="(item,index) in goodsList"
					:key="index"
					@tap="clickHandler(index)"
					:class="index==index1 ? cla : ''"
				>{{item.gname}}</v-touch>
			</ul>
		</div>
        <div class="goodsContent">{{ goodsList[index1].gname}}</div> 
		<van-card v-for="(item,index) in goodsClass"
        :key="index"
			:num="1"
			:price="item.h"
			:desc="item.f1"
			:title="item.q"
			:thumb="'https://goods6.juancdn.com'+ item.r"
		/>
	</div>
</template>
<script>
import Vue from 'vue'
import { Card } from 'vant'
Vue.use(Card)
import { LifeMarket } from 'api/mocvie'
export default {
    name: 'LifeMarket',
    [Card.name]:Card,
	data() {
		return {
			goodsList: [{gname:'纸品洗护'}],
			index1: 0,
            cla: 'blue',
            goodsClass:[]
		}
	},
	methods: {
		clickHandler(index) {
            this.index1 = index
            this.goodsClass = this.goodsList[this.index1].goodsList;
		}
	},
	async created() {
		let data = await LifeMarket()
		let str = data
			.split('callback1145443(')[1]
			.substring(36)
			.split('"data":{"1145443":')[1]
			.split('}})')[0]
        this.goodsList = JSON.parse(str)
        this.goodsClass = JSON.parse(str)[0].goodsList;
	}
}
</script>
<style scoped>
.topimg {
	height: 3.14rem;
	width: 100%;
}
.topimg img {
	height: 100%;
	width: 100%;
}
.goodsNav {
	height: 0.89rem;
	width: 100%;
}
.goodsNav ul {
	height: 100%;
	width: 100%;
}
.goodsNav ul li {
	height: 0.44rem;
	width: 25%;
	border-right: 1px solid #ef7d55;
	border-bottom: 1px solid #ef7d55;
	font-size: 0.14rem;
	color: #fff;
	float: left;
	text-align: center;
	background: #fd936d;
	line-height: 0.44rem;
}
.goodsNav ul .blue {
	background: #3adff3;
}
.goodsContent{
    font-size:.15rem;
    color:#F67A4E;
    height:.65rem;
    line-height: .65rem;
    text-align: center;
    background: #FFE5DD;
}
</style>