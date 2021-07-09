<template>
  <div>
    <div>Side Navigation</div>
    <div id="nav">
      <header class="sidelayout">
        <button @click="toggle">사이드 메뉴 1</button>
        <Drawer @close="toggle" align="left" :closeable="true">
          <div v-if="open">
            <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
            <router-link to="/demopage">DemoPage</router-link>
          </div>
        </Drawer>
      </header>
      <header :class="{ sidelayout2: scrollPosition }">
        <button @click="side2">사이드 메뉴 2</button>
        <ul v-show="!open2">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/demopage">DemoPage</router-link></li>
        </ul>
        <div class="icon">
          <i
            @click="toggleSideMenu"
            v-show="open2"
            class="far fa-bars"
            :class="{ 'icon-active': sildeNav }"
          ></i>
        </div>
        <transition name="nave-side">
          <ul v-show="sildeNav" class="dropdown">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/demopage">DemoPage</router-link></li>
          </ul>
        </transition>
      </header>
    </div>
  </div>
</template>
<script>
import Drawer from "vue-simple-drawer";

export default {
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
    side2() {
      this.open2 = !this.open2;
      alert("사이드 메뉴 2!");
    },
  },
};
</script>
<style scoped>
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
.sidelayout {
  border: 1px solid;
  padding: 20px 0 20px 0;
}
.sidelayout2 {
  border: 1px solid;
  padding: 20px 0 20px 0;
}
nav {
  display: flex;
  flex-direction: row;
  padding: 12px 0;
  transition: 0.5s ease all;
  width: 90%;
  margin: 0 auto;
}
</style>
