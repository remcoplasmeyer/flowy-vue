<template lang="html">
  <div class="block">
    example block
    <div> {{ title }}</div>
  </div>
</template>

<style lang="scss" scoped>
.block {
  width: 320px;
}
</style>

<script>
/* eslint-disable no-unused-vars */

export default {
  props: {
    title: {
      type: String,
      required: false,
    },
  },
  data() {
    return {

    };
  },
  mounted() {

  },
  destroyed() {

  },
  methods: {

  },
};
</script>
