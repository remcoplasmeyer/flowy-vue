import Vue from 'vue';
import DraggablePlugin from '@/index.js';
import App from './App.vue';

Vue.use(DraggablePlugin);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
