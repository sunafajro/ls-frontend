<template>
  <b-breadcrumb :items="getItems"/>
</template>

<script>
import bBreadcrumb from "bootstrap-vue/es/components/breadcrumb/breadcrumb";
import { RoutesData } from "./RoutesData.js";

export default {
  props: {
    path: {
      type: Array,
      required: true
    }
  },
  computed: {
    getItems() {
      const bc = [];
      if (RoutesData[this.path[0]] && this.path[0]) {
        bc.push({
          text: RoutesData[this.path[0]].title,
          to: RoutesData[this.path[0]].path
        });
        if (RoutesData[this.path[0]].children && this.path[1]) {
          bc.push({
            text: RoutesData[this.path[0]].children[this.path[1]].title,
            to: RoutesData[this.path[0]].children[this.path[1]].path
          });
        }
      }
      return bc;
    }
  },
  components: {
    "b-breadcrumb": bBreadcrumb
  }
};
</script>
