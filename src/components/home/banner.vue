<template>
	<div class="commodity">
		<div class="container">
			<swiper class="swiImgs" :options="swiperOption" v-if="commodity.length!=0">
				<swiper-slide v-for="(item, index) in commodity" data-index="index" :key="index" class="item">
					<img class="swiImg" :src="item" />
				</swiper-slide>
			</swiper>
		</div>
	</div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
require('swiper/dist/css/swiper.css')
export default {
	name: 'Banner',
	components: {
		swiper,
		swiperSlide
	},
	data() {
		const that = this
		return {
			commodity: [
				'https://goods2.juancdn.com/jas/190904/3/4/5d6f7802b6f8ea6f2840b82d_1080x418.png',

				'https://goods6.juancdn.com/jas/190905/b/b/5d70851433b0891ff35d2af0_1080x418.png',

				'https://goods1.juancdn.com/jas/190905/0/2/5d70869133b08934bf7981e7_1080x418.png',

                'https://goods5.juancdn.com/jas/190422/8/2/5cbd6608b6f8ea54ff237631_1080x418.png',
			],
			imgIndex: 1,

			swiperOption: {
				//是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true

				notNextTick: true,

				//循环

				loop: true,

				//设定初始化时slide的索引

				initialSlide: 0,

				//自动播放

				autoplay: {
					delay: 1500,

					stopOnLastSlide: false,

					disableOnInteraction: false
				},

				//滑动速度

				speed: 800,

				//滑动方向

				direction: 'horizontal',

				//小手掌抓取滑动

				grabCursor: true,

				//滑动之后回调函数

				on: {
					slideChangeTransitionStart: function() {
						that.imgIndex = this.realIndex + 1 //获取轮播图片下标索引；这里有一个坑，之前网上找到的是用activeIndex，但后来网上说的是这个realIndex，原来activeIndex是swiper2.0的；而realIndex是swiper3.0的，（使用realIndex才实现了下标索引）
					}
				},

				// //分页器设置

				// pagination: {
				// 	el: '.swiper-pagination',

				// 	clickable: true,

				// 	type: 'bullets'
				// }
			}
		}
	},

	created() {
		this.swiperOption.autoplay =
			this.commodity.length != 1
				? {
						//控制只有一张图片的时候不自动轮播

						delay: 1500,

						stopOnLastSlide: false,

						disableOnInteraction: false
				  }
				: false
	}
}
</script>
<style>
.commodity{
    height:1.45rem;
    width:100%;
}
.commodity div{
    height:100%;
    width:100%;
}
.commodity img{
    height:100%;
    width:100%
}
</style>