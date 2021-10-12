# z-registro-table-row

<!-- readme-group="registro-table" -->

```html
<z-registro-table-row></z-registro-table-row>
```

<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description | Type  | Default     |
| ------------ | ------------ | ----------- | ----- | ----------- |
| `expandable` | `expandable` |             | `any` | `undefined` |


## Events

| Event    | Description | Type               |
| -------- | ----------- | ------------------ |
| `expand` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [z-registro-table-cell](../z-registro-table-cell)
- [z-icon](../../../components/icons/z-icon)

### Graph
```mermaid
graph TD;
  z-registro-table-row --> z-registro-table-cell
  z-registro-table-row --> z-icon
  z-registro-table-cell --> z-button
  z-button --> z-icon
  style z-registro-table-row fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
