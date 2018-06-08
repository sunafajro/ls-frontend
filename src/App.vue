<template>
  <div id="app">
    <nav-component v-if="!isGuest" :notify="notify"/>
    <router-view :notify="notify" />
  </div>
</template>

<script>
import Navigation from "./components/NavBar/Navigation";
export default {
  props: {
    notify: {
      type: Function,
      required: true
    }
  },
  computed: {
    isGuest() {
      return this.$store.getters.isGuest;
    }
  },
  components: {
    "nav-component": Navigation
  }
};
</script>
