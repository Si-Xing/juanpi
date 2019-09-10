<template>
    <div class="express">
        <van-button tag="p" class="info" @click="showPopup">
    
            <span>
                <i></i>
                24小时发货
            </span>
            <span>
                <i></i>
                七天包退
            </span>
            <span>
                <i></i>
                售后补贴
            </span> 
            <img src="https://web.juanpi.com/static/media/more.66830346.png" alt=""> 
       
    </van-button>
    <van-popup closeable position="bottom" :style="{ height: '50%' }" v-model="show">wqeqweqw</van-popup>
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
.express .info{
    padding: 0 .14rem;
    width:100%;
    height:100%;
    font-size:.15rem;
    color:#333;
    vertical-align: middle;
    line-height:.48rem;    
    margin-bottom:.5rem;
}
.express .info i{
    display: inline-block;
    height:.04rem;
    width:.04rem;
    border-radius: .02rem;
    background: #ff464e;
    vertical-align: middle;
}
.express .info span{
    margin-right:.14rem;
}
.express .info img{
   height:.24rem;
   width:.24rem;
   position: absolute;
   right:.14rem;
   top:.12rem;
}

</style>