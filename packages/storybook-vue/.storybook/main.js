// const { merge } = require('webpack-merge');
module.exports = {
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-controls"
  ],
  stories: ["../stories/**/*.stories.mdx"]
};
