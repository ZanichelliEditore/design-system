module.exports = {
  framework: "@storybook/web-components",
  core: {
    builder: "webpack5"
  },
  staticDirs: [
    "../dist",
    "../src/assets",
    { from: "../src/assets/favicon.png", to: "/images/favicon.png" }
  ],
  stories: ["../**/*.stories.mdx"],
  addons: [
    "storybook-addon-stencil",
    "@storybook/addon-docs",
    "@storybook/addon-controls",
    "@storybook/addon-viewport",
    "@storybook/addon-knobs",
    "@storybook/addon-a11y",
  ],
};
