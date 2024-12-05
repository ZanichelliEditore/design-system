# z-dragdrop-area

<!-- Auto Generated Below -->


## Properties

| Property           | Attribute             | Description              | Type     | Default     |
| ------------------ | --------------------- | ------------------------ | -------- | ----------- |
| `dragAndDropLabel` | `drag-and-drop-label` | drag & drop button label | `string` | `undefined` |


## Events

| Event         | Description                              | Type               |
| ------------- | ---------------------------------------- | ------------------ |
| `fileDropped` | Emitted when user drop one or more files | `CustomEvent<any>` |


## Dependencies

### Used by

 - [z-file-upload](../z-file-upload)

### Depends on

- [z-button](../../z-button)

### Graph
```mermaid
graph TD;
  z-dragdrop-area --> z-button
  z-button --> z-icon
  z-file-upload --> z-dragdrop-area
  style z-dragdrop-area fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
