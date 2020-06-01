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

#### Start storybook:

```
yarn storybook
```

#### Build storybook docs:

```
yarn build-storybook
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
