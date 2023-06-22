# z-tr



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description                                                                                                                                                                                                            | Type      | Default |
| ------------ | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------- |
| `expandable` | `expandable` | Whether the row is expandable. Use a `z-td` as the last cell of the row for the additional content. It will show a button to expand/collapse the row. The last cell will be hidden until the button or row is clicked. | `boolean` | `false` |


## Events

| Event    | Description           | Type               |
| -------- | --------------------- | ------------------ |
| `expand` | Row has been expanded | `CustomEvent<any>` |


## Dependencies

### Depends on

- [z-icon](../../icons/z-icon)

### Graph
```mermaid
graph TD;
  z-tr --> z-icon
  style z-tr fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
