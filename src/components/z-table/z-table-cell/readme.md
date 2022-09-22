# z-table-cell

<!-- Auto Generated Below -->

## Properties

| Property     | Attribute     | Description                                                  | Type                                                                                  | Default       |
| ------------ | ------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------- | ------------- |
| `padding`    | `padding`     | Set padding size of cell, if special 0px padding will be set | `(typeof Size)["x-small"] \| Size.large \| Size.medium \| Size.small \| Size.special` | `Size.medium` |
| `showButton` | `show-button` | [Optional] Show contextual menu button                       | `boolean`                                                                             | `undefined`   |

## Dependencies

### Used by

- [z-table-row](../z-table-row)

### Depends on

- [z-button](../../buttons/z-button)

### Graph

```mermaid
graph TD;
  z-table-cell --> z-button
  z-button --> z-icon
  z-table-row --> z-table-cell
  style z-table-cell fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
