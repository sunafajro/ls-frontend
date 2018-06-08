<template>
  <div id="top-nav-collapse" class="collapse navbar-collapse">
    <ul id="nav-links" class="navbar-nav mr-auto">
      <li class="nav-item" v-if="loading">
        <span class="navbar-text">Загружаем панель навигации...</span>
      </li>
      <li class="nav-item" v-for="link in links" :key="link.id">
        <a class="nav-link" :href="link.url" :title="link.title"><span :class="link.classes"></span></a>
      </li>
      <li class="nav-item"><a class="nav-link" href="#" @click.stop="handleLogout"><span aria-hidden="true" class="fa fa-sign-out" title="Выход"></span></a></li>
    </ul>
  </div>
</template>

<script>
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
  methods: {
    handleLogout() {
      this.$emit("site-logout");
    }
  }
};
</script>
