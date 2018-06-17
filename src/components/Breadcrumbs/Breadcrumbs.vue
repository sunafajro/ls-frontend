<template>
  <b-breadcrumb :items="links"/>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import bBreadcrumb from "bootstrap-vue/es/components/breadcrumb/breadcrumb";

export default {
  props: {
    path: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters(["getBreadcrumbByRoute"]),
    links() {
      return this.getBreadcrumbByRoute(this.path);
    }
  },
  created() {
    this.getBreadcrumbsLinks();
  },
  components: {
    "b-breadcrumb": bBreadcrumb
  },
  methods: {
    ...mapActions(["getBreadcrumbsLinks"])
  }
};
</script>
