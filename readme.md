# Zanichelli - Web Components Library


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

---

## Publish the Library
```
yarn release
```
