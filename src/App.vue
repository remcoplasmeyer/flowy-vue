<template>
  <div class="page main">
    <div class="container">
      <h1>Dropzone (check console log)</h1>
      <dropzone
        :data="{ holder }"
        @enter="onEnter($event)"
        @leave="onLeave($event)"
        group="first_group"
      >
        <template #default="scope">
          <div :class="scope" class="dropzone">
            <div class="">This is a dropzone</div>
          </div>
        </template>
      </dropzone>

      <draggable
        :with-handle="true"
        @drop="onDrop($event)"
        :draggable-mirror="{ xAxis: false }"
        group="first_group"
      >
        <div class="draggable">draggable item</div>
      </draggable>


      <h1>Sortable & SortableItem</h1>
      <sortable v-model="groups" group="columns">
          <template #default="{ items: groups }">
              <div class="">
                  <sortable-item v-for="group in groups" :key="group.key">
                    <div class="draggable" v-drag-handle>{{ group.key }}</div>
                  </sortable-item>
              </div>
          </template>
      </sortable>

      <p class="description">Shopify Draggable Vue</p>
    </div>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import Draggable from '@/components/Draggable.vue';
import Dropzone from '@/components/Dropzone.vue';
import Sortable from '@/components/Sortable.vue';
import SortableItem from '@/components/SortableItem.vue';

export default {
  name: 'app',
  components: {
    Draggable,
    Dropzone,
    Sortable,
    SortableItem,
  },
  data: () => ({
    holder: [],
    groups: [
      {
        key: 'group1',
      },
      {
        key: 'group2',
      },
      {
        key: 'group3',
      }],
  }),
  methods: {
    onEnter(event) {
      console.log(event);
    },
    onLeave(event) {
      console.log(event);
    },
    onDrop(event) {
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

  .container {
    position: relative;
    width: 800px;
    margin:auto;
  }

  .description {
    text-align: center;
  }

</style>
