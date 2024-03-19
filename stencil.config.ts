import {Config} from "@stencil/core";
import {reactOutputTarget} from "@stencil/react-output-target";

export const config: Config = {
  namespace: "web-components-library",
  globalStyle: "src/global.css",
  outputTargets: [
    {
      type: "dist",
      polyfills: true,
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
      file: "custom-elements.json",
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
};
