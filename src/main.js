import Vue from 'vue';
import FlowyPlugin from '@/index.js';
import DemoBlock from '@/demo_components/DemoBlock.vue';
import DemoNode from '@/demo_components/DemoNode.vue';
import App from './App.vue';

Vue.use(FlowyPlugin);
Vue.component('DemoBlock', DemoBlock);
Vue.component('DemoNode', DemoNode);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
