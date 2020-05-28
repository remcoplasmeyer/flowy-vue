<template lang="html">
  <div class="flowy-node flex flex-col flex-no-wrap items-center relative overflow-visible">
    <!-- the node itself -->
    <flowy-block
      v-bind="{ ...$props, ...passedProps }"
      ref="block"
    >
      <div
        :style="arrowBlockStyle"
        class="arrowblock -mt-64px overflow-visible"
        v-if="!isTopParent && mounted"
      >
        <svg preserveaspectratio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- line -->
          <path :d="linePath" stroke="#C5CCD0" stroke-width="2px"/>
          <!-- arrow -->
        </svg>
      </div>

      <div
        :style="arrowBlockStyle"
        class="arrowblock-down overflow-visible"
        v-if="hasChildren && mounted"
      >
        <svg preserveaspectratio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- line -->
          <path :d="linePathDown" stroke="#C5CCD0" stroke-width="2px"/>
          <!-- arrow -->
        </svg>
      </div>

      <div class="indicator" v-show="showIndicator"></div>
      <dropzone
        :data="node"
        @enter="onEnterDrag($event)"
        @leave="onLeaveDrag($event)"
        @drop="onDragStop($event)"
        @receive="onDragReceive($event)"
        group="first_group"
        class="node-dropzone"
        >
        <template #default="scope">
          <div :class="scope" class="node-dropzone">
            <div class="">This is a dropzone</div>
          </div>
        </template>
      </dropzone>
    </flowy-block>

    <!-- children tree -->
    <div class="flowy-tree flex flex-row flex-no-wrap overflow-visible mt-64px">
      <template v-for="(child, index) in children">
        <FlowyNode
          v-bind="{ ...$props }"
          v-on="{...$listeners}"
          :index="index"
          :total-children="children.length"
          :node="child"
          :ref="child.id"
          :key="child.id"
          :parent-x="xPos"
        >
        </FlowyNode>

      </template>
    </div>

  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import find from 'lodash/find';
import filter from 'lodash/filter';

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
  };
}

export default {
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
    blocks: {
      type: Array,
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
  },
  data() {
    return {
      hoveringWithDrag: false,
      mounted: false, // we need to be mounted before $refs is popuplated
      xPosProxy: 0,
    };
  },
  mounted() {
    this.mounted = true;
  },
  destroyed() {

  },
  updated() {
    this.$nextTick(() => {
      // Code that will run only after the
      // entire view has been re-rendered
      if (this.$refs.block === undefined) return;
      this.xPosProxy = getOffset(this.$refs.block.$el).left;
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
    arrowBlockStyle() {
      return {
        marginLeft: `${this.blockWidth / 2}px`,
      };
    },
    lineTotalHeight() {
      // todo
      return 64;
    },
    isOddChildren() {
      return (Math.abs(this.totalChildren % 2) === 1);
    },
    isMiddle() {
      return this.isOddChildren
       && (this.index + 1) === Math.ceil(this.totalChildren / 2);
    },
    isLeftSide() {
      // if block as at the left side in the row of nodes
      return (this.index + 1) <= Math.ceil(this.totalChildren / 2);
    },
    lineStartX() {
      return this.blockWidth / 2;
    },
    blockWidth() {
      return this.$refs.block.$el.offsetWidth;
    },
    holderWidth() {
      // includes margin
      return this.$refs.block.$el.parentElement.offsetWidth;
    },
    rowWidth() {
      return this.$refs.block.$el.parentElement.parentElement.offsetWidth;
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
      return `M0 0L0 ${this.lineTotalHeight / 2}L0 ${this.lineTotalHeight / 2}L0 ${this.lineTotalHeight / 2}`;
    },
    linePath() {
      const height = this.lineTotalHeight / 2;
      const width = this.lengthFromMiddle;
      const modifier = this.isLeftSide ? '' : '-';
      // if (this.isMiddle) {
      //   return `M0 0L0 ${this.lineTotalHeight / 2}
      //  ${this.lineTotalHeight / 2} ${this.lineTotalHeight / 2}`;
      // }
      return `M${modifier}${width} ${height}L${modifier}${width} ${height}L0 ${height}L0 ${this.lineTotalHeight}`;
    },
    lengthFromMiddle() {
      return Math.abs(this.xPos - this.parentX);

      // const addHalf = this.isOddChildren ? 0 : 0.5;
      // const subtractRight = !this.isLeftSide && !this.isOddChildren ? -1 : 0;
      // return Math.abs(Math.ceil((this.totalChildren / 2)) - (this.index + 1))
      //   + addHalf + subtractRight;
    },
  },
  methods: {
    onDragStop(_event) {
      this.hoveringWithDrag = false;
    },
    addNode(_event) {
      console.log(this);
      this.$emit('added-node', _event);
    },
    onDragReceive(_event) {
      this.hoveringWithDrag = false;
      const parentNode = this.node;
      this.$emit('added-node', {
        node: {
          parentId: parentNode.id,
          block: 'example-block',
          props: {
            text: 'Parent block',
          },
        },
      });
    },
    onEnterDrag(_event) {
      this.hoveringWithDrag = true;
    },
    onLeaveDrag(_event) {
      this.hoveringWithDrag = false;
    },
  },
};
</script>
