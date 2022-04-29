# z-datepicker-flatpickr



<!-- Auto Generated Below -->


## Events

| Event        | Description | Type               |
| ------------ | ----------- | ------------------ |
| `dateSelect` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [z-select](../inputs/z-select)
- [z-heading](../typography/z-heading)
- [z-input](../inputs/z-input)
- [z-divider](../z-divider)

### Graph
```mermaid
graph TD;
  z-datepicker-flatpickr --> z-select
  z-datepicker-flatpickr --> z-heading
  z-datepicker-flatpickr --> z-input
  z-datepicker-flatpickr --> z-divider
  z-select --> z-input-label
  z-select --> z-input
  z-select --> z-button-filter
  z-select --> z-icon
  z-select --> z-input-message
  z-input --> z-input-label
  z-input --> z-icon
  z-input --> z-input-message
  z-input --> z-select
  z-input-message --> z-icon
  z-button-filter --> z-icon
  z-heading --> z-typography
  style z-datepicker-flatpickr fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
