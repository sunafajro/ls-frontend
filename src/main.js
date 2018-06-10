import Vue from "vue";
import Noty from "noty";
import { mapActions } from "vuex";
import BootstrapVue from "bootstrap-vue";
import App from "./App.vue";
import Loading from "./components/Loading.vue";
import router from "./router";
import store from "./store";
import "./app.css";
import "font-awesome/css/font-awesome.css";
import "noty/lib/themes/bootstrap-v4.css";
import "noty/lib/noty.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  console.log(store.getters.isGuest);
  if (store.getters.isGuest && to.path !== "/login") {
    next("/login");
  }
  if (!store.getters.isGuest && to.path === "/login") {
    next("/");
  }
  next();
});

new Vue({
  computed: {
    isLoaded() {
      return this.$store.getters.isLoaded;
    }
  },
  created() {
    this.getUserState();
  },
  router,
  store,
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
    if (this.isLoaded) {
      return h(App, {
        props: {
          notify: this.notify
        }
      });
    } else {
      return h(Loading);
    }
  }
}).$mount("#app");
