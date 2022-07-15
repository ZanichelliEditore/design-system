# z-date-picker



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute      | Description                                             | Type                                                                         | Default                |
| -------------- | -------------- | ------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------- |
| `datepickerid` | `datepickerid` | unique id                                               | `string`                                                                     | `undefined`            |
| `mode`         | `mode`         | [Optional] datepicker mode: date, datetime, only months | `ZDatePickerMode.date \| ZDatePickerMode.dateTime \| ZDatePickerMode.months` | `ZDatePickerMode.date` |
| `type`         | `type`         | [Optional] datepicker type: date or range               | `ZDatePickerType.date \| ZDatePickerType.range`                              | `ZDatePickerType.date` |


## Events

| Event        | Description                                      | Type               |
| ------------ | ------------------------------------------------ | ------------------ |
| `dateSelect` | emitted when date changes, returns selected date | `CustomEvent<any>` |


## Dependencies

### Depends on

- [z-input](../../inputs/z-input)

### Graph
```mermaid
graph TD;
  z-range-picker --> z-input
  z-input --> z-input-label
  z-input --> z-icon
  z-input --> z-input-message
  z-input --> z-select
  z-input-message --> z-icon
  z-select --> z-input-label
  z-select --> z-input
  z-select --> z-button-filter
  z-select --> z-icon
  z-select --> z-input-message
  z-button-filter --> z-icon
  style z-range-picker fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*