<template>
  <nav id="top-nav" class="navbar navbar-expand-lg navbar-light bg-light">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#top-nav-collapse">
      <span class="navbar-toggler-icon"></span>
    </button>
    <menu-component :links="links" :loading="loading" @site-logout="logout" />
  </nav>
</template>

<script>
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
    },
    logout() {
      axios
        .get("/site/csrf")
        .then(response => {
          let data = { ...response.data };
          axios
            .post("/site/logout", JSON.stringify(data), {
              headers: { "Content-Type": "application/json" }
            })
            .then(response => {
              if (response.data.status === true) {
                this.notify("success", response.data.text);
                window.location.replace("/");
              }
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
