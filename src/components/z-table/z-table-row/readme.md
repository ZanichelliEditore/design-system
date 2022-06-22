# z-table-row



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description | Type                                                                                              | Default                      |
| -------------- | --------------- | ----------- | ------------------------------------------------------------------------------------------------- | ---------------------------- |
| `expandedType` | `expanded-type` |             | `ZTableRowExpandedType.expandable \| ZTableRowExpandedType.none \| ZTableRowExpandedType.padding` | `ZTableRowExpandedType.none` |


## Events

| Event    | Description | Type               |
| -------- | ----------- | ------------------ |
| `expand` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [z-table-cell](../z-table-cell)
- [z-icon](../../icons/z-icon)

### Graph
```mermaid
graph TD;
  z-table-row --> z-table-cell
  z-table-row --> z-icon
  z-table-cell --> z-button-deprecated
  z-button-deprecated --> z-icon
  style z-table-row fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
