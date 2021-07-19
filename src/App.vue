<template>
  <div id="app">
    <SideNav />
    <router-view />
  </div>
</template>
<script>
import SideNav from "./components/navigation/SideNav.vue";

export default {
  name: "App",
  components: {
    SideNav,
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
