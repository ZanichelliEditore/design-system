# z-date-picker

<!-- Auto Generated Below -->

## Properties

| Property          | Attribute           | Description                                  | Type                                                 | Default                 |
| ----------------- | ------------------- | -------------------------------------------- | ---------------------------------------------------- | ----------------------- |
| `firstAriaLabel`  | `first-aria-label`  | first z-input aria label                     | `string`                                             | `undefined`             |
| `firstLabel`      | `first-label`       | first z-input label                          | `string`                                             | `undefined`             |
| `mode`            | `mode`              | [Optional] datepicker mode: date or datetime | `ZRangePickerMode.date \| ZRangePickerMode.dateTime` | `ZRangePickerMode.date` |
| `rangePickerId`   | `range-picker-id`   | unique id                                    | `string`                                             | `undefined`             |
| `secondAriaLabel` | `second-aria-label` | second z-input aria label                    | `string`                                             | `undefined`             |
| `secondLabel`     | `second-label`      | second z-input label                         | `string`                                             | `undefined`             |

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

---

_Built with [StencilJS](https://stenciljs.com/)_
