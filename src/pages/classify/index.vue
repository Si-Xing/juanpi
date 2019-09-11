<template>
<<<<<<< HEAD
	<div >
		<van-search placeholder="搜索商品"/>
        <div>
		<div class="list-left">
			<ul>
				<v-touch 
                tag="li"
                v-for="(item,index) in listLeft" :key="index" 
                @tap="clickHandler(index)"
                :class="index1==index ? cla :''"
                >{{item.name}}</v-touch>
			</ul>
		</div>
		<div class="list-right">
			<v-touch tag="div" class="goods" v-for="(item,index) in listRight" :key="index"  @tap="changeHanler(listRight[index].id)" >
				<img :src="'https://s2.juancdn.com' + item.icon" alt="">
				<span>{{item.name}}</span>
			</v-touch >
		</div>
        </div>
	</div>
</template>
<script>
import {Classify} from 'api/mocvie';
import Vue from 'vue'
import { Search } from 'vant'
Vue.use(Search)
export default {
	name: 'Classify',
	data() {
		return {
			listLeft:[],
			listRight:[],
            cla:"red",
            index1:0,
		}
	},
	async created(){
		let listLeft = await Classify();
		this.listLeft = JSON.parse(listLeft.split("json(")[1].split(");")[0])  ;
		this.listRight=this.listLeft[0].secondCateList
	},
    methods:{
        clickHandler(index){
			this.index1=index;
			this.listRight=this.listLeft[index].secondCateList
			
		},
		changeHanler(id){
			console.log( id )
		}
    }
}
</script>
<style>
.list-left {
	float: left;
	width: 25%;
	background: #f9f9f9;
	overflow: hidden;
}
.list-left ul li {
	font-size: 0.14rem;
	color: #333;
    width:.92rem;
    height:.45rem;
    border-left:4px solid #f9f9f9;
    border-bottom: 1px solid #ebebeb;
    text-align: center;
    line-height:.45rem;
}
.list-left ul{
	margin-bottom:.49rem;
}
.list-left ul .red {
	color: #ff464e;
    border-left: 4px solid #ff464e;
}
.list-right{
	float:left;
	width:71%;
	padding:0 0 .49rem 4%;
	font-size:.12rem;
	display: flex;
	flex-wrap: wrap;
}
.list-right .goods{
	flex:1;
	height:.94rem;
	width:33%;
	padding: 0 .13rem;
	text-align: center;
}
.list-right .goods img{
	height:.59rem;
	width:.59rem;
}
.list-right .goods span{
	font-size: .12rem;
	line-height: .2rem;
	color:#333;
}
=======
    <div>
        <!-- <h2>Classify</h2> -->
    </div>
</template>
<script>
export default {
    name:"Classify"
}
</script>
<style lang="">
    
>>>>>>> 3c6b92ffad672a842a4e41bee7c8d9725b3bfa9d
</style>