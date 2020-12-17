module.exports = {
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-controls",
    "./usage-addon/register.js",
    "@storybook/addon-toolbars"
  ],
  stories: ["../stories/**/**/*.stories.mdx"]
};
