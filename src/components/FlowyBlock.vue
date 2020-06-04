<template lang="html">
  <div class="flowy-block mr-24px relative">
    <slot></slot>
    <component
      :is="component"
      v-bind="{ ...$props, ...$attrs, ...passedProps }"
      ref="block"
    />
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */

export default {
  props: {
    node: {
      type: Object,
      required: true,
    },
    remove: {
      type: Function,
      required: true,
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
  computed: {
    component() {
      return this.node.nodeComponent;
      // return find(this.blocks, { name: this.node.block }).name;
    },
    passedProps() {
      return this.node.data;
    },
  },
  methods: {
    onDragEnd(_event) {

    },
    onDragStart(_event) {

    },
  },
  render(c) {
    const item = this.$scopedSlots.default()[0];
    return item;
  },
};
</script>
