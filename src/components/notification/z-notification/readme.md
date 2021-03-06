# z-notification



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute         | Description                     | Type                                                                             | Default     |
| ----------------- | ----------------- | ------------------------------- | -------------------------------------------------------------------------------- | ----------- |
| `actiontext`      | `actiontext`      | action button text              | `string`                                                                         | `undefined` |
| `contenticonname` | `contenticonname` | icon on the left of the content | `string`                                                                         | `undefined` |
| `showclose`       | `showclose`       | enable close icon               | `boolean`                                                                        | `false`     |
| `showshadow`      | `showshadow`      | enable shadow                   | `boolean`                                                                        | `false`     |
| `type`            | `type`            | alert variant type              | `NotificationType.error \| NotificationType.success \| NotificationType.warning` | `undefined` |


## Events

| Event                | Description               | Type               |
| -------------------- | ------------------------- | ------------------ |
| `notificationAction` | notification action event | `CustomEvent<any>` |
| `notificationClose`  | notification close event  | `CustomEvent<any>` |


## Slots

| Slot | Description                     |
| ---- | ------------------------------- |
|      | the content of the notification |


## Dependencies

### Depends on

- [z-icon](../../icons/z-icon)
- [z-body](../../typography/z-body)

### Graph
```mermaid
graph TD;
  z-notification --> z-icon
  z-notification --> z-body
  z-body --> z-typography
  style z-notification fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
