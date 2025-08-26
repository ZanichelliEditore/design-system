![Zanichelli logo](https://www.zanichelli.it/static/zanichelli/templates/zanichelli/_template_style/images/logo-print.png)

# Zanichelli - Web Components Library

Zanichelli's design system is widely documented on Zeroheight at this [link](https://zeroheight.com/485b31545).

## Install

```bash
yarn add @zanichelli/albe-web-components
```

## Start Library Development Server

```
yarn start
```

---

## Create a component:

```
yarn generate component my-component
```

> NB: component name must have a dash (`-`)

---

## Symlink Local Development

#### Run

```
yarn link
```

#### In the destination project folder run

```
yarn link @zanichelli/albe-web-components
```

---

## Tests

#### Run all tests

```
yarn test
```

#### Run single test

```
yarn test --spec {componentPath}
```

#### Run e2e tests

```
yarn test.e2e
```

---

## Linting and autofixing of the code style

There are some tools installed to help keeping uniformity of code style:

- [Eslint](https://eslint.org/)
- [Stylelint](https://stylelint.io/)
- [Prettier](https://prettier.io/)

> Install the related official extensions in your IDE to get live errors and warning while coding.

### Run lint checks and auto-fix

#### Prettier check

```sh
yarn prettier-check
```

#### Prettier auto-format

```sh
yarn prettify
```

#### TypeScript lint check

```sh
yarn lint.eslint
```

#### CSS lint check

```sh
yarn lint.stylelint
```

#### TypeScript auto-fix

```sh
yarn lint-fix.eslint
```

#### CSS auto-fix

```sh
yarn lint-fix.stylelint
```

## Release

In this repository we follow the [Conventional Commits Specification](https://www.conventionalcommits.org/) and we use [standard-version](https://github.com/conventional-changelog/standard-version) to update the [CHANGELOG.md](./CHANGELOG.md) when publishing a new version of the package to NPM.

Standard-version automatically detects the type of the update (patch, minor or major) following the [Semantic Versioning](https://semver.org/) specification.

**Publish a release using GitHub actions**

- Access GitHub and log in as an authorized user
- Go to the repository in the section [New release version](https://github.com/ZanichelliEditore/design-system/actions/workflows/release.yml)
- Click on `Run workflow` (on the right in the blue box)
- To release a **latest version:** choose master as the branch and select the version type (patch, minor, major) from the dropdown, then click on the `Run workflow` button.
- To release a **release candidate version** specify the branch, the version tag and the version name, then click the button.

---

#### Plugins

- [storybook-addon-stencil](https://github.com/ZanichelliEditore/storybook-addon-stencil) - custom Storybook plugin for Stencil
- [@storybook/addon-controls](https://www.npmjs.com/package/@storybook/addon-controls)
- [@storybook/addon-docs](https://www.npmjs.com/package/@storybook/addon-docs)
- [@storybook/addon-viewport](https://www.npmjs.com/package/@storybook/addon-viewport)

### Start Storybook:

```sh
# Start Storybook
yarn start-storybook
```

local development with Storybook comes with live reloading.

### Build Storybook:

```sh
# Build the library
yarn build
# Build Storybook
yarn build-storybook
```

---

## Build Library package

```
yarn build
```

# Environment Support

- Modern browsers
- Chromium Edge and Safari 10 with [polyfills](https://stackoverflow.com/questions/57020976/polyfills-in-2019-for-ie11)

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br> Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| > 16.16                                                                                                                                                                                                    | > 48                                                                                                                                                                                                             | > 69                                                                                                                                                                                                         | > 10.0                                                                                                                                                                                                       |

## Usage

### CSS Custom Properties

The library provides a global css variables export. You can import the styles by ES6 import:

```javascript
import "@zanichelli/albe-web-components/www/build/web-components-library.css";
```

or via link tag:

```html
// using jsDelivr
<link
  type="text/css"
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@zanichelli/albe-web-components/www/build/web-components-library.css"
/>

// using unpkg
<link
  type="text/css"
  rel="stylesheet"
  href="https://unpkg.com/@zanichelli/albe-web-components/www/build/web-components-library.css"
/>
```

### Custom Elements

You can use the library by importing the custom elements from npm package:

```javascript
import {defineCustomElements} from "@zanichelli/albe-web-components/loader";

defineCustomElements(window);
```

or via a script tag:

```html
// using jsDelivr
<script src="https://cdn.jsdelivr.net/npm/@zanichelli/albe-web-components/dist/web-components-library/web-components-library.esm.js"></script>

// using unpkg
<script src="https://unpkg.com/@zanichelli/albe-web-components/dist/web-components-library/web-components-library.esm.js"></script>
```

Then use the relative tag as a usual component in your markup.

```html
<section>
  <z-button variant="primary">Click me!</z-button>
</section>
```

### Using React bindings

Albe's Web Components come with automatically generated React bindings. This means that you can use Web Components in a React application without the need to wrap component references, with full intellisense support thanks to TypeScript definition files for bindings.

Import components reference from the React submodule:

```javascript
import React from "react";
import ReactDOM from "react-dom";
import "@zanichelli/albe-web-components/www/build/web-components-library.css";
import {defineCustomElements} from "@zanichelli/albe-web-components/loader";
import {ZButton} from "@zanichelli/albe-web-components/react";

defineCustomElements(window);

ReactDOM.render(<ZButton>Click me</ZButton>, document.getElementById("root"));
```

## Component definition

Each component is structured as follows:

| File name          | Description                  |
| ------------------ | ---------------------------- |
| `index.tsx`        | Markup and UI logics         |
| `styles.css`       | Styles                       |
| `index.spec.ts`    | Tests                        |
| `index.mdx`        | Storybook's markdown         |
| `index.stories.ts` | Storybook's CSF stories      |
| `readme.md`        | Auto-generated documentation |
