import axios from "axios";
import { notify } from "../utils";

export const messagesModule = {
  state: {
    access: {
      create: false,
      update: false,
      delete: false
    },
    messages: [],
    targets: []
  },
  getters: {
    getAccess(state) {
      return state.access;
    },
    getMessages(state) {
      return state.messages;
    },
    getTargets(state) {
      return state.targets;
    }
  },
  mutations: {
    updateMessages(state, { access, messages }) {
      state.access = access;
      state.messages = messages;
    },
    updateTargets(state, { targets }) {
      state.targets = targets;
    }
  },
  actions: {
    getMessages({ commit }, payload) {
      const { type, fromDate, toDate } = payload;
      const url = `/message/get-messages?type=${type ? type : ""}&from=${
        fromDate ? fromDate : ""
      }&to=${toDate ? toDate : ""}`;
      axios(url)
        .then(response => {
          if (response.data.status) {
            commit("updateMessages", {
              access: response.data.actions,
              messages: response.data.messages
            });
          } else {
            notify("error", response.data.text);
          }
        })
        .catch(err => {
          notify("error", err.message ? err.message : "Произошла ошибка!");
        });
    },
    getTargets({ commit }) {
      axios("/message/get-targets")
        .then(response => {
          if (response.data.status) {
            commit("updateTargets", { targets: response.data.targets });
          } else {
            notify("error", response.data.text);
          }
        })
        .catch(err => {
          notify("error", err.message ? err.message : "Произошла ошибка!");
        });
    }
  }
};
