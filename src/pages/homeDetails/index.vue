<template>
  <div class="homeDetails">
    <!-- 首页详情页面 -->
    <div class="header">
      <v-touch tag="span" @tap="clickHandle()" class="iconfont icon-zuojian"></v-touch>
      <span>{{storeInfo.title}}</span>
      <v-touch tag="span" @tap="bookHanlde()" class="iconfont icon-sangedian"></v-touch>
      <div class="ilvgOO" v-if="flag">
        <div class="cQcjFR"></div>
        <ul>
          <router-link
            v-for="(item,index) in nev"
            :key="index"
            tag="li"
            :to="item.icon"
            class="dgTwAe"
          >{{item.name}}</router-link>
        </ul>
      </div>
    </div>
    <div class="jokmto">
      <div class="cQHFIx">
        <div class="fAbHwE">
          <div class="iCnP">
            <img :src="brandInfo.logo_url" :alt="brandInfo.shop_name" />
          </div>
          <div class="iuwpVa">
            <p class="ggRoE">{{brandInfo.shop_name}}</p>
            <p class="jpfFsg">{{brandInfo.store_info}}</p>
          </div>
          <span class="gJrQZH">心</span>
        </div>
      </div>
    </div>
    <div class="bqGekT">
      <p>距离结束还剩</p>
      <div class="pyIRk">
        <span>-</span>
        <van-count-down :time="time" format="DD 天 HH 时 mm 分 ss 秒" />
        <span>-</span>
      </div>
    </div>
    <div class="pageList">
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</template>
<script>
import { homeDetails_api } from "api/mocvie";
export default {
  name: "HomeDetails",
  async created() {
    let id = "1771593" + "_" + this.id;
    let data1 = await homeDetails_api(this.page, id);
    this.storeInfo = data1.storeInfo;
    this.brandInfo = data1.brandInfo;
    console.log(this.brandInfo);
    this.createData();
  },
  props: ["id"],
  data() {
    return {
      page: 1,
      flag: false,
      storeInfo: {},
      brandInfo: {},
      nev: [
        {
          name: "首页",
          icon: "/home"
        },
        {
          name: "我的收藏",
          icon: "/home"
        },
        {
          name: "我的订单",
          icon: "/home"
        }
      ],
      time: 24 * 60 * 60 * 1000
    };
  },
  methods: {
    clickHandle() {
      console.log(1111);
      this.$router.back();
    },
    bookHanlde() {
      this.flag = !this.flag;
    },
    createData() {
      let time = this.brandInfo.gs_end_time-this.brandInfo.gs_start_time;
      let days =time /60 / 60;
      let doy=days* 60 * 60 * 1000
      this.time=doy;
    }
  }
};
</script>
<style scoped>
.homeDetails {
  font-size: 0.14rem;
  position: relative;
  background: rgba(161, 156, 156, 0.699);
}

.header {
  display: flex;
  padding: 0 0.1rem;
  justify-content: space-between;
  font-size: 0.18rem;
  line-height: 0.32rem;
  width: 100%;
  background: #fff;
  position: relative;
}
.header span:nth-child(3) {
  font-size: 0.27rem;
}
.ilvgOO {
  position: absolute;
  top: 0.4rem;
  right: 0.08rem;
  width: 1.2rem;
  font-size: 0.14rem;
  border-radius: 0.06rem;
  background-color: rgba(0, 0, 0, 0.623);
  color: #fff;
}
.dgTwAe {
  margin: 0 0.1rem;
  padding: 0.05rem 0;
}

.cQcjFR {
  width: 0;
  height: 0;
  border-left: 0.12rem solid transparent;
  border-right: 0.12rem solid transparent;
  border-bottom: 0.12rem solid rgba(0, 0, 0, 0.521);
  position: absolute;
  top: -0.1rem;
  right: 0.1rem;
}

.jokmto {
  background: url(/static/media/brand_bg.15e6f457.png) repeat;
  padding: 0.1rem;
}
.cQHFIx {
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  padding-left: 0.1rem;
  background-color: #fff;
}
.fAbHwE {
  height: 0.5rem;
  overflow: hidden;
  display: flex;
  -webkit-box-align: center;
  position: relative;
}
.iCnP {
  width: 0.48rem;
  height: 0.48rem;
  align-items: center;
  border: 1px solid #ebebeb;
  display: flex;
  -webkit-box-align: center;
}
.iCnP img {
  width: 100%;
}

.iuwpVa {
  width: 55%;
  font-size: 0.14rem;
  margin-left: 0.12rem;
}
.ggRoE {
  height: 0.28rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.jpfFsg {
  font-size: 0.12rem;
  color: #333;
  opacity: 0.5;
}

.gJrQZH {
  right: 0.28rem;
  position: absolute;
  top: 0px;
  font-size: 0.123rem;
  text-align: center;
}

.bqGekT {
  font-size: 0.12rem;
  color: #999;
  text-align: center;
  padding-top: 0.27rem;
  padding-bottom: 0.12rem;
}

.pyIRk {
  display: flex;
  color: #333;
  justify-content: center;
}
</style>