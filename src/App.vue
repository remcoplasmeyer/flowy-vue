<template>
  <div class="h-screen w-screen bg-gray-200 flex flex-col flex-no-wrap overflow-none">
    <div class="bg-white p-6 shadow z-10">
      <div class="text-lg">Vue Flowy</div>
    </div>
    <div class="flex-grow overflow-hidden flex flex-row flex-no-wrap">
      <div class="z-40 flex-shrink pl-6 pt-6 bg-white border-r border-grey-400">

        <div class="side z-50">
          <div class="text-lg font-bold mb-4">Blocks</div>
          <div>
            <flowy-new-block
              v-for="(block, index) in blocks"
              :key="index"
              @drag-start="onDragStartNewBlock"
              @drag-stop="onDragStopNewBlock"
            >
              <template v-slot:preview="{}">
                <demo-block
                  :title="block.preview.title"
                  :description="block.preview.description"
                  :icon="block.preview.icon"
                />
              </template>
              <template v-slot:node="{}">
                <demo-node
                  :title="block.node.title"
                  :description="block.node.description"
                  :icon="block.node.icon"
                  :custom-prop="block.node.canBeDragged"
                />
              </template>
            </flowy-new-block>
          </div>
        </div>
      </div>

      <div class="flex-grow overflow-auto">
        <flowy
          class="h-full w-full p-6"
          :nodes="nodes"
          @drag-start="onDragStart"
          @add="add"
          @move="move"
          @remove="remove"
          :beforeAdd="beforeAdd"
          :beforeMove="beforeMove"
          :onEnterDragFn="onEnter"
        ></flowy>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
/* eslint-disable no-unused-vars */
import Vue from 'vue';
import find from 'lodash/find';
import findIndex from 'lodash/findIndex';
import generateId from './lib/generateId';
import nodes from './demo_data/simple';
import blocks from './demo_data/sampleBlocks';


export default {
  name: 'app',
  components: {

  },
  data: () => ({
    holder: [],
    dragging: false,
    blocks,
    nodes,
    newDraggingBlock: null,
  }),
  methods: {
    onDragStartNewBlock(event) {
      console.log('onDragStartNewBlock', event);
      this.newDraggingBlock = event;
    },
    onDragStopNewBlock(event) {
      console.log('onDragStopNewBlock', event);
      this.newDraggingBlock = null;
    },
    onDropBlock(_event) {

    },
    beforeAdd() {
      console.log('before add');
      return true;
    },
    afterAdd() {

    },
    onEnterDrop(event) {
      console.log('entered drop');
      return true;
    },
    beforeMove({ to, from }) {
      console.log(to, from);
      if (from && from.id === '1') {
        return false;
      }
      return true;
    },
    onEnter() {

    },
    addNode(_event) {
      const id = this.generateId();
      this.nodes.push({
        ..._event.node,
        id,
      });
    },
    remove(event) {
      const nodeIndex = findIndex(this.nodes, { id: event.node.id });
      this.nodes.splice(nodeIndex, 1);
    },
    move(event) {
      console.log('move', event);
      const { dragged, to } = event;
      dragged.parentId = to.id;
    },
    add(event) {
      const id = generateId();
      this.nodes.push({
        id,
        ...event.node,
      });
    },
    onDragStart(event) {
      console.log('onDragStart', event);
      this.dragging = true;
    },
  },
  watch: {

  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600&display=swap");
@import url("https://fonts.googleapis.com/css?family=Roboto:100&display=swap");
html,
body {
  font-family: "Open Sans", sans-serif;
  font-size: 15px;
  position: relative;
  margin: 0;
  padding: 0;
  height: 100%;
  color: #333;
  letter-spacing: 1px;
  background: #f5f5f5;
  font-weight: 300;
}

.flowy {
  background-image: url("/flowy-vue/demo_assets/tile.png");
  background-repeat: repeat;
  background-size: 30px 30px;
  background-color: #fbfbfb;
}

div {
  position: relative;
  z-index: 0;
}

.no-wrap {
  white-space: nowrap;
}

h1 {
  margin: 0;
}

.dropzone {
  width: 100px;
  height: 100px;
  border: 1px dotted black;
}

.flowy-drag-handle {
  cursor: grab;
}

a {
  text-decoration: none;
  color: #333;
}

.page {
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.page:nth-child(2n) {
  background: #f0f0f0;
}
.page.main {
  z-index: 1;
  min-height: 700px;
}

.side {
  width: 340px;
  height: 100%;
}

.container {
  height: 100%;
  position: relative;
  width: auto;
  margin: auto;
}

.description {
  text-align: center;
}

.example-block {
  width: 320px;
}

.flowy-block.draggable-mirror {
  opacity: 0.6;
}
</style>
