// const { merge } = require('webpack-merge');
module.exports = {
  addons: [
    "@storybook/addon-actions/register",
    "@storybook/addon-links/register",
    "@storybook/addon-controls/register",
    "@storybook/addon-docs/register"
  ],
  stories: ["../stories/**/*.stories.@(js|mdx)"]
};
