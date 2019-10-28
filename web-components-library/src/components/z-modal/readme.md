# z-modal



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute       | Description | Type     | Default     |
| --------------- | --------------- | ----------- | -------- | ----------- |
| `closelabel`    | `closelabel`    |             | `string` | `'chiudi'`  |
| `modalid`       | `modalid`       |             | `string` | `undefined` |
| `modalsubtitle` | `modalsubtitle` |             | `string` | `undefined` |
| `modaltitle`    | `modaltitle`    |             | `string` | `undefined` |


## Events

| Event        | Description | Type               |
| ------------ | ----------- | ------------------ |
| `modalClose` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [z-link](../z-link)
- [z-icon](../z-icon)

### Graph
```mermaid
graph TD;
  z-modal --> z-link
  z-modal --> z-icon
  z-link --> z-icon
  style z-modal fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
