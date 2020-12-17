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

export const globalTypes = {
  locale: {
    name: "Locale",
    description: "Internationalization locale",
    defaultValue: "en",
    toolbar: {
      icon: "globe",
      items: [
        { value: "en", title: "English" },
        { value: "de", title: "Deutsch" }
      ]
    }
  }
};
