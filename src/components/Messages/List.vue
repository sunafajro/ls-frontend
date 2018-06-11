<template>
  <div>
    <div :class="{ 'panel': true, 'panel-info': message.direction == 'out', 'panel-warning': message.direction == 'in' }" v-for="message in messages" :key="message.id">
      <div class="panel-heading">
        <h3 class="panel-title">{{ message.date | moment }} :: {{ message.sender }} <i class="fa fa-angle-double-right" aria-hidden="true"></i> {{ message.target_id === '5' || message.target_id === '13' ? message.receiver : message.target }}</h3>
      </div>
      <div class="panel-body">
        <b>{{ message.title }}</b>
        <div v-html="message.body"></div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

moment.locale("ru");

export default {
  props: {
    messages: {
      type: Array,
      required: true
    }
  },
  filters: {
    moment(date) {
      return moment(date).format("DD.MM.YYYY");
    }
  }
};
</script>
