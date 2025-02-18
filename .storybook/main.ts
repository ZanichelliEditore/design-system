import type {StorybookConfig} from "@storybook/web-components-vite";

const config = {
  framework: "@storybook/web-components-vite",
  core: {
    disableWhatsNewNotifications: true,
    disableTelemetry: true,
  },
  staticDirs: ["../src/assets"],
  stories: [
    "../docs/**/*.mdx",
    "../docs/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/**/index.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-docs", "@storybook/addon-viewport", "@storybook/addon-themes", "storybook-addon-stencil"],
} satisfies StorybookConfig;

export default config;
