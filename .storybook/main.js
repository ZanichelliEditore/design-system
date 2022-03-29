module.exports = {
  core: {
    builder: "webpack5"
  },
  staticDirs: [
    "../dist",
    "../src/assets",
    { from: "../src/assets/favicon.png", to: "/images/favicon.png" }
  ],
  stories: ["../src/**/*.stories.mdx"],
  addons: [
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    },
    "@storybook/addon-controls",
    "@storybook/addon-viewport",
    "@storybook/addon-knobs",
    "@storybook/addon-a11y",
    "storybook-addons-abstract",
  ],
};
