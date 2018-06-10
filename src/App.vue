<template>
  <div>
    <nav-component v-if="!isGuest" :notify="notify"/>
    <b-container fluid>
      <router-view :notify="notify" />
    </b-container>
  </div>
</template>

<script>
import bContainer from "bootstrap-vue/es/components/layout/container";
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
    "b-container": bContainer,
    "nav-component": Navigation
  }
};
</script>
