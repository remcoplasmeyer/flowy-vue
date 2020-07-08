<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue'
import getMeta from 'assets/get-meta.js'

export default {
  name: 'App',

  meta: {
    title: 'Vue Flowy',
    titleTemplate: title => `${title} | Vue Flowy`,

    meta: getMeta(
      'Vue Flowy - make flowchart or hierarchy chart functionality',
      'Vue Flowy makes creating flowchart or hierarchy chart functionality an easy task. Build automation software, mind mapping tools, organisation charts, or simple programming platforms in minutes by implementing the library into your project.'
    )
  },

  created () {
    const store = {
      toc: []
    }

    this.$root.store = process.env.SERVER === true
      ? store
      : Vue.observable(store)
  }
}
</script>
