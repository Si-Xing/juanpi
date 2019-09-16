<template>
  <div class="pageList">
    <ul class="hQoDnQ">
      <v-touch
        tag="li"
        v-for="(item,index) in data"
        :key="index"
        class="eDZhlx"
        @tap="handlePage(index)"
      >
        <span :class="index==num?'cqAIQW':'fgqFeR'">{{item.text}}</span>
      </v-touch>
    </ul>
    <div v-for="(item,index) in data1" :key="index">
      <div class="dPRneG-con">
        <v-touch
          v-if="item.activityname=='click_cube_goods'"
          :class="index%2?'dPRneG mar':'dPRneG mar1'"
        >
        <router-link tag="div" :to="{name:'details'}">
          <img :src="item.pic_url" :alt="item.title" class="img1" />
          <img :src="item.corner" v-if="item.corner" :alt="item.title" class="img2" />
          <div class="price">
            <span class="new">￥{{item.cprice}}</span>
            <span class="old">￥{{item.oprice}}</span>
          </div>
          <div class="info">
            <span>{{item.title}}</span>
          </div>
           </router-link>
        </v-touch>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapMutations } from "vuex";
export default {
  name: "Shouye2",
  props: {
    data: {
      required: true
    },
    data1: {
        type:Array,
      required: true
    }
  },
  data() {
    return {
      num: ""
    };
  },
  methods: {
    handlePage(index) {
      this.num = index;
    },
    ...mapMutations({
      idHandler: "HomeListB/idHandler"
    })
  }
};
</script>
<style scoped>
.pageList {
  background: #fff;
  height: 0.41rem;
  position: static;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1000;
  text-align: center;
  width: 100%;
}

.hQoDnQ {
  float: left;
  width: 100%;
  background: #fff;
  white-space: nowrap;
  overflow-x: auto;
  position: relative;
  z-index: 1000;
}

.eDZhlx {
  vertical-align: top;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 0.14rem;
  width: auto;
  color: #333;
  display: inline-block;
  margin-left: 0.12rem;
}
.cqAIQW {
  border-bottom-width: 4px;
  border-bottom-color: #ff464e;
  border-bottom-style: solid;
  display: inline-block;
  height: 0.4rem;
  line-height: 0.4rem;
  color: #ff464e;
}
.fgqFeR {
  border-bottom-width: 4px;
  border-bottom-color: #fff;
  border-bottom-style: solid;
  display: inline-block;
  height: 0.4rem;
  line-height: 0.4rem;
  color: #333;
}

.duNiVz {
  font-size: 0.18rem;
  line-height: 0.44rem;
  color: #333;
  width: 100%;
  background: #fff;
}

.goods {
  overflow: hidden;
  width: 100%;
  background: #ccc;
}
.dPRneG-con {
  width: 100%;
}
.dPRneG {
  width: 1.85rem;
  height: 2.42rem;
  background-color: #f2f2f2;
  position: relative;
}
.mar {
  float: left;
}
.mar1 {
  float: right;
}
.dPRneG .img1 {
  width: 100%;
  display: inline-block;
}

.price {
  display: flex;
  margin-top: 0.06rem;
  padding: 0 0.08rem;
  height: 0.21rem;
  line-height: 0.21rem;
}
.old {
  font-size: 0.11rem;
  color: #bbb;
  text-decoration: line-through;
}
.new {
  margin-right: 0.04rem;
  font-size: 0.15rem;
  color: #ff464e;
}
.info {
  padding-left: 0.16rem;
  font-size: 0.12rem;
  line-height: 1;
  display: flex;
}

.img2 {
  position: absolute;
  top: 0;
  left: 0;
  width: 0.45rem;
  height: 0.45rem;
}
</style>