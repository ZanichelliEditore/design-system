import { Config } from "@stencil/core";
import { reactOutputTarget } from "@stencil/react-output-target";

export const config: Config = {
  namespace: "web-components-library",
  globalStyle: "src/global.css",
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
      type: "docs-vscode", // output for Storybook documentation
      file: "custom-elements.json",
    },
    {
      type: "www",
      serviceWorker: null, // disable service workers
      copy: [
        { src: 'pages' },
      ],
    },
  ],
  extras: {
    experimentalImportInjection: true,
  }
};
