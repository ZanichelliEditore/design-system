# z-toggle-switch



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute       | Description | Type      | Default              |
| --------------- | --------------- | ----------- | --------- | -------------------- |
| `checked`       | `checked`       |             | `boolean` | `false`              |
| `disabled`      | `disabled`      |             | `boolean` | `false`              |
| `htmlid`        | `htmlid`        |             | `string`  | ``id-${randomId()}`` |
| `labelposition` | `labelposition` |             | `boolean` | `false`              |


## Events

| Event         | Description | Type               |
| ------------- | ----------- | ------------------ |
| `toggleClick` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [z-body](../../typography/z-body)
- [z-icon](../../icons/z-icon)

### Graph
```mermaid
graph TD;
  z-toggle-switch --> z-body
  z-toggle-switch --> z-icon
  z-body --> z-typography
  style z-toggle-switch fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
