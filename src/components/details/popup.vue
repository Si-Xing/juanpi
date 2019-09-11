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
    <van-popup closeable position="bottom" :style="{ height: '50%' }" tag="div" v-model="show">
        <div class="title">
            服务说明
        </div>
        <div class="content">
            <div class="deliver">
               
                <span> <i></i> 24小时发货</span> 
                <p>买家付款成功后，商家将在24小时内完成发货。（节假日等特殊情况除外）</p>    
            </div>
            <div class="sales">
                               
                <span>  <i></i> 七天包退</span> 
                <p>卷皮严格按照消费者保障服务，接受买家7天无理由退货。</p>
            </div>
            <div class="subsidy">
                                
                <span><i></i> 售后补贴</span> 
                <p>商品存在问题时，请及时申请售后，卷皮将提供价值10元的退货运费补贴。如遇少件、错发、空包裹等情况，还额外提供至少10元的补偿（详见“客服中心”相关规则说明）。</p>
            </div>
            
        </div>
        <div class="know"  @click="showPopup">知道了</div>
        </van-popup>
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
			this.show = !this.show
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
    margin-top:.01rem;
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

.title{
    height:.47rem;
    width:100%;
    padding:.13rem .1rem;
    font-size:.16rem;
    text-align: center;
}
 .content{ 
    width:100%;
        border-top:2px solid #ebebeb ;
} 
.content i{
    margin-bottom:.035rem;
    display: inline-block;
    height:.04rem;
    width:.04rem;
    border-radius: .02rem;
    background: #ff464e;
    vertical-align: middle;
}
.content span{
    font-size: .14rem;
        color: #4a4a4a;
        display: block;
        
}
.content p{
        color: #9b9b9b;
        font-size: .12rem;
}
.content  div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: .12rem 0 .14rem 0;
    margin: 0  .14rem 0   ;
    border-bottom:1px solid #ebebeb ;
}
.content .deliver{
    height:.82rem;
}
.content .sales{
    height:.67rem;   
}
.know{
    width:100%;
    height:.48rem;
    background-color: #ff464e;
    position: fixed;
    bottom: 0;
    left: 0;
    font-size:.18rem;
    color:#fff;
    text-align: center;
    line-height:.48rem;
}
</style>