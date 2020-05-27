<script>
/* eslint-disable no-underscore-dangle */
import VueDragStart from '../events/VueDragStart';

export default {
  props: ['group'],
  mounted() {
    this.$draggable.on('drag:start', this.onDragStart);
  },
  destroyed() {
    this.$draggable.off('drag:start', this.onDragStart);
  },
  methods: {
    getDraggable(event) {
      return event.originalEvent.target.closest(
        `.${this.$draggable.options.draggableClass}`,
      );
    },
    onDragStart(_event) {
      const event = _event;
      // handles scrollable content in draggable div
      const shouldIgnore = this.$draggable.options.ignoreHandleClassList.some(
        (className) => event.sensorEvent.target.classList.contains(className),
      );
      if (shouldIgnore) {
        event.cancel();
        return;
      }

      // Handles nested draggables
      if (this.$el !== this.getDraggable(event)) {
        return;
      }

      // We cannot drag into inputs
      if (event.originalEvent.target.tagName === 'INPUT') {
        event.cancel();
        return;
      }

      this.$draggable.trigger(
        new VueDragStart({
          ...event.data,
          sourceComponent: this,
        }),
      );

      event.source._source = {
        oldComponent: this,
      };
    },
  },
  render(c) {
    let item = this.$scopedSlots.default()[0];
    if (item.tag === undefined) {
      item = c('span', {}, [item]);
    }
    const data = item.data || {};
    data.class = {
      ...data.class,
      [this.$draggable.options.draggableClass]: true,
      [this.$draggable.options.dragHandleClass]:
        this.$attrs['with-handle'] === true,
    };
    data.attrs = {
      ...data.attrs,
      'data-draggable-mirror': JSON.stringify(this.$attrs['draggable-mirror']),
    };
    item.data = data;
    return item;
  },
};
</script>
