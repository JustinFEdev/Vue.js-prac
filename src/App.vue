<template>
  <div id="app">
    <div id="nav">
      <div>
        <button @click="toggle">사이드 메뉴</button>
        <Drawer @close="toggle" align="left" :closeable="true">
          <div v-if="open">
            <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
            <router-link to="/demopage">DemoPage</router-link>
          </div>
        </Drawer>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
import Drawer from "vue-simple-drawer";

export default {
  name: "App",
  data() {
    return {
      open: false,
    };
  },
  components: {
    Drawer,
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: cadetblue;
  text-align: left;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
