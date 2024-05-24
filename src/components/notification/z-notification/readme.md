# z-notification

<!-- Auto Generated Below -->


## Overview

Notification bar component.

## Properties

| Property          | Attribute         | Description                                                                                                                                    | Type                                                                             | Default     |
| ----------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ----------- |
| `actiontext`      | `actiontext`      | Action button text                                                                                                                             | `string`                                                                         | `undefined` |
| `contenticonname` | `contenticonname` | Name of the icon on the left of the content                                                                                                    | `string`                                                                         | `undefined` |
| `showclose`       | `showclose`       | Enable close icon                                                                                                                              | `boolean`                                                                        | `false`     |
| `showshadow`      | `showshadow`      | <span style="color:red">**[DEPRECATED]**</span> shadow is available only for the `sticky` version of the notification.<br/><br/>Enable shadow. | `boolean`                                                                        | `false`     |
| `sticky`          | `sticky`          | Enable sticky notification bar.                                                                                                                | `boolean`                                                                        | `false`     |
| `type`            | `type`            | Alert variant type                                                                                                                             | `NotificationType.ERROR \| NotificationType.SUCCESS \| NotificationType.WARNING` | `undefined` |


## Events

| Event                | Description            | Type               |
| -------------------- | ---------------------- | ------------------ |
| `notificationAction` | Call to action clicked | `CustomEvent<any>` |
| `notificationClose`  | Close button clicked   | `CustomEvent<any>` |


## Slots

| Slot | Description                   |
| ---- | ----------------------------- |
|      | The text of the notification. |


## Dependencies

### Depends on

- [z-icon](../../z-icon)

### Graph
```mermaid
graph TD;
  z-notification --> z-icon
  style z-notification fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
