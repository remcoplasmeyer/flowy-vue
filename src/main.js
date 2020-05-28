import Vue from 'vue';
import FlowyPlugin from '@/index.js';
import ExampleBlock from '@/demo_components/ExampleBlock.vue';
import App from './App.vue';

Vue.use(FlowyPlugin);
Vue.component('ExampleBlock', ExampleBlock);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
