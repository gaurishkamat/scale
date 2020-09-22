import Vue from "vue";

import {
  defineCustomElements,
  applyPolyfills
} from "@scaleds/components-telekom/loader";

import {
  defineCustomElements as defineCustomElementsIcons,
  applyPolyfills as applyPolyfillsIcons
} from "@scaleds/icons-telekom/loader";

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/scale-\w*/];

applyPolyfills().then(() => {
  defineCustomElements(window);
});

applyPolyfillsIcons().then(() => {
  defineCustomElementsIcons(window);
});
