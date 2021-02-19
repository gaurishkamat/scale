const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = async ({ config }) => {
  config.plugins.push(
    new CopyWebpackPlugin({
      patterns: [{ from: "../components/src/theme/fonts", to: "fonts" }],
    })
  );

  return config;
};