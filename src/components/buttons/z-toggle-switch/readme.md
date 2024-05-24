# z-toggle-switch

<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description                                       | Type                                        | Default                            |
| --------------- | ---------------- | ------------------------------------------------- | ------------------------------------------- | ---------------------------------- |
| `checked`       | `checked`        | Checked state                                     | `boolean`                                   | `false`                            |
| `disabled`      | `disabled`       | Disabled flag                                     | `boolean`                                   | `false`                            |
| `htmlid`        | `htmlid`         | HTML id attribute to set to the internal checkbox | `string`                                    | ``toggle-switch-id-${randomId()}`` |
| `labelPosition` | `label-position` | Label position                                    | `LabelPosition.LEFT \| LabelPosition.RIGHT` | `LabelPosition.LEFT`               |


## Events

| Event         | Description        | Type               |
| ------------- | ------------------ | ------------------ |
| `toggleClick` | Toggle click event | `CustomEvent<any>` |


## Dependencies

### Depends on

- [z-icon](../../z-icon)

### Graph
```mermaid
graph TD;
  z-toggle-switch --> z-icon
  style z-toggle-switch fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
