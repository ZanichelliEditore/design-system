# z-toast-notification

<!-- Auto Generated Below -->


## Properties

| Property              | Attribute             | Description                                                                                  | Type                                                                                                                                                                                                                                                                                                                                                                             | Default     |
| --------------------- | --------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `autoclose`           | `autoclose`           | toast notification closing timeout (ms)                                                      | `number`                                                                                                                                                                                                                                                                                                                                                                         | `undefined` |
| `closebutton`         | `closebutton`         | toggles closing button rendering                                                             | `boolean`                                                                                                                                                                                                                                                                                                                                                                        | `undefined` |
| `draggablepercentage` | `draggablepercentage` | toast notification draggable percentage                                                      | `number`                                                                                                                                                                                                                                                                                                                                                                         | `80`        |
| `heading`             | `heading`             | toast notification's title                                                                   | `string`                                                                                                                                                                                                                                                                                                                                                                         | `undefined` |
| `isdraggable`         | `isdraggable`         | toast notification can be draggable                                                          | `boolean`                                                                                                                                                                                                                                                                                                                                                                        | `true`      |
| `message`             | `message`             | toast notification's message                                                                 | `string`                                                                                                                                                                                                                                                                                                                                                                         | `undefined` |
| `pauseonfocusloss`    | `pauseonfocusloss`    | toast notification autoclose can be paused                                                   | `boolean`                                                                                                                                                                                                                                                                                                                                                                        | `true`      |
| `transition`          | `transition`          | toast notification animation type: slide-in-left, slide-in-right, slide-in-down, slide-in-up | `ToastNotificationTransitions.SLIDE_IN_DOWN \| ToastNotificationTransitions.SLIDE_IN_LEFT \| ToastNotificationTransitions.SLIDE_IN_RIGHT \| ToastNotificationTransitions.SLIDE_IN_UP \| ToastNotificationTransitions.SLIDE_OUT_DOWN \| ToastNotificationTransitions.SLIDE_OUT_LEFT \| ToastNotificationTransitions.SLIDE_OUT_RIGHT \| ToastNotificationTransitions.SLIDE_OUT_UP` | `undefined` |
| `type`                | `type`                | toast notification type:  dark, light, accent, error, success, warning                       | `ToastNotification.ACCENT \| ToastNotification.DARK \| ToastNotification.ERROR \| ToastNotification.LIGHT \| ToastNotification.SUCCESS \| ToastNotification.WARNING`                                                                                                                                                                                                             | `undefined` |


## Events

| Event        | Description              | Type               |
| ------------ | ------------------------ | ------------------ |
| `toastClose` | notification close event | `CustomEvent<any>` |


## Dependencies

### Depends on

- [z-icon](../../icons/z-icon)

### Graph
```mermaid
graph TD;
  z-toast-notification --> z-icon
  style z-toast-notification fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
