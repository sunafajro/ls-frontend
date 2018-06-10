import Vue from "vue";
import Noty from "noty";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import App from "./App.vue";
import Loading from "./components/Loading.vue";
import router from "./router";
import store from "./store";
import "font-awesome/css/font-awesome.css";
import "noty/lib/themes/bootstrap-v4.css";
import "noty/lib/noty.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./app.css";

Vue.config.productionTip = false;

// router.beforeEach((to, from, next) => {
//   if (store.getters.isLoaded) {
//     if (store.getters.isGuest && to.path !== "/login") {
//       next("/login");
//     }
//     if (!store.getters.isGuest && to.path === "/login") {
//       next("/");
//     }
//   } else {
//     next(false);
//   }
// });

new Vue({
  computed: {
    ...mapGetters(["appLoaded", "userHomeUrl", "userIsGuest"])
  },
  created() {
    this.getUserState();
  },
  methods: {
    ...mapActions(["getUserState"]),
    notify(type, text) {
      new Noty({
        theme: "bootstrap-v4",
        text: text,
        type: type,
        timeout: 3000,
        progressBar: false
      }).show();
    }
  },
  render(h) {
    if (this.appLoaded) {
      return h(App, {
        props: {
          notify: this.notify
        }
      });
    } else {
      return h(Loading);
    }
  },
  router,
  store,
  watch: {
    appLoaded(value) {
      if (value && this.userIsGuest && this.$route.path !== "/login") {
        this.$router.push("/login");
      }
      if (value && !this.userIsGuest && this.$route.path === "/login") {
        this.$router.push(this.userHomeUrl);
      }
    },
    userIsGuest(value) {
      if (value && this.appLoaded && this.$route.path !== "/login") {
        this.$router.push("/login");
      }
      if (!value && this.appLoaded && this.$route.path === "/login") {
        this.$router.push(this.userHomeUrl);
      }
    }
  }
}).$mount("#app");
