import Vue from "vue";
import Router from "vue-router";

// Desktop
import Home from "@/components/Page/Home.vue";
import About from "@/components/Page/About.vue";
import Demopage from "@/components/Page/Demopage.vue";

Vue.use(Router);
const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/demopage",
      name: "Demopage",
      component: Demopage,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
  ],
});

export default router;
