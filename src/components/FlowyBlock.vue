<template lang='html'>
  <div class='flowy-block mr-24px relative'>
    <slot />

    <component
      :is='component'
      v-bind='{ ...$props, ...$attrs, ...passedProps }'
      ref='block'
    />
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */

export default {
  name: 'FlowyBlock',

  props: {
    node: {
      type: Object,
      required: true,
    },

    remove: {
      type: Function,
      required: true,
    },

    nodeComponent: Object,
  },

  computed: {
    component() {
      const { nodeComponent } = this.node;
      // If component exists in dataset, use it - if not, use prop
      return nodeComponent || this.nodeComponent;
    },

    passedProps() {
      return this.node.data;
    },
  },

  render(c) {
    const item = this.$scopedSlots.default()[0];
    return item;
  },
};
</script>
