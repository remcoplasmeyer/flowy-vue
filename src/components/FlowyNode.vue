<template lang="html">
  <div class="flowy-node ">
    <draggable
      class="flowy-draggable"
      group="flowy"
      @stop="onStop(node, $event)"
      @start="onStart(node, $event)"
      :with-handle="false"
      :draggable-mirror="{ xAxis: false, appendTo: 'body' }"
      :data="{ draggingNode: node }"
    >
      <!-- the node itself -->
      <flowy-block
        :data="node"
        class="draggable"
        :remove="removeNode"
        v-bind="{ ...$props, ...passedProps }"
      >
        <div class='dimensionBox' style="" ref="block" />

        <!-- Horizontal line -->
        <ConnectorLine
          verticalOffset
          v-if="!isTopParent && mounted"
          :styling='lineMargins'
          :path='linePath'
        />

        <!-- Vertical line -->
        <ConnectorLine
          vertical
          v-if="hasChildren"
          :styling='lineMargins'
          :path='linePathDown'
        />

        <DropIndicator :show='showIndicator' :not-allowed='!dropAllowed' />

        <dropzone
          :data="{ dropzoneNode: node }"
          @enter="onEnterDrag({ to: node })"
          @leave="onLeaveDrag($event)"
          @drop="onDrop($event)"
          @receive="onDragReceive({ ...$event, to: node })"
          group="first_group"
          class="node-dropzone"
        >
          <template #default="scope">
            <div :class="scope" class="node-dropzone">
              <div class=""></div>
            </div>
          </template>
        </dropzone>
      </flowy-block>
    </draggable>

    <!-- children tree -->
    <div class="flowy-tree flex flex-row flex-no-wrap overflow-visible mt-64px">
      <template v-for="(child, index) in children">
        <flowy-node
          v-bind="{ ...$props }"
          v-on="{ ...$listeners }"
          :index="index"
          :total-children="children.length"
          :node="child"
          :ref="child.id"
          :key="child.id"
          :parent-x="xPos"
        />
      </template>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
/* eslint-disable no-unused-vars */
import find from "lodash/find";
import filter from "lodash/filter";
import isNil from "lodash/isNil";
import get from "lodash/get";
import cloneDeep from "lodash/cloneDeep";

import ConnectorLine from "./ConnectorLine";
import DropIndicator from "./DropIndicator";

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + rect.width / 2,
  };
}

