<template>
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
            cla:"red",
            index1:0,
		}
	},
	async created(){
		let listLeft = await Classify();
		this.listLeft = JSON.parse(listLeft.split("json(")[1].split(");")[0])  ;
	},
    methods:{
        clickHandler(index){
            this.index1=index;
		},
		json(data){
			console.log(data)
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
</style>