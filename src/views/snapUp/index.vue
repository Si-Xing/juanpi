<template>
  <JianPi-BScroll ref="scroll">
    <div class="snapUp">
      <div class="title">
        <div class="title-left"></div>
        <span class="title-right">最后疯抢</span>
      </div>
      <ul class="snapUp-goods">
        <li class="snapUp-goods-cn" v-for="(item,index) in sanpUpList" :key="index">
          <div class="img-con">
            <img :src="item.pic_url" />
            <img :src="item.logo_url" class="snapUp-goods-img" />
          </div>
          <p class="list-price">
            <span>{{item.coupon_tips}}</span>
          </p>
          <div class="short">
            <h3>{{item.title}}</h3>
            <span class="only-time">{{item.time_left}}</span>
          </div>
        </li>
      </ul>
    </div>
  </JianPi-BScroll>
</template>
<script>
import { anapUp_api } from "api/mocvie";
import { async } from 'q';
export default {
  name: "snapUp",
  data() {
    return {
      sanpUpList:[],
      page: 1
    };
  },
  async created() {
    let data = await anapUp_api();
    this.sanpUpList = data.data.goods;
  },
  mounted() {
    this.$refs.scroll.pullDownHandle(async () => {
        this.page++;
        let data = await anapUp_api(this.page);
        if (data) {
           data.data.goods.forEach(element => {
            this.sanpUpList.push(element)
          });
          this.$refs.scroll.finishPullDownHandle()
        }
    });
    this.$refs.scroll.pullUpHandle(async ()=>{
      this.page++;
      let data = await anapUp_api(this.page);
        if (data) {
          data.data.goods.forEach(element => {
            this.sanpUpList.push(element)
          });
          this.$refs.scroll.finishPullUpHandle()
        }
    })
  }
};
</script>
<style scoped>
.snapUp {
  position: relative;
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
  margin: 0.1rem 0 0 0.12rem;
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
.snapUp-goods {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.snapUp-goods-cn {
  position: relative;
  width: 50%;
  font-size: 14px;
}
.snapUp-goods-cn img:nth-child(1) {
  width: 100%;
}
.snapUp-goods-cn .img-con {
  position: relative;
  width: 100%;
}
.snapUp-goods-cn .snapUp-goods-img {
  position: absolute;
  bottom: -0.125rem;
  right: 0.2rem;
  height: 0.29rem;
  border: 1px solid #ebebeb;
  border-width: 1px;
  background-color: #fff;
}

.list-price {
  margin: 0.1rem 0.08rem 0 0.08rem;
  color: #ff464e;
}

.snapUp-goods-cn .short {
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  color: #ccc;
  margin: 0.1rem 0.08rem 0 0.08rem;
}
.snapUp-goods-cn .short h3 {
  width: 60%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>