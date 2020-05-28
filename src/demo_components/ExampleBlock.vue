<template lang="html">
  <div class="example-block bg-white">
    example block
    <div> {{ title }}</div>
  </div>
</template>

<style lang="scss">
  .example-block {
    width: 320px;
    height: 120px;
  }
  .bg-white {
    background-color: #ffffff;
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
