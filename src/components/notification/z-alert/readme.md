# z-alert



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description        | Type                                                                       | Default     |
| ------------- | ------------- | ------------------ | -------------------------------------------------------------------------- | ----------- |
| `actiontext`  | `actiontext`  | action button text | `string`                                                                   | `undefined` |
| `contenttext` | `contenttext` | content text       | `string`                                                                   | `undefined` |
| `iconname`    | `iconname`    | icon name          | `string`                                                                   | `undefined` |
| `type`        | `type`        | alert variant type | `AlertTypesEnum.error \| AlertTypesEnum.success \| AlertTypesEnum.warning` | `undefined` |


## Events

| Event        | Description                                          | Type               |
| ------------ | ---------------------------------------------------- | ------------------ |
| `userAction` | user click/keyboard action event, returns actionType | `CustomEvent<any>` |


## Dependencies

### Used by

 - [z-card-alert](../../card/z-card-alert)
 - [z-modal-alert](../../modal/z-modal-alert)

### Depends on

- [z-icon](../../icons/z-icon)

### Graph
```mermaid
graph TD;
  z-alert --> z-icon
  z-card-alert --> z-alert
  z-modal-alert --> z-alert
  style z-alert fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
