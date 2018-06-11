import Vue from "vue";
import Vuex from "vuex";
import { appModule } from "./store/app";
import { messagesModule } from "./store/messages";
import { usersModule } from "./store/users";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app: appModule,
    messages: messagesModule,
    users: usersModule
  }
});
