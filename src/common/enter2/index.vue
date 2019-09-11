<template>
  <div class="enter1">
    <div class="enter-tel">
      <input type="text" placeholder="请输入手机号码" />
    </div>
    <div class="enter-pass">
      <input type="password" placeholder="请输入验证码" />
      <label for="">获取验证码</label>
    </div>
    <div class="btn">登录</div>
    <div class="freeLogin">
        <label>
            <input type="checkbox" checked>
            两周内免登录
        </label>
        <span>忘记密码？</span>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.enter1{
    padding: 0 .12rem;
}
.enter-tel,.enter-pass{
  height: 0.47rem;
  border-bottom: 0.01rem #ccc solid;
  width: 100%;
  margin-bottom: 0.02rem;
}
.enter-tel input {
  height: 100%;
  border: 0;
  width: 100%;
}

.enter-pass input{
  height: 100%;
  border: 0;
  width: 76%;
}
input{ outline:none; }

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

.freeLogin{
    display: flex;
    justify-content: space-between;
    height: .37rem;
    line-height: .37rem;
    font-size: .14rem;
    margin-bottom: .52rem;
    color: #999;
}
</style>