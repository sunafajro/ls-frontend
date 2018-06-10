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
      userName: "guest",
      role: {
        id: 0,
        name: "guest"
      }
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
          if (response.data.status === true) {
            const user = {
              id: response.data.id,
              loggedIn: response.data.loggedIn,
              userName: response.data.userName,
              role: response.data.role
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
                  userName: response.data.userName,
                  role: response.data.role
                };
                notify("success", response.data.text);
                commit("updateUserState", user);
                //this.$router.push(response.data.url);
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
    }
  }
});
