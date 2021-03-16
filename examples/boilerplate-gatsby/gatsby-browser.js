const { defineCustomElements } = require("@scaleds/components-telekom/loader");

exports.onInitialClientRender = ({ element }, options) => {
  defineCustomElements(window);
};
