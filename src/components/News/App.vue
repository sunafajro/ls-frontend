<template>
  <b-row>
    <b-col sm="12" md="2" lg="2" xl="2">
      <info-component :notify="notify" />
    </b-col>
    <b-col sm="12" md="10" lg="10" xl="10">
      <list-component :news="news" />
    </b-col>
  </b-row>
</template>

<script>
import moment from "moment";
import { mapActions, mapGetters } from "vuex";
import bCol from "bootstrap-vue/es/components/layout/col";
import bRow from "bootstrap-vue/es/components/layout/row";
import Info from "../Info.vue";
import List from "./List.vue";

moment.locale("ru");

export default {
  props: {
    notify: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      filter: {
        month: moment().format("M")
      }
    };
  },
  computed: {
    ...mapGetters({
      access: "access",
      news: "news"
    })
  },
  created() {
    this.getNews(this.filter);
  },
  components: {
    "b-col": bCol,
    "b-row": bRow,
    "info-component": Info,
    "list-component": List
  },
  methods: {
    ...mapActions(["getNews"])
  }
};
</script>