export default {
  name: "FlowyNode",

  components: {
    ConnectorLine,
    DropIndicator,
  },

  props: {
    index: {
      type: Number,
      required: false,
    },

    totalChildren: {
      type: Number,
      required: false,
    },

    node: {
      type: Object,
      required: true,
    },

    nodes: {
      type: Array,
      required: true,
    },

    parentX: {
      type: Number,
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

    isDragging: {
      type: Boolean,
    },
  },

  data() {
    return {
      hoveringWithDrag: false,
      mounted: false, // we need to be mounted before $refs is popuplated
      xPosProxy: 0,
      width: 0,
      dropAllowed: true,
      timer: null,
    };
  },

  mounted() {
    this.mounted = true;
    this.timer = setInterval(this.setWidth, 200);
  },

  destroyed() {
    clearInterval(this.timer);
  },

  updated() {
    this.$nextTick(() => {
      // Code that will run only after the
      // entire view has been re-rendered
      this.setWidth();
    });
  },

  computed: {
    xPos() {
      if (!this.mounted) return 0;
      return this.xPosProxy;
    },

    hasChildren() {
      return this.children.length > 0;
    },

    showIndicator() {
      return this.hoveringWithDrag;
    },

    lineMargins() {
      return { marginLeft: `${this.blockWidth / 2}px` };
    },

    lineTotalHeight() {
      // todo
      return 64;
    },

    isOddChildren() {
      return Math.abs(this.totalChildren % 2) === 1;
    },

    isMiddle() {
      return (
        this.isOddChildren &&
        this.index + 1 === Math.ceil(this.totalChildren / 2)
      );
    },

    isLeftSide() {
      // if block as at the left side in the row of nodes
      return this.index + 1 <= Math.ceil(this.totalChildren / 2);
    },

    lineStartX() {
      return this.blockWidth / 2;
    },

    blockWidth() {
      return this.width;
    },

    holderWidth() {
      // includes margin
      return this.$refs.block.parentElement.offsetWidth;
    },

    rowWidth() {
      return this.$refs.block.parentElement.parentElement.offsetWidth;
    },

    isTopParent() {
      return this.node.parentId === -1;
    },

    children() {
      return filter(this.nodes, { parentId: this.node.id });
    },

    passedProps() {
      return this.node.props;
    },

    linePathDown() {
      const lineHeight = this.lineTotalHeight
      return `M0 0L0 ${lineHeight / 2}L0 ${lineHeight / 2}L0 ${lineHeight / 2}`;
    },

    linePath() {
      const height = this.lineTotalHeight / 2;
      const width = this.lengthFromMiddle;
      const modifier = this.isLeftSide ? "" : "-";

      return `M${modifier}${width} ${height}L${modifier}${width} ${height}L0 ${height}L0 ${this.lineTotalHeight}`;
    },

    lengthFromMiddle() {
      return Math.abs(this.xPos - this.parentX);
    },
  },

  methods: {
    setWidth() {
      if (this.$refs.block === undefined) return;
      const xPos = getOffset(this.$refs.block).left;

      // for some reason there's a bug where we end up with 0
      // even though the dom should be rendered at this point?
      if (xPos !== 0) {
        this.xPosProxy = xPos;
        this.width = this.$refs.block.offsetWidth;
      }
    },

    removeNode() {
      this.$emit("remove", { node: this.node });
    },

    draggingNodeFromEvent(event) {
      return get(event, "oldComponent.$attrs.data.draggingNode", false);
    },

    dropzoneNodeFromEvent(event) {
      return get(event, "newComponent.$attrs.data.dropzoneNode", false);
    },

    blockFromNewNodeEvent(event) {
      const data = get(event, "oldComponent.$attrs.data", false);
      return {
        nodeComponent: data.componentName,
        data: cloneDeep(data.props),
      };
    },

    onStart(node) {
      this.$emit("drag-start", { node });
    },

    onStop(node, _event) {
      this.$emit("drag-stop");
      this.hoveringWithDrag = false;
    },

    onDrop(_event) {
      this.$emit("drag-stop");
      this.hoveringWithDrag = false;
    },

    onDragReceive(_event) {
      this.hoveringWithDrag = false;

      const draggingNode = this.draggingNodeFromEvent(_event);
      const toNode = _event.to;

      // Insert node

      // Move node

      const isNew = (draggingNode === false)



      if (draggingNode === false) {
        // not dragging from existing node (so dragged from new node list)
        const newNode = this.blockFromNewNodeEvent(_event);
        this.newNode(newNode, this.node);
      } else {
        // dragged from existing node
        const dropAllowed = this.beforeMove(toNode);
        if (dropAllowed) {
          this.moveNode(draggingNode, toNode);
        }
      }
      this.dropAllowed = true;
    },

    onEnterDrag(_event) {
      this.hoveringWithDrag = true;
      this.dropAllowed = this.beforeMove(_event.to);
      // this.$emit('enter-drop', {
      //   to: _event.to,
      // });
    },

    onLeaveDrag(_event) {
      this.hoveringWithDrag = false;
    },

    newNode(newNode, parentNode) {
      const dropAllowed = this.beforeAdd(newNode);
      if (dropAllowed) {
        this.$emit("add", {
          node: {
            parentId: parentNode.id,
            ...newNode,
          },
        });
      }
    },

    moveNode(from, to) {
      this.$emit("move", {
        dragged: from,
        to,
      });
    },
  },
};
</script>

<style lang="scss">
.dimension-box {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
