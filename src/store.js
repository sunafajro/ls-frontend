import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    app: {
      isLoaded: false
    },
    user: {
      loggedIn: false,
      userName: "guest",
      role: "guest"
    }
  },
  getters: {
    isGuest(state) {
      return !state.user.loggedIn;
    },
    isLoaded(state) {
      return state.app.isLoaded;
    }
  },
  mutations: {
    updateUserState(state, user) {
      state.app.isLoaded = true;
      state.user = user;
    }
  },
  actions: {
    getUserState({ commit }) {
      axios
        .get("/site/state")
        .then(response => {
          commit("updateUserState", response.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
});
