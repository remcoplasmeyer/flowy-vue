<template language="html">
  <div
    class="flowy overflow-auto"
    :class="{
      dragging: dragging
    }"
  >
    <div class="flowy-tree flex flex-row flex-no-wrap relative">
      <FlowyNode
        v-bind="{ ...$props }"
        v-on="{ ...$listeners }"
        :node="node"
        :key="node.id"
        v-for="node in parentNodes"
        @drag-start="onDragStart($event)"
        @drag-stop="onDragStop($event)"
        @enter-drop="onEnterDrop($event)"
        :before-move="onBeforeMove"
        :before-add="onBeforeAdd"
        :is-dragging="dragging"
      >
      </FlowyNode>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import find from 'lodash/find';
import filter from 'lodash/filter';

export default {
  props: {
    nodes: {
      type: Array,
      required: false,
    },
    beforeMove: {
      type: Function,
      default: () => true,
    },
    beforeAdd: {
      type: Function,
      default: () => true,
    },
  },
  data() {
    return {
      draggingNode: null,
    };
  },
  computed: {
    parentNodes() {
      return filter(this.nodes, {
        parentId: -1,
      });
    },
    rows() {
      return [this.parentNodes];
    },
    dragging() {
      return this.draggingNode !== false && this.draggingNode !== null;
    },
  },
  mounted() { },
  destroyed() { },
  methods: {
    setNotDragging() {
      setTimeout(() => {
        this.draggingNode = null;
      }, 50);
    },
    onBeforeMove(to) {
      return this.beforeMove({ to, from: this.draggingNode });
    },
    onBeforeAdd(to) {
      return this.beforeAdd({ to });
    },
    onDrop(event) {
      this.setNotDragging();
    },
    onDragStart(event) {
      this.draggingNode = event.node;
      this.$emit('drag-start', event);
    },
    onDragStop(event) {
      this.setNotDragging();
      this.$emit('drag-stop', event);
    },
    onEnterDrop(event) {
      this.$emit('enter-drop', {
        to: event.to,
        from: this.draggingNode,
      });
    },
    getChildren(parentId) {
      return filter(this.nodes, {
        parentId,
      });
    },
    onDragEnd(_event) { },
  },
};
</script>

<style lang="scss">
.draggable-mirror {
  z-index: 100;
  opacity: 0.7;

  svg.flowy-line {
    display: none;
  }
}

.flowy-node {
  transition: all 0.3s;
}

.node-dropzone {
  position: absolute;
  width: 100%;
  height: 128px;
  bottom: -64px;
}

.flowy.dragging .node-dropzone {
  z-index: 9999;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 60px;
  background-color: #217ce8;
  left: 50%;
  bottom: -5px;
  margin-top: -5px;
  margin-left: -6px;
  opacity: 1;
  transition: all 0.3s cubic-bezier(0.05, 0.03, 0.35, 1);
  transform: scale(1);
  position: absolute;
  z-index: 2;

  &:after {
    content: "";
    display: block;
    width: 12px;
    height: 12px;
    background-color: #217ce8;
    transform: scale(1.7);
    opacity: 0.5;
    border-radius: 60px;
  }
}

.scale-enter,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.scale-enter-active,
.scale-leave-active {
  transition: transform 0.2s, opacity 0.2s;
}

.indicator.not-allowed {
  background-color: #f5365c;

  &:after {
    background-color: #f5365c;
  }
}

.relative {
  position: relative;
}

.arrowblock {
  position: absolute;
  width: 100%;
  overflow: visible;
  pointer-events: none;

  svg {
    width: -webkit-fill-available;
    overflow: visible;
  }
}

.arrowblock-down {
  position: absolute;
  width: 100%;
  overflow: visible;
  pointer-events: none;
  top: 100%;
  svg {
    width: -webkit-fill-available;
    overflow: visible;
  }
}

.-mt-64px {
  margin-top: -64px;
}

.mt-64px {
  margin-top: 64px;
}

.mr-24px {
  margin-right: 24px;
}

.-mr-24px {
  margin-right: -24px;
}

.justify-center {
  justify-content: center;
}

.items-center {
  align-items: center;
}

.flex {
  display: flex;
}

.flex-row {
  flex-direction: row;
}

.flex-col {
  flex-direction: column;
}

.flex-no-wrap {
  flex-wrap: nowrap;
}

.overflow-auto {
  overflow: auto;
}

.overflow-visible {
  overflow: visible;
}

.z-40 {
  z-index: 50;
}

.z-50 {
  z-index: 50;
}
</style>
