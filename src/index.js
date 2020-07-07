import DraggablePlugin from '@hipsjs/shopify-draggable-vue';
import Flowy from './components/Flowy.vue';
import FlowyNode from './components/FlowyNode.vue';
import FlowyBlock from './components/FlowyBlock.vue';
import FlowyNewBlock from './components/FlowyNewBlock.vue';

// Declare install function executed by Vue.use()
export function install(_Vue) {
  const Vue = _Vue;
  Vue.use(DraggablePlugin, {});

  Vue.component('Flowy', Flowy);
  Vue.component('FlowyNode', FlowyNode);
  Vue.component('FlowyBlock', FlowyBlock);
  Vue.component('FlowyNewBlock', FlowyNewBlock);
}

// Create module definition for Vue.use()
const plugin = {
  install,
};

// UMD auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

export {
  Flowy, FlowyNode, FlowyBlock, FlowyNewBlock,
};

export default plugin;
