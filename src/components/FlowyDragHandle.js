import Vue from 'vue';

export default Vue.extend({
  name: 'FlowyDragHandle',

  render(h) {
    const node = this.$slots.default[0];
    if (!node.data.staticClass) {
      node.data.staticClass = '';
    }
    node.data.staticClass += ' flowy-drag-handle';

    return h(node.tag, node.data, node.children);
  },
});
