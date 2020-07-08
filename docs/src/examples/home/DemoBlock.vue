<template lang="html">
  <q-card flat bordered class="my-card bg-grey-1">
      <q-card-section>
        <div class="row items-center no-wrap">
          <div class="col">
            <div class="text-h6">{{ title }}</div>
          </div>

          <div class="col-auto">
            <q-btn color="grey-7" class="drag-handle" round flat icon="drag_handle">
            </q-btn>
          </div>
        </div>
      </q-card-section>
    </q-card>
</template>

<style lang="scss">
.example-block {
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
    remove: {
      type: Function,
      required: false,
    },
  },
  data () {
    return {

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
