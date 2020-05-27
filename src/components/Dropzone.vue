<script>
/* eslint-disable no-underscore-dangle */
export default {
  props: ['data', 'group'],
  data() {
    return {
      over: false,
      active: false,
    };
  },
  mounted() {
    this.$draggable.on('vue:drag:start', this.onDragStart)
      .on('drag:move', this.onDragMove)
      .on('drag:stop', this.onDragStop);
  },
  destroyed() {
    this.$draggable.off('vue:drag:start', this.onDragStart)
      .off('drag:move', this.onDragMove)
      .off('drag:stop', this.onDragStop);
  },
  methods: {
    onDragStart(event) {
      // TODO: solve event listener order of execution by dispatching new events
      // instead of this hack
      const sourceGroup = event.sourceComponent.group;

      if (Array.isArray(this.group)
        ? this.group.includes(sourceGroup) : sourceGroup === this.group) {
        this.active = true;
      }
    },
    onDragMove(_event) {
      const event = _event;
      if (!event.source._source) {
        return;
      }
      const { target } = event.sensorEvent;

      if (target === this.$el || (this.$el.contains(target) && this.sameGroup(event))) {
        if (this.over === false) {
          event.source._source.newComponent = this;
          this.$emit('enter');
        }
        this.over = true;
      } else {
        if (this.over === true) {
          event.source._source.newComponent = null;
          this.$emit('leave');
        }
        this.over = false;
      }
    },
    onDragStop(event) {
      if (!event.source._source) {
        return false;
      }

      this.active = false;
      if (!this.over) {
        return true;
      }
      this.over = false;

      this.$emit('receive', event.source._source);
      event.source._source.oldComponent.$emit('drop', {
        ...event.source._source,
        data: this.data,
      });

      return true;
    },
    sameGroup(event) {
      const sourceGroup = event.source._source.oldComponent.group;
      return Array.isArray(this.group)
        ? this.group.includes(sourceGroup) : sourceGroup === this.group;
    },
  },
  render() {
    if (this.$scopedSlots.default) {
      return this.$scopedSlots.default({
        over: this.over,
        active: this.active,
      });
    }

    return this.$scopedSlots.default()[0];
  },
};
</script>
