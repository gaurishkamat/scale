const CopyWebpackPlugin = require("copy-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = async ({ config }) => {
  config.plugins.push(
    new CopyWebpackPlugin({
      patterns: [{ from: "../components/src/theme/fonts", to: "fonts" }]
    })
  );
  config.module.rules.push(
    {
      test: /\.mdx$/,
      use: ['babel-loader', '@mdx-js/loader'],
    }
  );
  // config.module.rules.push(
  //  {
  //    test: /\.vue|.js$/,
  //    use: 'vue-loader'
  //  },
  // );
  // config.module.rules.push(
  //    {
  //      test: /\.vue|.js$/,
  //      use: 'vue-docgen-loader',
  //      enforce: 'post'
  //    }
  // );
  // config.plugins.push(
  //  new VueLoaderPlugin()
  // );

  return config;
};
