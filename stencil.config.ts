import image from "@rollup/plugin-image";
import {Config} from "@stencil/core";
import {reactOutputTarget} from "@stencil/react-output-target";

const isStencilDevBuild = process.argv.includes("--dev");
const isStorybookDevBuild = process.env.STORYBOOK_DEV === "1";

const outputTargets: Config["outputTargets"] = [
  {
    type: "dist-custom-elements",
    customElementsExportBehavior: "single-export-module",
  },
];

// The Storybook Stencil addon (@stencil/storybook-plugin) uses `unplugin-stencil` internally,
// which triggers a programmatic `compiler.build()` during Storybook page load and HMR.
// That programmatic code path reads our `stencil.config.ts` and runs all output targets it finds,
// but does so incompletely: for example, it rewrites readme files without collecting CSS custom
// properties metadata (unlike the normal `stencil build` CLI path), causing the "CSS Custom
// Properties" section to be dropped from every component `.readme` on each HMR cycle.
// The same risk applies to other doc/artifact targets.
// To prevent any incomplete output, we restrict the programmatic Storybook build to only
// the `dist-custom-elements` target, which is the one actually needed to serve components in
// Storybook. All other targets are disabled via the `STORYBOOK_DEV` env var or `--dev` flag in Stencil build.
if (!isStorybookDevBuild && !isStencilDevBuild) {
  outputTargets.push(
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
      type: "docs-json",
      file: "./custom-elements.json",
    }
  );
}

// The `www` output target is only needed for local development when serving the Stencil demo app (with `yarn start`).
if (isStencilDevBuild) {
  outputTargets.push({
    type: "www",
    serviceWorker: null, // disable service workers
    empty: true,
  });
}

export const config: Config = {
  namespace: "web-components-library",
  globalStyle: "src/global.css",
  plugins: [image()],
  tsconfig: "tsconfig.stencil.json",
  // Keep source maps enabled in local (non-production) builds so Storybook DevTools can map components to their source files.
  sourceMap: isStorybookDevBuild || isStencilDevBuild,
  outputTargets,
  extras: {
    enableImportInjection: true,
    experimentalScopedSlotChanges: true,
    appendChildSlotFix: true,
    cloneNodeFix: true,
    scopedSlotTextContentFix:
      false /* setting this to true will break the retrieval of `textContent` in the `componentWillLoad` lifecycle method */,
    slotChildNodesFix: true,
  },
  testing: {
    moduleNameMapper: {
      "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/src/__mocks__/fileMock.ts",
    },
    modulePathIgnorePatterns: ["<rootDir>/dist/"],
    testPathIgnorePatterns: ["/storybook/", "/dist/"],
  },
} satisfies Config;
