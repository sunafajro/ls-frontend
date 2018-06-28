<template>
  <div>
    <b-card v-for="n in news" :key="n.id" :title="n.subject" :sub-title="n.author">
      <p class="card-text" v-html="n.description"></p>
    </b-card>
  </div>
</template>

<script>
import bCard from "bootstrap-vue/es/components/card/card";

export default {
  props: {
    news: {
      type: Array,
      required: true
    }
  },
  components: {
    "b-card": bCard
  }
};
</script>
