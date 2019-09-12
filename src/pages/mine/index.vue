<template>
    <div> 
  <div class="mine">
    <div class="title">
      <v-touch tag="div" class="title-left iconfont icon-zuojian" @tap="clickHandle()"></v-touch>
      <span class="title-right">个人中心</span>
      <div class="denglu">
        <router-link tag="span" to="/register">注册</router-link>
        <i>|</i>
        <router-link tag="span" to="/enter">登录</router-link>
      </div>
    </div>
    <div class="dingdan">
      <div>
      <span>我的订单</span>
      <span>全部订单</span>
      </div>
    </div>
    <ul class="gongnei">
      <li v-for="(item,index) in gongnen" :key="index">
        <span :class="item.icon"></span>
        <p>{{item.name}}</p>
      </li>
    </ul>
    <ul class="userItems">
      <li v-for="(item,index) in userItems" :key="index" class="userItemsList">
         <span>{{item.name}}</span>
         <span class="font">{{item.use}}</span>
      </li>
    </ul>
    <div class="userItems">
      <div class="userItemsList">客服中心</div>
      <div class="userItemsList">关于卷皮</div>
    </div>
    <div class="foot">
      <router-link tag="p" to="/home">返回首页</router-link>
      <p>客服端</p>
      <p>电脑版</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Mine",
  data() {
    return {
      gongnen: [
        {
          name: "等付款",
          icon: "iconfont icon-fukuan"
        },
        {
          name: "待成团",
          icon: "iconfont icon-daichengtuan"
        },
        {
          name: "待收货",
          icon: "iconfont icon-daishouhuo"
        },
        {
          name: "退款/售后",
          icon: "iconfont icon-shouhoubaozhang"
        }
      ],
      userItems:[
         {
           name:"我的优惠卷",
         },
         {
           name:"我的收藏",
         },
         {
           name:"我的拼团",
         },
         {
           name:"我的免单卷",
           use:"0张"
         },
        {
           name:"借钱",
           use:"新用户免费领1000元"
         }
      ]
    };
  },
  methods: {
    clickHandle() {
      this.$router.back();
    }
  },
  created(){
    
  }
};
</script>

<style scoped>
.mine {
  font-size: 14px;
  background: rgba(187, 177, 177, 0.527);
  margin-bottom: .48rem;
}
.title {
  background: red;
  overflow: hidden;
  font-size: 20px;
  color: #f6f6f6;
  line-height: 0.44rem;
  position: relative;
  overflow: hidden;
}
.title .title-left {
  display: block;
  background-size: 100%;
  z-index: 3;
  font-size: 24px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0.12rem;
}
.title .title-right {
  display: block;
  padding: 0 0.72rem;
  text-align: center;
  width: 100%;
}

.denglu {
  text-align: center;
  line-height: 1rem;
}
.denglu span {
  margin: 0 0.48rem;
}
i {
  font-style: normal;
}
.dingdan {
  background: #fff;
  padding:0 0.19rem 0 0.2rem;
}
.dingdan div{
  display: flex;
  justify-content: space-between;
  color: #666;
  line-height: 0.48rem;
  font-size: 0.15rem;
   border-bottom:1px rgba(102, 102, 102, 0.308) solid;
   
}

.gongnei {
  display: flex;
  justify-content: space-between;
  padding: 0.15rem 0 0.12rem; 
  background: #fff;
}
.gongnei li {
  width: 100%;
  text-align: center;
  font-size: 0.12rem;
}
.gongnei li span {
  display: block;
  font-size: 0.28rem;
  margin-bottom: 0.06rem;
}

.userItems,.foot{
  margin-top: .1rem;
  background: #fff;
  padding: 0 .18rem 0 .13rem;
  line-height: .48rem;
}
.userItemsList{
  display: flex;
  justify-content: space-between;
  color: #333;
  font-size: .15rem;
  
  border-bottom:1px #ccc solid;
}
.font{
  font-size: .14rem;
  color: #ccc;
}
.foot{
  display: flex;
  justify-content: space-between;
  font-size: .12rem
}
.foot p{
  text-align: center;
  width: 100%;
}
</style>