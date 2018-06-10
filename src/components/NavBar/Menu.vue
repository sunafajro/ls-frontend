<template>
  <b-collapse is-nav id="nav_collapse">
    <b-navbar-nav>
      <b-nav-text v-if="loading">
        <span class="navbar-text">Загружаем панель навигации...</span>
      </b-nav-text>
      <b-nav-item v-for="link in links" :key="link.id" v-if="!loading">
        <router-link  class="nav-link" :title="link.title" :to="link.url"><span :class="link.classes"></span></router-link>
      </b-nav-item>
      <b-nav-item><a class="nav-link" href="#" @click.stop="getLogout" v-if="!loading"><span aria-hidden="true" class="fa fa-sign-out" title="Выход"></span></a></b-nav-item>
    </b-navbar-nav>
  </b-collapse>
</template>

<script>
import { mapActions } from "vuex";
import bCollapse from "bootstrap-vue/es/components/collapse/collapse";
import bNavbarNav from "bootstrap-vue/es/components/navbar/navbar-nav";
import bNavItem from "bootstrap-vue/es/components/nav/nav-item";
import bNavText from "bootstrap-vue/es/components/nav/nav-text";

export default {
  props: {
    links: {
      type: Array,
      required: true
    },
    loading: {
      type: Boolean,
      required: true
    }
  },
  components: {
    "b-collapse": bCollapse,
    "b-navbar-nav": bNavbarNav,
    "b-nav-item": bNavItem,
    "b-nav-text": bNavText
  },
  methods: {
    ...mapActions(["getLogout"])
  }
};
</script>
