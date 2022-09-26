module.exports = {
  framework: "@storybook/web-components",
  core: {
    builder: "webpack5",
  },
  staticDirs: ["../dist", "../src/assets", {from: "../src/assets/favicon.png", to: "/images/favicon.png"}],
  stories: ["../**/*.stories.mdx"],
  addons: [
    "storybook-addon-stencil",
    {
      name: "@storybook/addon-docs",
      options: {transcludeMarkdown: true},
    },
    "@storybook/addon-controls",
    "@storybook/addon-viewport",
    "@storybook/addon-knobs",
  ],
};
