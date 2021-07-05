import Vue from "vue";
import Router from "vue-router";

// Desktop
import Home from "@/components/Page/Home.vue";
import About from "@/components/Page/About.vue";
import Demopage from "@/components/Page/Demopage.vue";

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
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
