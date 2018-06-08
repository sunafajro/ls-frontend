import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      loggedIn: false,
      userName: "guest",
      role: "guest"
    }
  },
  getters: {
    isGuest: state => {
      return !state.user.loggedIn;
    }
  },
  mutations: {},
  actions: {}
});
