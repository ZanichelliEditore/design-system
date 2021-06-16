# z-card



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description                                    | Type      | Default     |
| ----------- | ------------ | ---------------------------------------------- | --------- | ----------- |
| `clickable` | `clickable`  |                                                | `boolean` | `false`     |
| `coverIcon` | `cover-icon` | Name of the icon to place over the image cover | `string`  | `undefined` |
| `variant`   | `variant`    |                                                | `string`  | `undefined` |


## Events

| Event         | Description | Type               |
| ------------- | ----------- | ------------------ |
| `cardClicked` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [z-icon](../../icons/z-icon)

### Graph
```mermaid
graph TD;
  z-card-cover --> z-icon
  style z-card-cover fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
