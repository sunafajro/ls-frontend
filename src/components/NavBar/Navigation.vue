<template>
  <b-navbar fixed="top" toggleable="md" type="light" variant="light">
  <!--<nav id="top-nav" class="navbar navbar-expand-lg navbar-light bg-light">-->
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <menu-component :links="links" :loading="loading" />
  <!--</nav>-->
  </b-navbar>
</template>

<script>
import bNavbar from "bootstrap-vue/es/components/navbar/navbar";
import bNavbarToggle from "bootstrap-vue/es/components/navbar/navbar-toggle";
import axios from "axios";
import Menu from "./Menu";

export default {
  props: {
    notify: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      loading: true,
      links: []
    };
  },
  created() {
    this.getNavLinks();
  },
  components: {
    "b-navbar": bNavbar,
    "b-navbar-toggle": bNavbarToggle,
    "menu-component": Menu
  },
  methods: {
    getNavLinks() {
      axios
        .get("/site/csrf")
        .then(response => {
          let data = { ...response.data };
          axios
            .post("/site/nav", JSON.stringify(data), {
              headers: { "Content-Type": "application/json" }
            })
            .then(response => {
              this.links = response.data.navElements;
              this.loading = false;
            })
            .catch(err => {
              this.notify(
                "error",
                err.message ? err.message : "Произошла ошибка!"
              );
            });
        })
        .catch(err => {
          this.notify("error", err.message ? err.message : "Произошла ошибка!");
        });
    }
  }
};
</script>
