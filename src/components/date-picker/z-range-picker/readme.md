# z-date-picker



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute         | Description                                             | Type                                                                         | Default                |
| --------------- | ----------------- | ------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------- |
| `mode`          | `mode`            | [Optional] datepicker mode: date, datetime, only months | `ZDatePickerMode.date \| ZDatePickerMode.dateTime \| ZDatePickerMode.months` | `ZDatePickerMode.date` |
| `rangePickerId` | `range-picker-id` | unique id                                               | `string`                                                                     | `undefined`            |


## Events

| Event        | Description                                                             | Type               |
| ------------ | ----------------------------------------------------------------------- | ------------------ |
| `dateSelect` | emitted when date changes, returns an array with the two selected dates | `CustomEvent<any>` |


## Dependencies

### Depends on

- [z-input](../../inputs/z-input)

### Graph
```mermaid
graph TD;
  z-range-picker --> z-input
  z-input --> z-icon
  z-input --> z-input-message
  z-input-message --> z-icon
  style z-range-picker fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
