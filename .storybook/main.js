module.exports = {
  core: {
    builder: 'webpack5',
  },
  staticDirs: [
    '../dist',
    '../src/assets',
    { from: '../src/assets/favicon.png', to: '/images/favicon.png' }
  ],
  stories: [
    // files MUST end with .story.mdx or .stories.mdx (@see https://github.com/storybookjs/storybook/issues/9918)
    "../src/themes/*.story.mdx",
    "../src/components/**/*.story.mdx",
    "../src/components/**/*.stories.mdx",
    "../src/snowflakes/**/*.story.mdx",
    "../src/snowflakes/**/*.stories.mdx",
  ],
  addons: [
    "@storybook/addon-viewport",
    "@storybook/addon-knobs",
    "@storybook/addon-a11y",
    "storybook-addons-abstract",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    },
  ],
};
