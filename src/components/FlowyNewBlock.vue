<template lang="html">
  <div class="flowy-block mr-24px relative">
    <draggable
        :with-handle="false"
        :draggable-mirror="{ xAxis: false, appendTo: 'body' }"
        group="flowy"
        @start="onStart(nodeData)"
        @stop="onStop(nodeData)"
        :data="{ type: 'new', ...nodeData }"
      >
      <slot name="preview"></slot>
    </draggable>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */

export default {
  props: {

  },
  data() {
    return {
      node: {
        componentName: '',
        props: {},
      },
    };
  },
  mounted() {
    const node = this.$scopedSlots.node()[0];
    this.node.componentName = node.componentOptions.tag;
    this.node.props = {
      ...node.componentOptions.propsData,
      ...node.data.attrs,
    };
  },
  destroyed() {

  },
  computed: {
    nodeData() {
      return this.node;
    },
  },
  methods: {
    onStart(data) {
      this.$emit('drag-start', data);
    },
    onStop(data) {
      this.$emit('drag-stop', data);
    },
  },
};
</script>
