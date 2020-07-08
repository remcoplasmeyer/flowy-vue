import Vue from 'vue';

export default Vue.extend({
  name: 'FlowyDragHandle',

  render(h) {
    return h('div', {
      staticClass: 'flowy-drag-handle',
    }, this.$slots.default);
  },
});
