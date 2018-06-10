<template>
  <div class="wrapper">
    <nav-component :notify="notify" v-if="!userIsGuest" />
    <b-container fluid>
      <bc-component :path="getPath" v-if="!userIsGuest" />
      <router-view :notify="notify" />
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import bContainer from "bootstrap-vue/es/components/layout/container";
import Navigation from "./components/NavBar/Navigation";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs.vue";

export default {
  props: {
    notify: {
      type: Function,
      required: true
    }
  },
  computed: {
    ...mapGetters(["userIsGuest"]),
    getPath() {
      const path = this.$route.path.split("/");
      path[0] = "home";
      return path;
    }
  },
  components: {
    "b-container": bContainer,
    "bc-component": Breadcrumbs,
    "nav-component": Navigation
  }
};
</script>
