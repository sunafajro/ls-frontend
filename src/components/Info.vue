<template>
  <b-card>
    <small>{{userInfo.userName}}</small><br />
    <small>{{userInfo.role.name}}</small>
  </b-card>
</template>

<script>
import bCard from "bootstrap-vue/es/components/card/card";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["userInfo"])
  },
  components: {
    "b-card": bCard
  }
};
</script>
