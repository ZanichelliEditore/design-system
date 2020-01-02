# z-input-text



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description | Type                                                                                          | Default     |
| ------------- | ------------- | ----------- | --------------------------------------------------------------------------------------------- | ----------- |
| `icon`        | `icon`        |             | `string`                                                                                      | `undefined` |
| `inputid`     | `inputid`     |             | `string`                                                                                      | `undefined` |
| `isdisabled`  | `isdisabled`  |             | `boolean`                                                                                     | `false`     |
| `isreadonly`  | `isreadonly`  |             | `boolean`                                                                                     | `false`     |
| `label`       | `label`       |             | `string`                                                                                      | `undefined` |
| `message`     | `message`     |             | `string`                                                                                      | `undefined` |
| `placeholder` | `placeholder` |             | `string`                                                                                      | `undefined` |
| `status`      | `status`      |             | `InputStatusEnum.error \| InputStatusEnum.success \| InputStatusEnum.warning`                 | `undefined` |
| `type`        | `type`        |             | `InputTypeEnum.email \| InputTypeEnum.number \| InputTypeEnum.password \| InputTypeEnum.text` | `undefined` |
| `value`       | `value`       |             | `string`                                                                                      | `undefined` |


## Events

| Event         | Description | Type               |
| ------------- | ----------- | ------------------ |
| `inputChange` |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [z-combobox](../z-combobox)

### Depends on

- [z-icon](../z-icon)

### Graph
```mermaid
graph TD;
  z-input-text --> z-icon
  z-combobox --> z-input-text
  style z-input-text fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
