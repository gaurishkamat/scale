const { defineCustomElements } = require("@scaleds/telekom-components/loader");

exports.onInitialClientRender = ({ element }, options) => {
  defineCustomElements(window);
};
