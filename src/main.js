import Vue from "vue";
import Vuetify from "vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "vuetify/dist/vuetify.min.css";

export const eventBus = new Vue({
  methods: {
    listEdit(memo, index) {
      this.$emit("listEdit", memo, index);
    },
  },
});
Vue.use(Vuetify);
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  vuetify: new Vuetify(),
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
