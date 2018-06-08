<template>
  <div id="app">
    <nav-component :notify="notify"/>
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
  components: {
    "nav-component": Navigation
  }
};
</script>
