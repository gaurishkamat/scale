import Vue from 'vue'
import App from './App.vue'
import { defineCustomElements, applyPolyfills } from '@scaleds/components-telekom/loader'

Vue.config.productionTip = false
Vue.config.ignoredElements = [/scale-\w*/]

applyPolyfills().then(() => {
  defineCustomElements(window);
});

new Vue({
  render: h => h(App),
}).$mount('#app')
