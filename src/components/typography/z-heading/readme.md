# z-heading

<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description                             | Type                                 | Default     |
| ----------- | ----------- | --------------------------------------- | ------------------------------------ | ----------- |
| `component` | `component` | HTML tag to use to wrap slotted content | `string`                             | `undefined` |
| `level`     | `level`     | Typography level                        | `1 \| 2 \| 3 \| 4`                   | `undefined` |
| `variant`   | `variant`   | Font weight variant                     | `"light" \| "regular" \| "semibold"` | `"regular"` |


## Dependencies

### Used by

 - [z-file-upload](../../file-upload/z-file-upload)

### Depends on

- [z-typography](../z-typography)

### Graph
```mermaid
graph TD;
  z-heading --> z-typography
  z-file-upload --> z-heading
  style z-heading fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*