![Zanichelli logo](https://www.zanichelli.it/static/zanichelli/templates/zanichelli/_template_style/images/logo-print.png)

# Zanichelli - Web Components Library

Zanichelli's design system is widely documented on Zeroheight at this [link](https://zeroheight.com/485b31545).

## Install

```bash
yarn add zanichelli-web-components-library
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
yarn link zanichelli-web-components-library
```

----

## Tests:

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

- Modern browsers and Internet Explorer 11 (with [polyfills](https://stackoverflow.com/questions/57020976/polyfills-in-2019-for-ie11))

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| IE11, Edge                                                                                                                                                                                                     | XXXXX                                                                                                                                                                                                            | XXXXX                                                                                                                                                                                                        | XXXXX                                                                                                                                                                                                        |

## Usage

```javascript
import { defineCustomElements as defineComponents } from 'zanichelli-web-components-library/loader';

defineComponents(window);
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
| `index.spec.ts` | Compoentn tests                |
| `README.md`     | Stencil documentation          |

## Roadmap

- 12 6 2020: Publishing repo v 1.0.0

