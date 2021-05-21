<template>
  <div id="nav" class="nav">
    <router-link
      :to="item.path"
      v-for="(item, index) in routeList"
      :key="index"
    >
      <span>{{ item.name }}</span>
    </router-link>
  </div>
  <router-view />
</template>

<script>
import router from "@/router";
export default {
  data() {
    return {
      routeList: [],
    };
  },
  mounted() {
    this.routeList = router.options.routes;
  },
};
</script>

<style lang="less">
#app {
  height: 100%;
  width: 100%;
}
body {
  margin: 0;
}
.nav {
  margin: 5px;
  & > a {
    margin: 5px;
  }
}
</style>
