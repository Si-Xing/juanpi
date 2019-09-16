<template>
	<div>
		<div class="shopCarTop">
			<v-touch tag="i" @tap="handlerGoBack()" class="iconfont">&#xe716;</v-touch>
			<div class="shopCarCenter">购物车</div>
			<v-touch tag="span" @tap="handlerChange()" v-show="flag">编辑</v-touch>
			<v-touch tag="span" @tap="handlerChange()" v-show="!flag">完成</v-touch>
		</div>
		<div class="cksAll">
			<i @click="changeHandler($event),click=allSel()"   class="All selAll iconfont">&#xe625;</i>
			<img src="http://s2.juancdn.com/bao/170615/2/b/5942339ea43d1f47ef70e59a_72x72.png" alt />
			<span>全选</span>
		</div>
		<ul class="goodsList">
			<li v-for="(item,index) in shopCarList" :key="index">
				<div class="goodsradios">
					<i @click="changeHandler($event),clickNum(index)"  class="All iconfont">&#xe625;</i>
				</div>
				<div class="goodsinfo">
					<img :src="item.src" />
					<div class="goodsprice">
						<p class="name">{{item.title}}</p>
						<p class="info">{{item.num}}</p>
						<div class="price">
							<span class="new">￥{{item.cprice}}</span>
							<span class="old">￥{{item.oprice}}</span>
						</div>

							<div class="num">
								<button @click="subHandler(index)">-</button>
								<input type="text" :value="item.count" />
								<button @click="oddHandler(index)">+</button>
							</div>
			
					</div>
				</div>
			</li>
		</ul>
		<div class="getMoney">
			<div class="goodsradios">
				<i @click="changeHandler($event),click=allSel()" class=" All selAll iconfont">&#xe625;</i>
				全选
			</div>
			<div class="get" v-show="flag">
				<div class="price">
					<p>
						合计{{goodsPrice.goodsPriceSum}}
					</p>
				</div>
				<div class="btn getBtn">
					去结算({{goodsPrice.goodsCount}})
					<span></span>
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
import { mapState,mapMutations,mapGetters} from 'vuex'
export default {
	name: 'ShopCar',
	data() {
		return {
			flag: true,
		}
	},
	computed: {
		...mapState({
			shopCarList: state => state.HomeListB.shopCarList
		}),
		...mapGetters({
        goodsPrice:"HomeListB/goodsPrice"
      })
	},
	methods: {
		handlerGoBack() {
			this.$router.back()
		},
		handlerChange(e) {
			this.flag = !this.flag
		},
		...mapMutations({
			changeHandler:"HomeListB/changeHandler",
			clickNum:"HomeListB/clickNum",
			allSel:"HomeListB/allSel",
			subHandler:"HomeListB/subHandler",
			oddHandler:"HomeListB/oddHandler"
		}),
	}
}
</script>
<style  scoped>
.shopCarTop {
	width: 100%;
	height: 0.44rem;
	display: flex;
	line-height: 0.44rem;
	color: #666;
}
.shopCarTop .shopCarCenter {
	font-size: 0.18rem;
	width: 3.03rem;
	padding: 0 0.36rem;
	text-align: center;
	color: #333;
}
.shopCarTop span {
	font-size: 0.15rem;
	color: #4a4a4a;
}
.shopCarTop i {
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
.goodsprice > .num {
  overflow: hidden;
  display: flex;
}
.goodsprice > .num > button {
  width: 20px;
  height: 20px;
  border: 0;
}
.goodsprice > .num > input {
  width: 40px;
  border:1px solid;
  padding:0 0;
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
</style>	

