<script>
export default {
  render(c) {
    let item = this.$scopedSlots.default()[0];
    if (item.tag === undefined) {
      item = c('span', {}, [item]);
    }
    const data = item.data || {};
    data.class = {
      ...data.class,
      [this.$draggable.options.draggableClass]: true,
      [this.$draggable.options.dragHandleClass]: this.$attrs['with-handle'] === true,
    };
    item.data = data;

    data.attrs = {
      ...data.attrs,
      'data-draggable-mirror': JSON.stringify(this.$attrs['draggable-mirror']),
    };
    return item;
  },
};
</script>
