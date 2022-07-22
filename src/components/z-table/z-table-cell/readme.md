# z-table-cell



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description                                                  | Type                                                                                | Default       |
| ------------ | ------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------- | ------------- |
| `padding`    | `padding`     | Set padding size of cell, if special 0px padding will be set | `Size.large \| Size.medium \| Size.small \| Size.special \| typeof Size["x-small"]` | `Size.medium` |
| `showButton` | `show-button` | [Optional] Show contextual menu button                       | `boolean`                                                                           | `undefined`   |


## Dependencies

### Used by

 - [z-table-row](../z-table-row)

### Depends on

- [z-button-deprecated](../../../deprecated/z-button-deprecated)

### Graph
```mermaid
graph TD;
  z-table-cell --> z-button-deprecated
  z-button-deprecated --> z-icon
  z-table-row --> z-table-cell
  style z-table-cell fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
