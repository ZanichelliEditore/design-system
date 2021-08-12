# contextual-menu



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                           | Type     | Default     |
| ---------- | ---------- | ----------------------------------------------------- | -------- | ----------- |
| `elements` | `elements` | deprecated - JSON stringified data to fill the footer | `string` | `undefined` |


## Dependencies

### Depends on

- [z-popover](../z-popover)
- [z-icon](../icons/z-icon)
- [z-list](../list/z-list)
- [z-list-group](../list/z-list-group)
- [z-list-element](../list/z-list-element)

### Graph
```mermaid
graph TD;
  contextual-menu --> z-popover
  contextual-menu --> z-icon
  contextual-menu --> z-list
  contextual-menu --> z-list-group
  contextual-menu --> z-list-element
  z-list-group --> z-divider
  z-list-element --> z-icon
  z-list-element --> z-divider
  style contextual-menu fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
