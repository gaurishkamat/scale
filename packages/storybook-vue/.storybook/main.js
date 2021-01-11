module.exports = {
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-controls",
    "./usage-addon/register.js",
    "./language-addon/register.js",
  ],
  stories: ["../stories/**/**/*.stories.mdx"]
};
