import axios from "axios";
import { notify } from "../utils";

export const breadcrumbsModule = {
  state: {
    breadcrumbs: {}
  },
  getters: {
    getBreadcrumbByRoute(state) {
      return r => state.breadcrumbs[r];
    }
  },
  mutations: {
    updateBreadcrumbsLinks(state, breadcrumbs) {
      state.breadcrumbs = breadcrumbs;
    }
  },
  actions: {
    getBreadcrumbsLinks({ commit }) {
      axios("/site/bc")
        .then(response => {
          commit("updateBreadcrumbsLinks", response.data.breadcrumbs);
        })
        .catch(err => {
          notify("error", err.message ? err.message : "Произошла ошибка!");
        });
    }
  }
};
