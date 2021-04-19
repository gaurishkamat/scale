import Vue from "vue";

import {
  defineCustomElements,
  applyPolyfills
} from "@scaleds/telekom-components/loader";

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/scale-\w*/];

applyPolyfills().then(() => {
  defineCustomElements(window);
});
