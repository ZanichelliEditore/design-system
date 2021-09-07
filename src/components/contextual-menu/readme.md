# contextual-menu



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                            | Type     | Default             |
| ---------- | ---------- | ------------------------------------------------------ | -------- | ------------------- |
| `color`    | `color`    | [optional] Sets text color of ContextualMenu's content | `string` | `"color-primary01"` |
| `elements` | `elements` | elements of ContextualMenu                             | `string` | `undefined`         |


## Events

| Event                 | Description                                 | Type               |
| --------------------- | ------------------------------------------- | ------------------ |
| `clickContextualMenu` | remove filter click event, returns filterid | `CustomEvent<any>` |


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
