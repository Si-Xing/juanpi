<template>
  <div id="app">
    <router-view></router-view>
    <Wxs-TabBar/>
  </div>
</template>
<script>
import TabBar from "./components/tabBar"
export default {
  components:{
    [TabBar.name]:TabBar,
  }
}
</script>
<style lang="scss">

</style>
