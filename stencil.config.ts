import { Config } from "@stencil/core";
import { reactOutputTarget } from "@stencil/react-output-target";

export const config: Config = {
  namespace: "web-components-library",
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
    },
  ],
  globalStyle: "src/globals/global-styles.css"
};
