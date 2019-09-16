<template>
  <div class="page">
    <div id="content">
      <div class="search_movie_body">
        <div class="search_movie_input">
          <input type="text" v-model="searchVal" placeholder="搜索" />
          <v-touch tag="p" @tap="fanHanlde()">取消</v-touch>
        </div>
        <div class="dPRneG-con">
          <router-link
            tag="div"
            :to="{name:'details'}"
            v-for="(item,index) in searchList"
            :key="index"
          >
            <div :class="index%2?'dPRneG mar':'dPRneG mar1'">
              <img :src="item.picurl" :alt="item.title" class="img1" />
              <div class="price">
                <span class="new">￥{{item.cprice}}</span>
                <span class="old">￥{{item.oprice}}</span>
              </div>
              <div class="info">
                <span>{{item.title}}</span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { search_api } from "../../api/mocvie.js";
export default {
  name: "Search",
  data() {
    return {
      searchVal: "",
      searchList: []
    };
  },
  timer: null,
  watch: {
    searchVal(newVal, oldVal) {
      clearTimeout(this.timer);
      this.timer = setTimeout(async () => {
        let data = await search_api(newVal);
        this.searchList = data.data.list;
        console.log(data.data.list);
      }, 300);
    }
  },
  methods: {
    fanHanlde() {
      this.$router.back();
    }
  }
};
</script>
<style scoped>
.page {
  height: 100%;
}
/*content*/
#content {
  width: 100%;
  height: 100%;
  padding-bottom: 0.5rem;
}

/*movie_body*/
#content .search_movie_body {
  height: 100%;
  padding-bottom: 0.5rem;
  overflow-x: hidden;
}

#content .search_movie_body .search_movie_input {
  padding: 0.08rem 0 0.08rem 0.1rem;
  background-color: #f5f5f5;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
}
#content .search_movie_body .search_movie_input > input {
  padding: 0 0.1rem;
  border: 1px solid #e6e6e6;
  border-radius: 0.05rem;
  background-color: #fff;
  -webkit-box-flex: 1;
  flex-grow: 1;
  width: 3rem;
  height: 0.3rem;
  font-size: 14px;
}
#content .search_movie_body .search_movie_input > p {
  height: 0.3rem;
  line-height: 0.3rem;
  padding: 0 0.1rem;
  font-size: 0.16rem;
  color: #f03d37;
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
  margin-top: -0.1rem;
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
</style>