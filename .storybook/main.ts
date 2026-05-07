import {StorybookConfig} from "@stencil/storybook-plugin";

const config: StorybookConfig = {
  framework: "@stencil/storybook-plugin",
  core: {
    disableWhatsNewNotifications: true,
    disableTelemetry: true,
  },
  staticDirs: ["../src/assets"],
  stories: ["../docs/**/*.mdx", "../docs/**/*.stories.@(js|jsx|ts|tsx)", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-docs", "@storybook/addon-themes"],
};

export default config;
