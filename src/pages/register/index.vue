<template>
  <div class="register">
    <div class="title">
      <v-touch tag="div" class="title-left" @tap="clickHandle()"></v-touch>
      <span class="title-right">注册</span>
    </div>
    <div class="warn">
      <span>请确保你的手机畅通，用于接收验证码短信</span>
    </div>
    <div class="tel">
      <div class="telInput">
        <input type="tel" pattern="[0-9]*" placeholder="请输入手机号码" >
      </div>
      <div class="telInput1">
        <input type="tel" pattern="[0-9]*" placeholder="请输入验证码" >
        <label for="">获取验证码</label>
      </div>
      <div class="btn">下一步</div>
    </div>
  </div>
</template>
<script>
export default {
    methods:{
      clickHandle(){
        this.$router.back();
      }
    }
};
</script>
<style scoped>
.register{
  font-size: 14px;
  overflow: hidden;
}
.title {
  height: 0.44rem;
  background: #f6f6f6;
  font-size: 18px;
  line-height: 0.44rem;
  position: relative;
  overflow: hidden;
}
.title .title-left {
  display: block;
  background: url("../../assets/jiantou.jpg") no-repeat;
  background-size: 100%;
  width: 0.24rem;
  height: 0.48rem;
  z-index: 3;
  position: absolute;
  top: 0.1rem;left: 0.12rem;
}
.title .title-right {
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  padding: 0 0.72rem;
  text-align: center;
  width: 100%;
}

.warn{
  font-size: 12px;
  width: 100%;
  text-align: center;
  margin: .295rem 0 .1rem;
}

.tel{
  width: 100%;
  padding: 0 .14rem;
}
.telInput,.telInput1{
  height:.47rem;
  border-bottom: .01rem #ccc solid;
  width: 100%;
  margin-bottom: .02rem;
}
.telInput input{
  height: 100%;
  border: 0;
  width: 100%;
}
.telInput1 input{
  height: 100%;
  border: 0;
  width: 76%;
}
.btn{
  width: 100%;
  margin: .25rem 0 0;
  height: .48rem;
  border: 0;
  background: #dbdbdb;
  text-align: center;
  line-height: .48rem;
  font-size: 18px;
  color: #f6f6f6;
}

input{ outline:none; }
</style>