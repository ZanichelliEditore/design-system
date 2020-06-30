import { Config } from "@stencil/core";
export const config: Config = {
  namespace: "web-components-library",
  srcDir: 'src',
  buildEs5: true,
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader"
    },
    {
      type: "docs-readme"
    },
    {
      type: "docs-vscode", // output for Storybook documentation
      file: "custom-elements.json"
    },
    {
      type: "www",
      serviceWorker: null // disable service workers
    }
  ],
  globalStyle: "src/globals/global-styles.css",
  extras: {
    appendChildSlotFix: true,
    cloneNodeFix: true,
    slotChildNodesFix: true,
  }
};
