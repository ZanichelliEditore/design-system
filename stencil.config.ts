import image from "@rollup/plugin-image";
import {Config} from "@stencil/core";
import {reactOutputTarget} from "@stencil/react-output-target";

export const config: Config = {
  namespace: "web-components-library",
  globalStyle: "src/global.css",
  plugins: [image()],
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader",
    },
    reactOutputTarget({
      componentCorePackage: require("./package.json").name,
      proxiesFile: "./src-react/components.ts",
    }),
    {
      type: "docs-readme",
    },
    {
      type: "docs-vscode",
      file: "docs-vscode.json",
      sourceCodeBaseUrl: "https://github.com/ZanichelliEditore/design-system",
    },
    {
      type: "www",
      serviceWorker: null, // disable service workers
      copy: [{src: "pages"}],
    },
    {
      type: "dist-custom-elements",
      customElementsExportBehavior: "single-export-module",
    },
  ],
  extras: {
    enableImportInjection: true,
    experimentalSlotFixes: true,
  },
  testing: {
    moduleNameMapper: {
      "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/src/__mocks__/fileMock.ts",
    },
    testPathIgnorePatterns: ["./storybook/*", "./dist/*"],
  },
} satisfies Config;
