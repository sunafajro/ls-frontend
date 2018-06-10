import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import Noty from "noty";

Vue.use(Vuex);

const notify = (type, text) => {
  new Noty({
    theme: "bootstrap-v4",
    text: text,
    type: type,
    timeout: 3000,
    progressBar: false
  }).show();
};

export default new Vuex.Store({
  state: {
    app: {
      isLoaded: false
    },
    user: {
      id: 0,
      loggedIn: false,
      role: {
        id: 0,
        name: "guest"
      },
      homeUrl: "/",
      userName: "guest"
    }
  },
  getters: {
    appLoaded(state) {
      return state.app.isLoaded;
    },
    userHomeUrl(state) {
      return state.user.homeUrl;
    },
    userIsGuest(state) {
      return !state.user.loggedIn;
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
          if (response.data.status === true) {
            const user = {
              id: response.data.id,
              loggedIn: response.data.loggedIn,
              role: response.data.role,
              homeUrl: response.data.url,
              userName: response.data.userName
            };
            commit("updateUserState", user);
          } else {
            console.log("ошибка получения состояния");
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getLogin({ commit }, payload) {
      axios
        .get("/site/csrf")
        .then(response => {
          let data = { ...response.data };
          const { password, username } = payload.credentials;
          data.LoginForm = {
            username: username,
            password: password
          };
          axios
            .post("/site/login", JSON.stringify(data), {
              headers: { "Content-Type": "application/json" }
            })
            .then(response => {
              if (response.data.status === true) {
                const user = {
                  id: response.data.id,
                  loggedIn: response.data.loggedIn,
                  role: response.data.role,
                  homeUrl: response.data.url,
                  userName: response.data.userName
                };
                notify("success", response.data.text);
                commit("updateUserState", user);
              } else {
                notify("error", response.data.text);
              }
            })
            .catch(err => {
              this.notify(
                "error",
                err.message ? err.message : "Произошла ошибка!"
              );
            });
        })
        .catch(err => {
          this.notify("error", err.message ? err.message : "Произошла ошибка!");
        });
    },
    getLogout({ commit }) {
      axios
        .get("/site/csrf")
        .then(response => {
          let data = { ...response.data };
          axios
            .post("/site/logout", JSON.stringify(data), {
              headers: { "Content-Type": "application/json" }
            })
            .then(response => {
              if (response.data.status === true) {
                const user = {
                  id: response.data.id,
                  loggedIn: response.data.loggedIn,
                  role: response.data.role,
                  homeUrl: response.data.url,
                  userName: response.data.userName
                };
                notify("success", response.data.text);
                commit("updateUserState", user);
              } else {
                notify("error", response.data.text);
              }
            })
            .catch(err => {
              notify("error", err.message ? err.message : "Произошла ошибка!");
            });
        })
        .catch(err => {
          notify("error", err.message ? err.message : "Произошла ошибка!");
        });
    }
  }
});
