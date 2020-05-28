<template>
  <div class="page main flex flex-row flex-no-wrap">
    <div class="container overflow-auto z-40">
      <h1>Vue Flowy</h1>
      <flowy
        :nodes="nodes"
        :blocks="blocks"
        @onDrag="onDragStart"
        @added-node="addNode($event)"
      ></flowy>
    </div>
    <div class="side z-50">
      Drag from below
      <draggable
        :with-handle="true"
        @start="onDragStart($event)"
        :draggable-mirror="{ xAxis: false, appendTo: 'body' }"
        group="flowy"
      >
        <example-block class="draggable"></example-block>
      </draggable>
    </div>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
/* eslint-disable no-unused-vars */
import Vue from 'vue';
import Flowy from '@/components/Flowy.vue';
import FlowyNode from '@/components/FlowyNode.vue';
import find from 'lodash/find';

function randomInteger() {
  return Math.floor(Math.random() * 10000) + 1;
}

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
        name: 'example-block',
      },
    ],
    nodes: [
      {
        id: '1',
        parentId: -1,
        block: 'example-block',
        props: {
          text: 'Parent block',
        },
      },
      {
        id: '100',
        parentId: -1,
        block: 'example-block',
        props: {
          text: 'Parent block',
        },
      },
      {
        id: '2',
        parentId: '1',
        block: 'example-block',
      },
      {
        id: '3',
        parentId: '1',
        block: 'example-block',
      },
      {
        id: '4',
        parentId: '1',
        block: 'example-block',
      },
      {
        id: '5',
        parentId: '1',
        block: 'example-block',
      },
      {
        id: '6',
        parentId: '3',
        block: 'example-block',
      },
      {
        id: '7',
        parentId: '3',
        block: 'example-block',
      },
      {
        id: '8',
        parentId: '3',
        block: 'example-block',
      },
    ],
  }),
  methods: {
    addNode(_event) {
      let id = randomInteger();
      while (find(this.nodes, { id }) !== undefined) {
        id = randomInteger();
      }
      this.nodes.push({
        ..._event.node,
        id,
      });
    },
    onDrop(event) {
      this.dragging = false;
      console.log(event);
    },
    onDragStart(event) {
      this.dragging = true;
      console.log(event);
    },
  },
  watch: {

  },
};
</script>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600&display=swap");
  @import url("https://fonts.googleapis.com/css?family=Roboto:100&display=swap");
  html, body {
    font-family: "Open Sans", sans-serif;
    position: relative;
    margin: 0;
    padding: 0;
    height: 100%;
    color: #333;
    letter-spacing: 1px;
    background: #f5f5f5;
    font-weight: 300;
  }

  div {
    position:relative;
    z-index: 0;
  }

  .no-wrap {
    white-space: nowrap;
  }

  h1 {
    margin:0;
  }

  .dropzone {
    width: 100px;
    height: 100px;
    border: 1px dotted black;
  }

  .draggable {
    height: 30px;
    border: 2px solid red;
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
    padding: 12px;
    width: 320px;
    height: 100%;
  }

  .container {
    height: 100%;
    position: relative;
    width: auto;
    margin:auto;
  }

  .description {
    text-align: center;
  }

</style>
