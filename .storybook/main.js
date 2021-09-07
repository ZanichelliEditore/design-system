module.exports = {
  stories: [
    // files MUST end with .story.mdx or .stories.mdx (@see https://github.com/storybookjs/storybook/issues/9918)
    "../src/themes/*.story.mdx",
    "../src/components/**/*.story.mdx",
    "../src/components/**/*.stories.mdx",
    "../src/snowflakes/**/*.story.mdx",
    "../src/snowflakes/**/*.stories.mdx",
  ],
  addons: [
    "@storybook/addon-viewport/register",
    "@storybook/addon-knobs/register",
    "@storybook/addon-a11y/register",
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
