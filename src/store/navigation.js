import axios from "axios";
import { notify } from "../utils";

export const navigationModule = {
  state: {
    navigation: []
  },
  getters: {
    navigationLinks(state) {
      return state.navigation;
    }
  },
  mutations: {
    updateNavigationLinks(state, navigation) {
      state.navigation = navigation;
    }
  },
  actions: {
    getNavigationLinks({ commit }) {
      // axios
      // .get("/site/csrf")
      // .then(response => {
      //   let data = { ...response.data };
      axios
        .get("/site/nav")
        // , JSON.stringify(data), {
        //  headers: { "Content-Type": "application/json" }
        // })
        .then(response => {
          commit("updateNavigationLinks", response.data.navigation);
        })
        .catch(err => {
          notify("error", err.message ? err.message : "Произошла ошибка!");
        });
      // })
      // .catch(err => {
      //   notify("error", err.message ? err.message : "Произошла ошибка!");
      // });
    }
  }
};
