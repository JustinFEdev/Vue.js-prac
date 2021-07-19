import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
  state: { counter: 0 },
  mutations: {
    decrease(state) {
      state.counter -= 1;
      console.log(state.counter);
    },
    increase(state) {
      state.counter += 1;
      console.log(state.counter);
    },
  },
  actions: {},
  getters: {},
  modules: {},
});
