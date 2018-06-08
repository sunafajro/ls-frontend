import Vue from "vue";
import Noty from "noty";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "font-awesome/css/font-awesome.css";
import "noty/lib/themes/bootstrap-v4.css";
import "noty/lib/noty.css";
import "bootstrap/dist/css/bootstrap.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  methods: {
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
    return h(App, {
      props: {
        notify: this.notify
      }
    });
  }
}).$mount("#app");
