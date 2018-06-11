<template>
  <div id="content" class="col-sm-10">
    <list-component :messages="messages" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import moment from "moment";
import List from "./List";

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
    //"filter-component": Filter,
    //"info-component": Info,
    "list-component": List
    //"modal-component": Modal
  },
  methods: {
    ...mapActions(["getMessages", "getTargets"])
  }
};
</script>
