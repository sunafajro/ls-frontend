<template>
  <b-collapse is-nav id="nav_collapse">
    <b-navbar-nav>
      <b-nav-item v-for="link in links" :key="link.id">
        <router-link  class="nav-link" :title="link.title" :to="link.url"><span aria-hidden="true" :class="link.classes"></span></router-link>
      </b-nav-item>
      <b-nav-item><a class="nav-link" href="#" @click.stop="getLogout"><span aria-hidden="true" class="fa fa-sign-out" title="Выход"></span></a></b-nav-item>
    </b-navbar-nav>
  </b-collapse>
</template>

<script>
import { mapActions } from "vuex";
import bCollapse from "bootstrap-vue/es/components/collapse/collapse";
import bNavbarNav from "bootstrap-vue/es/components/navbar/navbar-nav";
import bNavItem from "bootstrap-vue/es/components/nav/nav-item";

export default {
  props: {
    links: {
      type: Array,
      required: true
    }
  },
  components: {
    "b-collapse": bCollapse,
    "b-navbar-nav": bNavbarNav,
    "b-nav-item": bNavItem
  },
  methods: {
    ...mapActions(["getLogout"])
  }
};
</script>
