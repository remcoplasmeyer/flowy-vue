<template lang="html">
  <div class="example-block p-2 bg-white mb-4 rounded border border-gray-300"
  :style="{ width: `${width}px`} ">
    <div class="flex flex-row flex-no-wrap ml-2">
      <div class="flex-none flex
       flex-row flex-no-wrap items-start justify-start" style="width:60px;">
        <flowy-drag-handle>
          <div class="flex-none mt-2 mr-2">
            <img src="demo_assets/grabme.svg" style="width: 10px;">
          </div>
        </flowy-drag-handle>
        <div class="flex-grow bg-blue-100 p-1 ml-2 mr-2 rounded">
          <img :src="`demo_assets/${icon}.svg`">
        </div>
      </div>
      <div class="flex-grow flex flex-col ml-2">
        <div class="font-bold text-base text-gray-800">
          {{ title }}
        </div>
        <div class="text-xs text-gray-600">
          {{ description }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.example-block {
  width: auto;
}
.bg-white {
  background-color: #ffffff;
}
</style>

<script>
/* eslint-disable no-unused-vars */

export default {
  props: {
    width: {
      default: 320,
    },
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    remove: {
      type: Function,
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
