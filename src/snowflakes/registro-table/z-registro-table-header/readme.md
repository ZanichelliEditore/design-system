# z-registro-table-header

<!-- readme-group="registro-table" -->

```html
<z-registro-table-header></z-registro-table-header>
```

<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description                            | Type                                                                                                                                       | Default                     |
| ------------ | ------------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------- |
| `columnId`   | `column-id`   | Column ID                              | `string`                                                                                                                                   | `undefined`                 |
| `showButton` | `show-button` | [Optional] Show contextual menu button | `boolean`                                                                                                                                  | `undefined`                 |
| `size`       | `size`        | [Optional] Padding of the header       | `TableHeaderSize.large \| TableHeaderSize.medium \| TableHeaderSize.small \| TableHeaderSize.special \| typeof TableHeaderSize["x-small"]` | `TableHeaderSize["medium"]` |
| `sortable`   | `sortable`    | [Optional] Make the header sortable    | `boolean`                                                                                                                                  | `undefined`                 |


## Events

| Event  | Description                     | Type               |
| ------ | ------------------------------- | ------------------ |
| `sort` | [Optional] callback for sorting | `CustomEvent<any>` |


## Dependencies

### Depends on

- [z-icon](../../../components/icons/z-icon)
- [z-popover](../../../components/z-popover)
- [z-button](../../../components/buttons/z-button)

### Graph
```mermaid
graph TD;
  z-registro-table-header --> z-icon
  z-registro-table-header --> z-popover
  z-registro-table-header --> z-button
  z-button --> z-icon
  style z-registro-table-header fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
