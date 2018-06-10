<template>
  <b-collapse is-nav id="nav_collapse">
    <ul id="nav-links" class="navbar-nav mr-auto">
      <li class="nav-item" v-if="loading">
        <span class="navbar-text">Загружаем панель навигации...</span>
      </li>
      <li class="nav-item" v-for="link in links" :key="link.id">
        <router-link  class="nav-link" :title="link.title" :to="link.url"><span :class="link.classes"></span></router-link>
      </li>
      <li class="nav-item"><a class="nav-link" href="#" @click.stop="handleLogout"><span aria-hidden="true" class="fa fa-sign-out" title="Выход"></span></a></li>
    </ul>
  </b-collapse>
</template>

<script>
import bCollapse from "bootstrap-vue/es/components/collapse/collapse";

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
    "b-collapse": bCollapse
  },
  methods: {
    handleLogout() {
      this.$emit("site-logout");
    }
  }
};
</script>
