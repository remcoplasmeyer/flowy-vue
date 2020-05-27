<script>
/* eslint-disable no-underscore-dangle */
import VueDragStart from '../events/VueDragStart';

function index(element) {
  return Array.prototype.indexOf.call(element.parentNode.children, element);
}

function moveInsideEmptyContainer(source, overContainer) {
  const oldContainer = source.parentNode;

  overContainer.appendChild(source);

  return { oldContainer, newContainer: overContainer };
}

function moveWithinContainer(source, over) {
  const oldIndex = index(source);
  const newIndex = index(over);

  if (oldIndex < newIndex) {
    source.parentNode.insertBefore(source, over.nextElementSibling);
  } else {
    source.parentNode.insertBefore(source, over);
  }

  return { oldContainer: source.parentNode, newContainer: source.parentNode };
}

function moveOutsideContainer(source, over, overContainer) {
  const oldContainer = source.parentNode;

  if (over) {
    over.parentNode.insertBefore(source, over);
  } else {
    // need to figure out proper position
    overContainer.appendChild(source);
  }

  return { oldContainer, newContainer: source.parentNode };
}

function move({
  source, over, overContainer, children,
}) {
  const emptyOverContainer = !children.length;
  const differentContainer = source.parentNode !== overContainer;
  const sameContainer = over && !differentContainer;

  if (emptyOverContainer) {
    return moveInsideEmptyContainer(source, overContainer);
  } if (sameContainer) {
    return moveWithinContainer(source, over);
  } if (differentContainer) {
    return moveOutsideContainer(source, over, overContainer);
  }
  return null;
}

function moveArray(items, oldIndex, newIndex) {
  const itemRemovedArray = [
    ...items.slice(0, oldIndex),
    ...items.slice(oldIndex + 1, items.length),
  ];
  return [
    ...itemRemovedArray.slice(0, newIndex),
    items[oldIndex],
    ...itemRemovedArray.slice(newIndex, itemRemovedArray.length),
  ];
}

