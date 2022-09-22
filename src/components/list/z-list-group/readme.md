# z-list-group

<!-- Auto Generated Below -->

## Properties

| Property       | Attribute       | Description                                               | Type                                                                        | Default                |
| -------------- | --------------- | --------------------------------------------------------- | --------------------------------------------------------------------------- | ---------------------- |
| `dividerColor` | `divider-color` | [optional] Sets the divider color.                        | `string`                                                                    | `"gray200"`            |
| `dividerSize`  | `divider-size`  | [optional] Sets the divider size.                         | `DividerSize.LARGE \| DividerSize.MEDIUM \| DividerSize.SMALL`              | `DividerSize.SMALL`    |
| `dividerType`  | `divider-type`  | [optional] Sets the position where to insert the divider. | `ListDividerType.ELEMENT \| ListDividerType.HEADER \| ListDividerType.NONE` | `ListDividerType.NONE` |
| `size`         | `size`          | [optional] Sets size of inside elements.                  | `ListSize.LARGE \| ListSize.MEDIUM \| ListSize.SMALL \| ListSize.X_LARGE`   | `ListSize.MEDIUM`      |

## Dependencies

### Used by

- [z-contextual-menu](../../z-contextual-menu)

### Depends on

- [z-divider](../../z-divider)

### Graph

```mermaid
graph TD;
  z-list-group --> z-divider
  z-contextual-menu --> z-list-group
  style z-list-group fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
