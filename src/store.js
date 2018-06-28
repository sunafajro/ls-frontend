import Vue from "vue";
import Vuex from "vuex";
import { appModule } from "./store/app";
import { breadcrumbsModule } from "./store/breadcrumbs";
import { messagesModule } from "./store/messages";
import { navigationModule } from "./store/navigation";
import { newsModule } from "./store/news";
import { usersModule } from "./store/users";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app: appModule,
    breadcrumbs: breadcrumbsModule,
    messages: messagesModule,
    navigation: navigationModule,
    news: newsModule,
    users: usersModule
  }
});
