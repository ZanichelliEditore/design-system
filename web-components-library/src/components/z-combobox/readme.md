# z-combobox



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute           | Description | Type                        | Default              |
| ------------------- | ------------------- | ----------- | --------------------------- | -------------------- |
| `closesearchtext`   | `closesearchtext`   |             | `string`                    | `undefined`          |
| `hassearch`         | `hassearch`         |             | `boolean`                   | `false`              |
| `inputid`           | `inputid`           |             | `string`                    | `undefined`          |
| `isfixed`           | `isfixed`           |             | `boolean`                   | `false`              |
| `isopen`            | `isopen`            |             | `boolean`                   | `true`               |
| `items`             | `items`             |             | `ComboItemBean[] \| string` | `undefined`          |
| `label`             | `label`             |             | `string`                    | `undefined`          |
| `noresultslabel`    | `noresultslabel`    |             | `string`                    | `"Nessun risultato"` |
| `searchlabel`       | `searchlabel`       |             | `string`                    | `undefined`          |
| `searchplaceholder` | `searchplaceholder` |             | `string`                    | `undefined`          |
| `searchtitle`       | `searchtitle`       |             | `string`                    | `undefined`          |


## Events

| Event            | Description | Type               |
| ---------------- | ----------- | ------------------ |
| `comboboxChange` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [z-icon](../z-icon)
- [z-list-item](../z-list-item)
- [z-input](../z-input)
- [z-input-text](../z-input-text)

### Graph
```mermaid
graph TD;
  z-combobox --> z-icon
  z-combobox --> z-list-item
  z-combobox --> z-input
  z-combobox --> z-input-text
  z-list-item --> z-icon
  z-input --> z-icon
  z-input --> z-input-text
  z-input-text --> z-icon
  style z-combobox fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
