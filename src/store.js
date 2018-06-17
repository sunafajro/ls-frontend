import Vue from "vue";
import Vuex from "vuex";
import { appModule } from "./store/app";
import { breadcrumbsModule } from "./store/breadcrumbs";
import { navigationModule } from "./store/navigation";
import { messagesModule } from "./store/messages";
import { usersModule } from "./store/users";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app: appModule,
    breadcrumbs: breadcrumbsModule,
    navigation: navigationModule,
    messages: messagesModule,
    users: usersModule
  }
});
