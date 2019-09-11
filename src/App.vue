<template>
  <div id="app">
    <router-view></router-view>
<<<<<<< HEAD
    <Wxs-TabBar  v-if="$route.meta.tabBar"/>
=======
    <Wxs-TabBar v-if="$route.meta.tabBar"/>
>>>>>>> 3c6b92ffad672a842a4e41bee7c8d9725b3bfa9d
  </div>
</template>
<script>
import http from "./utils/http"
import TabBar from "./components/tabBar"
export default {
  components:{
<<<<<<< HEAD
    [TabBar.name]:TabBar,
  },
}
//
=======
    [TabBar.name]:TabBar
  }
}
>>>>>>> 3c6b92ffad672a842a4e41bee7c8d9725b3bfa9d
</script>
<style lang="scss">

</style>
