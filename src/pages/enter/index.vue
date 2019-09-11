<template>
  <div class="enter">
    <div class="header">
      <v-touch tag="div" class="iconfont icon-zuojian" @tap="clickHandle()"></v-touch>
      <span>登录</span>
      <router-link tag="span" to="/register">注册</router-link>
    </div>
    <div class="nev">
      <div @click="clickHamdle()" :class="flag?'ban':''">卷皮账号登录</div>
      <div @click="clickHamdle()" :class="!flag?'ban':''">手机快捷登录</div>
    </div>
    <div>
      <Enter1 v-show="flag"/>
      <Enter2 v-show="!flag"/>
    </div>
  </div>
</template>
<script>
import Enter1 from "../../common/enter1/index"
import Enter2 from "../../common/enter2/index"
export default {
  name: "Enter",
  data(){
      return{
          flag:true
      }
  },
  components:{
      Enter1,
      Enter2
  },
  methods: {
    clickHandle() {
      this.$router.back();
    },
    clickHamdle(){
        this.flag=!this.flag;
    }
  }
};
</script>
<style scoped>
.enter{
    font-size: .14rem;
}


.header {
  display: flex;
  justify-content: space-between;
  width: 0.44ewm;
  background: linear-gradient(150deg, #ff5a61 50%, #fd631c);
  line-height: 0.44rem;
  font-size: 0.18rem;
  width: 100%;
  padding: 0 0.14rem 0 0.1rem;
  color: #fff;
}


.nev{
    display: flex;
    justify-content: space-around;
    padding: 0 .12rem;
}
.nev div{
    width: 100%;
    text-align: center;
    height: .42rem;
    line-height: .42rem;
}
.ban{
    color: red;
    border-bottom: 2px red solid;
}
</style>