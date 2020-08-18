const { useTheme } = require("@scaleds/components-telekom/dist/theme");

exports.onInitialClientRender = ({ element }, options) => {
  useTheme(options.theme);
};
