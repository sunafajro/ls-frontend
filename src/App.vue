<template>
  <div>
    <nav-component v-if="!isGuest" :notify="notify"/>
    <b-container fluid>
      <router-view :notify="notify" />
    </b-container>
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
