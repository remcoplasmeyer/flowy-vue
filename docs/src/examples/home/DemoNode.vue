<template lang="html">
  <q-card flat bordered class="my-card bg-white">
      <q-card-section>
        <div class="row items-center no-wrap">
          <div class="col">
            <div class="text-h6">{{ title }}</div>
          </div>

          <div class="col-auto">
            <q-btn color="grey-7" class="drag-handle" round flat icon="drag_handle">
              <q-menu cover auto-close>
                <q-list>
                  <q-item clickable>
                    <q-item-section @click="remove()">Remove Card</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </div>
        </div>
      </q-card-section>

      <q-card-section v-html="description">
        <q-btn flat @click="remove()">Remove</q-btn>
      </q-card-section>

      <q-card-actions >
        <q-btn flat @click="remove()">Remove</q-btn>
      </q-card-actions>

    </q-card>
</template>

<style lang="scss">
.example-node {
  width: 320px;
}
.bg-white {
  background-color: #ffffff;
}
</style>

<script>
/* eslint-disable no-unused-vars */

export default {
  props: {
    remove: {
      type: Function,
      required: true,
    },
    node: {
      type: Object,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  data () {
    return {
      dropdown: false,
    };
  },
  mounted () {

  },
  destroyed () {

  },
  methods: {

  },
};
</script>
