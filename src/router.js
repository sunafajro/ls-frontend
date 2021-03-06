import Vue from "vue";
import Router from "vue-router";
import Login from "./components/Login.vue";
import Messages from "./components/Messages/App.vue";
import News from "./components/News/App.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/news"
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
    },
    {
      path: "/news",
      name: "news",
      component: News,
      props: true
    }
  ]
});
