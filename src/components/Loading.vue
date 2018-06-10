<template>
  <b-container fluid>
    <b-alert show variant="warning">Загрузка приложения...</b-alert>
  </b-container>
</template>

<script>
import bAlert from "bootstrap-vue/es/components/alert/alert";
import bContainer from "bootstrap-vue/es/components/layout/container";

export default {
  components: {
    "b-alert": bAlert,
    "b-container": bContainer
  }
};
</script>
