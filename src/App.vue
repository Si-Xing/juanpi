<template>
  <div id="app">
    <router-view></router-view>
    <Wxs-TabBar v-if="$route.meta.tabBar"/>
  </div>
</template>
<script>
import http from "./utils/http"
import TabBar from "./components/tabBar"
export default {
  components:{
    [TabBar.name]:TabBar
  }
}
</script>
<style lang="scss">

</style>
