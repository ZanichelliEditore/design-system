import type {StorybookConfig} from "@storybook/web-components-webpack5";

const config = {
  framework: {
    name: "@storybook/web-components-webpack5",
    options: {},
  },
  core: {
    disableWhatsNewNotifications: true,
  },
  staticDirs: ["../dist", "../src/assets", {from: "../src/assets/favicon.png", to: "/images/favicon.png"}],
  stories: ["../migration.mdx", "../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    // "storybook-addon-stencil",
    {
      name: "@storybook/addon-docs",
      options: {transcludeMarkdown: true},
    },
    "@storybook/addon-controls",
    "@storybook/addon-viewport",
    "@storybook/addon-webpack5-compiler-swc",
  ],
  docs: {
    autodocs: true,
  },
} satisfies StorybookConfig;

export default config;
