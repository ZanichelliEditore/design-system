import {Config} from "@stencil/core";
import {reactOutputTarget} from "@stencil/react-output-target";

export const config: Config = {
  namespace: "web-components-library",
  globalStyle: "src/global.css",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader",
      polyfills: true,
    },
    reactOutputTarget({
      componentCorePackage: require("./package.json").name,
      proxiesFile: "./src-react/components.ts",
    }),
    {
      type: "docs-readme",
    },
    {
      type: "docs-vscode", // output for Storybook documentation
      file: "custom-elements.json",
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
    experimentalImportInjection: true,
  },
};
