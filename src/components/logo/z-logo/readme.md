# z-logo

<!-- readme-group="logo" -->
```html
<z-logo ></z-logo>
<z-logo imagealt="logo" ></z-logo>
<z-logo imagealt="logo" height="50" width="200"></z-logo>
<z-logo imagealt="logo" height="25" width="100"></z-logo>
```

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description            | Type      | Default     |
| ------------- | ------------- | ---------------------- | --------- | ----------- |
| `height`      | `height`      | image height           | `number`  | `42`        |
| `imagealt`    | `imagealt`    | alternative image text | `string`  | `undefined` |
| `link`        | `link`        | link url (optional)    | `string`  | `undefined` |
| `targetblank` | `targetblank` | link target (optional) | `boolean` | `undefined` |
| `width`       | `width`       | image width            | `number`  | `163`       |


## Dependencies

### Used by

 - [z-footer](../../footer/z-footer)
 - [z-header](../../navigation/z-header)

### Graph
```mermaid
graph TD;
  z-footer --> z-logo
  z-header --> z-logo
  style z-logo fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
