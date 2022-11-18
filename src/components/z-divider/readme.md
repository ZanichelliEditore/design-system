# z-divider

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                   | Type                                                           | Default                         |
| ------------- | ------------- | ----------------------------- | -------------------------------------------------------------- | ------------------------------- |
| `color`       | `color`       | [optional] Divider color      | `string`                                                       | `"gray200"`                     |
| `orientation` | `orientation` | [optional] Divider orintation | `DividerOrientation.HORIZONTAL \| DividerOrientation.VERTICAL` | `DividerOrientation.HORIZONTAL` |
| `size`        | `size`        | [optional] Divider size       | `DividerSize.LARGE \| DividerSize.MEDIUM \| DividerSize.SMALL` | `DividerSize.SMALL`             |


## Dependencies

### Used by

 - [z-app-topbar](../navigation/z-app-topbar)
 - [z-file-upload](../file-upload/z-file-upload)
 - [z-list-element](../list/z-list-element)
 - [z-list-group](../list/z-list-group)
 - [z-section-title](../z-section-title)

### Graph
```mermaid
graph TD;
  z-app-topbar --> z-divider
  z-file-upload --> z-divider
  z-list-element --> z-divider
  z-list-group --> z-divider
  z-section-title --> z-divider
  style z-divider fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
