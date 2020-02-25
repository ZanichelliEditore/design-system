module.exports = {
    stories: [
        // files MUST end with .story.mdx or .stories.mdx (@see https://github.com/storybookjs/storybook/issues/9918)
        '../web-components-library/src/components/**/*.story.mdx',
        '../web-components-library/src/components/**/*.stories.mdx',
    ],
    addons: [
        '@storybook/addon-viewport/register',
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
