import Vue from 'vue';
import App from './App.vue';
import {
  applyPolyfills,
  defineCustomElements,
} from '@telekom/scale-components/loader';
import '@telekom/scale-components/dist/scale-components/scale-components.css';

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/scale-\w*/];

applyPolyfills().then(() => {
  defineCustomElements(window);
});

new Vue({
  render: (h) => h(App),
}).$mount('#app');
