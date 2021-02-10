const { useTheme } = require("@scaleds/components-telekom/dist/theme");
const { defineCustomElements } = require("@scaleds/components-telekom/loader");


exports.onInitialClientRender = ({ element }, options) => {
  useTheme(options.theme);
  defineCustomElements(window);
};
