# z-date-picker



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description | Type      | Default     |
| ---------- | ----------- | ----------- | --------- | ----------- |
| `id`       | `id`        |             | `string`  | `undefined` |
| `showTime` | `show-time` |             | `boolean` | `undefined` |


## Events

| Event        | Description | Type               |
| ------------ | ----------- | ------------------ |
| `dateSelect` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [z-input](../inputs/z-input)

### Graph
```mermaid
graph TD;
  z-date-picker --> z-input
  z-input --> z-input-label
  z-input --> z-icon
  z-input --> z-input-message
  z-input --> z-select
  z-input-message --> z-icon
  z-select --> z-input-label
  z-select --> z-input
  z-select --> z-button-filter
  z-select --> z-icon
  z-select --> z-input-message
  z-button-filter --> z-icon
  style z-date-picker fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
