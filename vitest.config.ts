import {playwright} from "@vitest/browser-playwright";
import {defineConfig, mergeConfig} from "vitest/config";

import {storybookTest} from "@storybook/addon-vitest/vitest-plugin";

import path from "node:path";
import {fileURLToPath} from "node:url";

const dirname = path.dirname(fileURLToPath(import.meta.url));

import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      projects: [
        {
          extends: true,
          plugins: [
            storybookTest({
              // The location of your Storybook config, main.js|ts
              configDir: path.join(dirname, ".storybook"),
              // This should match the package.json script to run Storybook
              // The --no-open flag will skip the automatic opening of a browser
              storybookScript: "yarn start-storybook --no-open",
              storybookUrl: "http://localhost:3003",
            }),
          ],
          optimizeDeps: {
            include: ["@stencil/core/internal/client"],
          },
          test: {
            name: "storybook",
            // Enable browser mode
            browser: {
              enabled: true,
              // Make sure to install Playwright
              provider: playwright({}),
              headless: true,
              // https://vitest.dev/config/browser/playwright
              instances: [{browser: "chromium"}],
            },
          },
        },
      ],
    },
  })
);
