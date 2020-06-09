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
          :blocks="blocks"
          @onDrag="onDragStart"
          :onEnterDragFn="onEnter"
          :beforeEmptyDrop="onEmptyDrop"
          @afterEmptyDrop="onEmptyDrop"
          @afterMove="onMove"
          :beforeMove="beforeMove"
          :beforeAdd="beforeAdd"
          @add="add"
          @move="move"
          @remove="remove"
        ></flowy>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
/* eslint-disable no-unused-vars */
import Vue from 'vue';
import Flowy from '@/components/Flowy.vue';
import FlowyNode from '@/components/FlowyNode.vue';
import DemoBlock from '@/demo_components/DemoBlock.vue';
import DemoNode from '@/demo_components/DemoNode.vue';
import find from 'lodash/find';
import findIndex from 'lodash/findIndex';
import generateId from './lib/generateId';


export default {
  name: 'app',
  components: {
    Flowy,
    FlowyNode,
  },
  data: () => ({
    holder: [],
    dragging: false,
    blocks: [
      {
        preview: {
          title: 'New visitor',
          description: 'Triggers when somebody visits a specified page',
          icon: 'eye',
        },
        node: {
          title: 'New visitor',
          description: '<span>When a <span class="font-bold">new visitor</span> goes to <span class="font-bold">Site 1</span></span>',
          icon: 'eyeblue',
        },
      },
      {
        preview: {
          title: 'Update database',
          description: 'Triggers when somebody performs a specified action',
          icon: 'error',
        },
        node: {
          title: 'Update database',
          description: '<span>Triggers when somebody performs a <span class="font-bold">specified action</span></span>',
          icon: 'errorred',
        },
      },
      {
        preview: {
          title: 'Time has passed',
          description: 'Triggers after a specified amount of time',
          icon: 'database',
        },
        node: {
          title: 'Time has passed',
          description: 'Triggers after a specified <span class="font-bold">amount</span> of time',
          icon: 'databaseorange',
        },
      },
    ],
    nodes: [
      {
        id: '1',
        parentId: -1,
        nodeComponent: 'demo-node',
        data: {
          text: 'Parent block',
          title: 'New Visitor',
          description: '<span>When a <span class="font-bold">new visitor</span> goes to <span class="font-bold">Site 1</span></span>',
          icon: 'eyeblue',
        },
      },
      {
        id: '2',
        parentId: '1',
        nodeComponent: 'demo-node',
        data: {
          text: 'Parent block',
          title: 'New Visitor',
          description: '<span>When a <span class="font-bold">new visitor</span> goes to <span class="font-bold">Site 1</span></span>',
          icon: 'eyeblue',
        },
      },
      {
        id: '3',
        parentId: '1',
        nodeComponent: 'demo-node',
        data: {
          text: 'Parent block',
          title: 'New Visitor',
          description: '<span>When a <span class="font-bold">new visitor</span> goes to <span class="font-bold">Site 1</span></span>',
          icon: 'eyeblue',
        },
      },
      // {
      //   id: '100',
      //   parentId: -1,
      //   block: 'demo-block',
      //   props: {
      //     text: 'Parent block',
      //   },
      // },
      // {
      //   id: '2',
      //   parentId: '1',
      //   block: 'demo-block',
      // },
      // {
      //   id: '3',
      //   parentId: '1',
      //   block: 'demo-block',
      // },
      // {
      //   id: '4',
      //   parentId: '1',
      //   block: 'demo-block',
      // },
      // {
      //   id: '5',
      //   parentId: '1',
      //   block: 'demo-block',
      // },
      // {
      //   id: '6',
      //   parentId: '3',
      //   block: 'demo-block',
      // },
      // {
      //   id: '7',
      //   parentId: '3',
      //   block: 'demo-block',
      // },
      // {
      //   id: '8',
      //   parentId: '3',
      //   block: 'demo-block',
      // },
    ],
  }),
  methods: {
    onDropBlock(_event) {

    },
    beforeAdd() {
      console.log('before add');
      return true;
    },
    afterAdd() {

    },
    beforeMove() {
      console.log('before move');
      return true;
    },
    onEmptyDrop(event) {
      console.log(event);
    },
    onMove(event) {
      console.log(event);
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
      console.log(nodeIndex);
      this.nodes.splice(nodeIndex, 1);
    },
    move(event) {
      const { dragged, to } = event;
      dragged.parentId = to.id;
    },
    add(event) {
      const id = generateId();
      this.nodes.push({
        id,
        ...event.node,
      });

      // const toNode = event.data.dropzoneNode;

      // this.nodes.push({
      //   block: 'demo-block',
      //   parentId: toNode.id,
      //   id: generateId(this.nodes),
      // });

      // console.log('ondrop', event);
      // this.dragging = false;
    },
    onDragStart(event) {
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

.drag-handle {
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
</style>
