<template>
  <b-row>
    <b-col sm="12" md="2" lg="2" xl="2">
      <info-component :notify="notify" />
      <div v-if="access.create">
        <h4>Действия:</h4>
        <b-button block="true" variant="success" @click="openModal">
          <span class="fa fa-plus" aria-hidden="true"></span> Добавить
        </b-button>
      </div>
    </b-col>
    <b-col sm="10" md="2" lg="2" xl="2">
      <list-component :messages="messages" />
    </b-col>
  </b-row>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import moment from "moment";
import bButton from "bootstrap-vue/es/components/button/button";
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
        type: "all",
        fromDate: moment()
          .startOf("month")
          .format("YYYY-MM-DD HH:mm:ss"),
        toDate: moment()
          .endOf("month")
          .format("YYYY-MM-DD HH:mm:ss")
      }
    };
  },
  computed: {
    ...mapGetters({
      access: "getAccess",
      messages: "getMessages",
      targets: "getTargets"
    })
  },
  created() {
    this.getMessages(this.filter);
    this.getTargets();
  },
  components: {
    "b-button": bButton,
    "b-col": bCol,
    "b-row": bRow,
    //"filter-component": Filter,
    "info-component": Info,
    "list-component": List
    //"modal-component": Modal
  },
  methods: {
    ...mapActions(["getMessages", "getTargets"]),
    openModal() {}
  }
};
</script>
