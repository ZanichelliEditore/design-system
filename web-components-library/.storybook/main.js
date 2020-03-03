module.exports = {
    stories: [
        // files MUST end with .story.mdx or .stories.mdx (@see https://github.com/storybookjs/storybook/issues/9918)
        '../src/components/**/*.story.mdx',
        '../src/components/**/*.stories.mdx',
    ],
    addons: [
        '@storybook/addon-viewport/register',
        '@storybook/addon-knobs/register',
        {
            name: '@storybook/addon-docs',
            options: {
                configureJSX: true,
                babelOptions: {},
                sourceLoaderOptions: null,
            },
        },
    ],
};
