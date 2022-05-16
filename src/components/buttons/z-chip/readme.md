# z-chip



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description | Type                                                       | Default             |
| ----------------- | ------------------ | ----------- | ---------------------------------------------------------- | ------------------- |
| `disabled`        | `disabled`         |             | `boolean`                                                  | `false`             |
| `icon`            | `icon`             |             | `string`                                                   | `undefined`         |
| `iconPosition`    | `icon-position`    |             | `"left" \| "right"`                                        | `"left"`            |
| `interactiveIcon` | `interactive-icon` |             | `string`                                                   | `undefined`         |
| `type`            | `type`             |             | `ZChipType.default \| ZChipType.medium \| ZChipType.small` | `ZChipType.default` |


## Events

| Event                  | Description | Type               |
| ---------------------- | ----------- | ------------------ |
| `interactiveIconClick` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [z-icon](../../icons/z-icon)

### Graph
```mermaid
graph TD;
  z-chip --> z-icon
  style z-chip fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