export default {
  props: {
    value: {
      default: () => [],
      type: Array,
    },
    group: {
      type: String,
      default: 'defaultGroup',
    },
    preventReceive: {
      type: Boolean,
      default: false,
    },
    enabled: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    this.init();
  },
  destroyed() {
    this.breakdown();
  },
  watch: {
    enabled(val) {
      if (val) {
        console.log('reeanbling');
        this.breakdown();
        this.init();
      }
    },
  },
  methods: {
    init() {
      if (this.enabled) {
        this.$draggable.addContainer(this.$el);
        this.$draggable
          .on('drag:start', this.onDragStart)
          .on('drag:over:container', this.onDragOverContainer)
          .on('drag:out:container', this.onDragOutContainer)
          .on('drag:over', this.onDragOver)
          .on('drag:stop', this.onDragStop);
      } else {
        // this.breakdown();
      }
    },
    breakdown() {
      this.$draggable.removeContainer(this.$el);
      this.$draggable
        .off('drag:start', this.onDragStart)
        .off('drag:over:container', this.onDragOverContainer)
        .off('drag:out:container', this.onDragOutContainer)
        .off('drag:over', this.onDragOver)
        .off('drag:stop', this.onDragStop);
    },
    shouldIgnore(e) {
      if (e.oldComponent.group !== this.group) {
        return true;
      }

      if (
        e.oldComponent.value === this.value
        && e.oldComponent.$el !== this.$el
      ) {
        return true;
      }

      if (this.preventReceive) {
        return true;
      }
      return false;
    },
    getDraggableElementsForContainer(container) {
      return [...container.children].filter((childElement) => (
        childElement !== this.$draggable.originalSource
          && childElement !== this.$draggable.mirror
      ));
    },
    index(element) {
      return this.getDraggableElementsForContainer(element.parentNode).indexOf(
        element,
      );
    },
    onDragStart(_event) {
      const event = _event;
      this.$emit('start');
      if (event.originalEvent.target.tagName === 'INPUT') {
        event.cancel();
        return;
      }

      if (event.sourceContainer !== this.$el) {
        return;
      }
      // console.log(`setting source`, JSON.stringify(this.value), this.$el);

      const oldIndex = this.index(event.source);

      this.$draggable.trigger(
        new VueDragStart({
          ...event.data,
          sourceComponent: this,
        }),
      );

      event.source._source = {
        oldComponent: this,
        oldIndex,
        item: this.value[oldIndex],
      };
    },
    onDragOverContainer(event) {
      const { source, over, overContainer } = event;
      if (overContainer !== this.$el) {
        return;
      }
      if (!event.source._source) {
        return;
      }

      const e = event.source._source;
      e.newComponent = this;

      if (this.shouldIgnore(e)) {
        return;
      }

      const children = this.getDraggableElementsForContainer(overContainer);

      move({
        source, over, overContainer, children,
      });
    },
    onDragOutContainer(event) {
      const { source } = event;

      if (!event.source._source) {
        return;
      }

      const e = event.source._source;
      e.newComponent = null;

      if (this.shouldIgnore(e)) {
        return;
      }

      const overContainer = e.oldComponent.$el;
      const children = this.getDraggableElementsForContainer(overContainer);
      const over = children[event.source._source.oldIndex];

      // console.log('outMove', over)
      move({
        source, over, overContainer, children,
      });
    },
    onDragOver(event) {
      if (!event.source._source) {
        return;
      }

      const { source, over, overContainer } = event;

      if (over === event.originalSource || over === source) {
        return;
      }

      if (overContainer !== this.$el) {
        return;
      }

      if (![...this.$el.children].find((child) => child === over)) {
        return;
      }

      const e = source._source;
      e.newComponent = this;

      if (this.shouldIgnore(e)) {
        return;
      }

      const children = this.getDraggableElementsForContainer(overContainer);
      // console.log('overMove', over)

      move({
        source, over, overContainer, children,
      });
    },
    onDragStop(event) {
      if (!event.source._source) {
        return;
      }

      const e = event.source._source;

      const belongToSameGroup = e.newComponent
        && this.group === e.oldComponent.group
        && e.oldComponent.group === e.newComponent.group;

      if (!belongToSameGroup) {
        return;
      }

      const sendingOrReceivingElement = e.newComponent === this || e.oldComponent === this;

      if (!sendingOrReceivingElement) {
        return;
      }

      if (e.newComponent.preventReceive) {
        return;
      }

      e.newIndex = this.index(event.source);

      const sameContainer = e.oldComponent === e.newComponent;
      if (sameContainer) {
        this.onSortItems(e);
      } else if (e.newComponent === this) {
        this.onReceiveItem(e);
        // const canceled = this.onReceiveItem(e);
        // if (canceled !== false) {
        //     this.$nextTick(() => {
        //         event.originalSource.remove();
        //     });
        // }
      } else if (e.oldComponent === this) {
        this.onRemoveItem(e);
      }
    },
    onSortItems(e) {
      if (e.oldIndex === e.newIndex) {
        return;
      }

      const newItems = moveArray(this.value, e.oldIndex, e.newIndex);
      this.$emit('input', newItems);
      this.$emit('move', { newItems, ...e });
    },
    onReceiveItem(e) {
      if (e.oldComponent.value === this.value) {
        return;
      }
      const newItems = [...this.value];
      newItems.splice(e.newIndex, 0, e.item);
      this.$emit('input', newItems);
      this.$emit('receive', { ...e, newItems });
    },
    onRemoveItem(e) {
      if (e.newComponent.value === this.value) {
        return;
      }
      const newItems = this.value.filter((item) => item !== e.item);
      this.$emit('input', newItems);
      this.$emit('remove', { ...e, newItems });
    },
  },
  render() {
    return this.$scopedSlots.default({
      items: this.value,
    })[0];
  },
};
</script>
