<template>
  <b-navbar fixed="top" toggleable="md" type="light" variant="light">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <menu-component :links="navigationLinks" />
  </b-navbar>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import bNavbar from "bootstrap-vue/es/components/navbar/navbar";
import bNavbarToggle from "bootstrap-vue/es/components/navbar/navbar-toggle";
import Menu from "./Menu";

export default {
  props: {
    notify: {
      type: Function,
      required: true
    }
  },
  computed: {
    ...mapGetters(["navigationLinks"])
  },
  created() {
    this.getNavigationLinks();
  },
  components: {
    "b-navbar": bNavbar,
    "b-navbar-toggle": bNavbarToggle,
    "menu-component": Menu
  },
  methods: {
    ...mapActions(["getNavigationLinks"])
  }
};
</script>
