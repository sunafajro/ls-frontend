import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Messages from "./components/Messages/List.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      props: true
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      props: true
    },
    {
      path: "/messages",
      name: "messages",
      component: Messages,
      props: true
    }
  ]
});
