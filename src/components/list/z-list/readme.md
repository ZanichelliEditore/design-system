# z-list

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description                                         | Type                                                                                       | Default           |
| ---------- | ----------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------ | ----------------- |
| `listType` | `list-type` | [optional] type of the list marker for each element | `ListType.NONE \| ListType.ORDERED \| ListType.UNORDERED`                                  | `ListType.NONE`   |
| `role`     | `role`      | Sets role of the element.                           | `string`                                                                                   | `"list"`          |
| `size`     | `size`      | [optional] Sets size of inside elements.            | `ListSize.LARGE \| ListSize.MEDIUM \| ListSize.NONE \| ListSize.SMALL \| ListSize.X_LARGE` | `ListSize.MEDIUM` |


## Dependencies

### Used by

 - [z-breadcrumb](../../z-breadcrumb)
 - [z-searchbar](../../z-searchbar)
 - [z-select](../../z-select)
 - [z-tree-list](../z-tree-list)

### Graph
```mermaid
graph TD;
  z-breadcrumb --> z-list
  z-searchbar --> z-list
  z-select --> z-list
  z-tree-list --> z-list
  style z-list fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
