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

##### NB: component name must have a dash (`-`)

----

## Symlink Local Development

#### Run

```
yarn link
```

#### In the destination project folder run

```
yarn link @zanichelli/albe-web-components
```

----

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

----

## Release

In this repository we follow the [Conventional Commits Specification](https://www.conventionalcommits.org/) and we use [standard-version](https://github.com/conventional-changelog/standard-version) to update the [CHANGELOG.md](./CHANGELOG.md) when publishing a new version of the package to NPM.

Standard-version automatically detects the type of the update (patch, minor or major) following the [Semantic Versioning](https://semver.org/) specification.

**Publish a new version on NPM registry**

* Make sure you are logged in NPM
* Run standard-version:

```
yarn release
```

**Specify a version**

If you want to select a version or the update type, you can use the `--release-as` flag:

```
yarn release --release-as path
yarn release --release-as 1.1.0
```

In general, you can pass any flag supported by standard-version, please refer to their [CLI usage](https://github.com/conventional-changelog/standard-version#cli-usage) documentation.

**Publish the new release on GitHub**

You need to [manually create the GitHub release](https://github.com/ZanichelliEditore/design-system/releases/new) in order to update the Storybook documentation.

----

## Documentation

In order to correctly import Stencil Components into the Storybook, we need to build the library first. Stencil will generate properties documentation and it will store them in the `custom-elements.json` which is loaded by Storybook. At the moment, everytime you edit the library sources, you need to rebuild them to get the Storybook updated.

#### Plugins

* [@storybook/addon-a11y](https://www.npmjs.com/package/@storybook/addon-a11y)
* [@storybook/addon-docs](https://www.npmjs.com/package/@storybook/addon-docs)
* [@storybook/addon-knobs](https://www.npmjs.com/package/@storybook/addon-knobs)
* [@storybook/addon-viewport](https://www.npmjs.com/package/@storybook/addon-viewport)
* [storybook-addons-abstract](https://www.npmjs.com/package/storybook-addons-abstract)

#### Start Storybook:

```sh
# Build the library
yarn build
# Start the Storybook
yarn start-storybook
```

#### Build Storybook:

```sh
# Build the library
yarn build
# Build the Storybook
yarn build-storybook
```

#### Developing with Storybook:

Start the Stencil dev server:
```sh
yarn start
```

and, in a separate terminal window, run the Storybook:

```sh
yarn start-storybook
```

----

## Build Library package
```
yarn build
```

# Environment Support

- Modern browsers
- Chromium Edge and Safari 10 with [polyfills](https://stackoverflow.com/questions/57020976/polyfills-in-2019-for-ie11)

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br> Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| > 16.16                                                                                                                                                                                                     | > 48                                                                                                                                                                                                            | > 69                                                                                                                                                                                                        | > 10.0                                                                                                                                                                                                        |

## Usage

### CSS Custom Properties

The library provides a global css variables export. You can import the styles by ES6 import:

```javascript
import '@zanichelli/albe-web-components/www/build/web-components-library.css';
```
or via link tag:

```html
<link type="text/css" rel="stylesheet" href="https://unpkg.com/@zanichelli/albe-web-components/www/build/web-components-library.css" />
```


### Custom Elements

You can use the library by importing the custom elements from npm package:

```javascript
import { defineCustomElements, applyPolyfills } from '@zanichelli/albe-web-components/loader';

applyPolyfills().then(() => {
  defineCustomElements(window);
});
```

or via a script tag:

```html
<script src="https://unpkg.com/@zanichelli/albe-web-components/dist/web-components-library/web-components-library.esm.js"></script> 
```

Then use the relative tag as a usual component in your markup.

```html
<section>
  <z-button label="button" type="primary">Click me!</z-button>
</section>
```

## Component definition

Each component is structured as follows:

| File name       | Description                    |
| --------------- | ------------------------------ |
| `index-ts`      | Component markup and UI logics |
| `styles.css`    | Component styles               |
| `index.spec.ts` | Component tests                |
| `index.stories.mdx` | Component storybook file                |
| `README.md`     | Stencil documentation          |

## Roadmap

- 12 6 2020: Publishing repo v 1.0.0

