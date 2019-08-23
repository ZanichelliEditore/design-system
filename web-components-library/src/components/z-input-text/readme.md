# z-input-text



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description | Type                                                                                                                  | Default     |
| ------------- | ------------- | ----------- | --------------------------------------------------------------------------------------------------------------------- | ----------- |
| `inputid`     | `inputid`     |             | `string`                                                                                                              | `undefined` |
| `label`       | `label`       |             | `string`                                                                                                              | `undefined` |
| `placeholder` | `placeholder` |             | `string`                                                                                                              | `undefined` |
| `type`        | `type`        |             | `InputTypeEnum.email \| InputTypeEnum.number \| InputTypeEnum.password \| InputTypeEnum.search \| InputTypeEnum.text` | `undefined` |
| `value`       | `value`       |             | `string`                                                                                                              | `undefined` |


## Events

| Event         | Description | Type               |
| ------------- | ----------- | ------------------ |
| `inputChange` |             | `CustomEvent<any>` |
| `inputSearch` |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [z-combobox](../z-combobox)

### Graph
```mermaid
graph TD;
  z-combobox --> z-input-text
  style z-input-text fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
