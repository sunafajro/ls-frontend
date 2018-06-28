import axios from "axios";
import { notify } from "../utils";

export const newsModule = {
  state: {
    access: {
      create: false,
      update: false,
      delete: false
    },
    news: []
  },
  getters: {
    access(state) {
      return state.access;
    },
    news(state) {
      return state.news;
    }
  },
  mutations: {
    updateNews(state, { access, news }) {
      state.access = access;
      state.news = news;
    }
  },
  actions: {
    getNews({ commit }, payload) {
      const { month } = payload;
      axios(`/news/index?month=${month}`)
        .then(response => {
          if (response.data.status) {
            commit("updateNews", {
              access: response.data.actions,
              news: response.data.news
            });
          } else {
            notify("error", response.data.text);
          }
        })
        .catch(err => {
          notify("error", err.message ? err.message : "Произошла ошибка!");
        });
    },
    createNews() {},
    updateNews() {},
    deleteNews() {}
  }
};
