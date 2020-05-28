<template language="html">
  <div class="flowy">
    <div class="flowy-tree flex flex-row flex-no-wrap relative overflow-auto">
      <FlowyNode
        v-bind="{ ...$props }"
        v-on="{...$listeners}"
        :node="node"
        :key="node.id"
        v-for="(node) in parentNodes">
      </FlowyNode>
    </div>
  </div>
</template>

<style lang="scss">
    .draggable-mirror {
      z-index: 100;
      opacity: 0.3
    }

    .node-dropzone {
      position:absolute;
      width: 100%;
      height: 128px;
      bottom: -64px;
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
      transition: all .3s cubic-bezier(.05, .03, .35, 1);
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
        opacity: .2;
        border-radius: 60px
      }
    }

    .relative {
      position: relative;
    }

    .arrowblock{
      position:absolute;
      width:100%;
      overflow:visible;
      pointer-events:none;

      svg {
        width: -webkit-fill-available;
        overflow: visible;
      }
    }

    .arrowblock-down{
      position:absolute;
      width:100%;
      overflow:visible;
      pointer-events:none;
      bottom:-155px;

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
      display: flex
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
    blocks: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {

    };
  },
  computed: {
    parentNodes() {
      return filter(this.nodes, { parentId: -1 });
    },
    rows() {
      return [
        this.parentNodes,
      ];
    },
  },
  mounted() {

  },
  destroyed() {

  },
  methods: {
    getChildren(parentId) {
      return filter(this.nodes, { parentId });
    },
    onDragEnd(_event) {

    },
    onDragStart(_event) {

    },
  },
};
</script>
