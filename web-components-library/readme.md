# Zanichelli - Web Components Library

---

### Per generare un componente da cli senza Styled-stencil e con shadow dom e file di unit test:

`yarn generate raw` + `nome-componente`

### Per generare un componente da cli con Styled-stencil:

`yarn generate component` + `nome-componente`

##### NB: il nome dei componenti deve contenere un dash (`-`)

## Sviluppo della libreria tramite symlink

All'interno di web-components-library e lanciare il seguente comando

```
yarn link
```

Entrare dentro myzanichelli_dashboard ed eseguire il seguente comando

```
yarn link zanichelli-web-components-library
```

## To run tests:

### run all tests

`yarn test`

### run single test

`yarn test --spec {componentPath}`

Example: `yarn test --spec /components/z-button`
