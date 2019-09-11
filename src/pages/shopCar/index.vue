<template>
<<<<<<< HEAD
	<div>
		<div class="top">
			<v-touch tag="i" @tap="handlerGoBack()" class="iconfont">&#xe716;</v-touch>
			<div class="center">购物车</div>
			<v-touch tag="span" @tap="handlerChange()" v-show="flag">编辑</v-touch>
			<v-touch tag="span" @tap="handlerChange()" v-show="!flag">完成</v-touch>
		</div>
		<div class="cksAll">
			<i class="iconfont">&#xe625;</i>
			<img src="http://s2.juancdn.com/bao/170615/2/b/5942339ea43d1f47ef70e59a_72x72.png" alt />
			<span>全选</span>
		</div>
		<ul class="goodsList">
			<li>
				<div class="goodsradios">
					<i class="iconfont">&#xe625;</i>
				</div>
				<div class="goodsinfo">
					<img
						src="https://goods1.juancdn.com/goods/190723/0/6/5d37073933b08941c565ccb4_800x800.jpg?iopcmd=thumbnail&type=11&height=310&width=310%7Ciopcmd=convert&Q=88&dst=jpg"
						alt
					/>
					<div class="goodsprice">
						<p class="name">花花公子潮流青年夹克</p>
						<p class="info">蓝色3xl</p>
						<div class="price">
							<span class="new">12321</span>
							<span class="old">213213</span>
						</div>
						<span class="num">X10</span>
					</div>
				</div>
			</li>
			<li>
				<div class="goodsradios">
					<i class="iconfont">&#xe625;</i>
				</div>
				<div class="goodsinfo">
					<img
						src="https://goods1.juancdn.com/goods/190723/0/6/5d37073933b08941c565ccb4_800x800.jpg?iopcmd=thumbnail&type=11&height=310&width=310%7Ciopcmd=convert&Q=88&dst=jpg"
						alt
					/>
					<div class="goodsprice">
						<p class="name">花花公子潮流青年夹克</p>
						<p class="info">蓝色3xl</p>
						<div class="price">
							<span class="new">12321</span>
							<span class="old">213213</span>
						</div>
						<span class="num">X10</span>
					</div>
				</div>
			</li>
		</ul>
		<div class="getMoney">
			<div class="goodsradios">
				<i class="iconfont">&#xe625;</i>
				全选
			</div>
			<div class="get" v-show="flag">
				<div class="price">
					<p>
						合计
						<span>￥333</span>
					</p>
				</div>
				<div class="btn getBtn">
					去结算
					<span>(2)</span>
				</div>
			</div>
			<div class="change" v-show="!flag">
				<div class="delBtn btn">删除</div>
				<div class="colBtn btn">移入收藏夹</div>
				
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'ShopCar',
	data() {
		return {
			flag: true
		}
	},
	methods: {
		handlerGoBack() {
			this.$router.back()
		},
		handlerChange(e) {
            this.flag = !this.flag
    	}
    }
}
</script>
<style  scoped>
.top {
	width: 100%;
	height: 0.44rem;
	display: flex;
	line-height: 0.44rem;
	color: #666;
}
.top .center {
	font-size: 0.18rem;
	width: 3.03rem;
	padding: 0 0.36rem;
	text-align: center;
	color: #333;
}
.top span {
	font-size: 0.15rem;
	color: #4a4a4a;
}
.top i {
	font-size: 0.2rem;
	display: block;
	padding: 0 0 0 0.12rem;
}
.cksAll {
	display: flex;
	width: 100%;
	height: 0.44rem;
	line-height: 0.44rem;
	border-top: 1px solid #ebebeb;
	border-bottom: 1px solid #ebebeb;
}
.cksAll span {
	font-size: 0.14rem;
	color: #666;
	width: 0.28rem;
}
.cksAll img {
	height: 0.2rem;
	width: 0.2rem;
	margin: 0.12rem 0.1rem 0;
}
.cksAll i {
	padding-left: 0.14rem;
}
.goodsList {
	width: 100%;
}
.goodsList li {
	display: flex;
	width: 100%;
	padding-left: 0.14rem;
	align-items: center;
}
.goodsList .goodsinfo img {
	height: 0.9rem;
	width: 0.9rem;
}
.goodsList .goodsinfo {
	padding: 0.16rem 0.14rem 0.16rem 0;
	flex: 1;
	display: flex;
	border-bottom: 1px solid rgb(235, 235, 235);
}
.goodsradios {
	width: 0.31rem;
	height: 0.26rem;
}
.goodsradios i {
	display: block;
}
.goodsprice {
	width: 100%;
	font-size: 0.14rem;
	margin-left: 0.12rem;
	position: relative;
}
.goodsprice .name {
	width: 100%;
	color: #333;
}
.goodsprice .info {
	color: #bbb;
}

.goodsprice .price {
	position: absolute;
	bottom: 0;
	width: 100%;
	font-size: 0.12rem;
	text-align: left;
}
.goodsprice .price span {
	padding: 0 0.05rem 0;
	margin: 0.12rem 0.02rem 0 0;
}
.goodsprice .price .new {
	color: #ff464e;
}
.goodsprice .price .old {
	text-decoration: line-through;
	color: #999999;
}
.goodsprice .num {
	position: absolute;
	right: 0;
	bottom: 0.1rem;
	padding: 0 0;
	margin: 0 0;
}
.getMoney {
	height: 0.49rem;
	width: 100%;
	position: fixed;
	bottom: 0;
	left: 0;
	line-height: 0.49rem;
	display: flex;
	z-index: 2;
}
.getMoney .goodsradios {
	padding-left: 0.14rem;
	font-size: 0.16rem;
	display: flex;
	height: 100%;
	width: 0.94rem;
}
.get {
	display: flex;
}
.getMoney .goodsradios i {
	margin-right: 0.1rem;
}
.getMoney .price {
	width: 1.64rem;
	height: 100%;
	font-size: 0.14rem;
	margin-right: 0.05rem;
	text-align: right;
}
.getMoney .price span {
	color: #ff464e;
}
.getMoney .btn {
	font-size: 0.18rem;
	width: 1.12rem;
	text-align: center;
	background: #ff464e;
	color: #fff;
	float: right;
}
.getMoney .colBtn {
	background: #f6a623;
	margin-left: 0.56rem;
}
=======
    <div>
        <!-- <h2>ShopCar</h2>   -->
    </div>
</template>
<script>
export default {
    name:"ShopCar"
}
</script>
<style >
    
>>>>>>> 3c6b92ffad672a842a4e41bee7c8d9725b3bfa9d
</style>