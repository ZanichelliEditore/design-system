# z-tree-list



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description        | Type             | Default     |
| ----------- | ----------- | ------------------ | ---------------- | ----------- |
| `clickable` | `clickable` | Items is clickable | `boolean`        | `undefined` |
| `items`     | --          | Items to render    | `TreeListItem[]` | `[]`        |


## Events

| Event         | Description           | Type                                                                                                                                    |
| ------------- | --------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `itemClicked` | Emitted on item click | `CustomEvent<{ id: string; name: string; url: string; icon?: string; disabled?: boolean; bold?: boolean; children?: TreeListItem[]; }>` |


## Dependencies

### Depends on

- [z-list-element](../z-list-element)
- [z-icon](../../z-icon)
- [z-list](../z-list)

### Graph
```mermaid
graph TD;
  z-tree-list --> z-list-element
  z-tree-list --> z-icon
  z-tree-list --> z-list
  z-list-element --> z-icon
  z-list-element --> z-divider
  style z-tree-list fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
