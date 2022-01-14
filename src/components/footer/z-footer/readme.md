# z-footer

<!-- readme-group="footer" -->

<!-- Auto Generated Below -->


## Properties

| Property                   | Attribute                      | Description                                           | Type      | Default     |
| -------------------------- | ------------------------------ | ----------------------------------------------------- | --------- | ----------- |
| `data`                     | `data`                         | deprecated - JSON stringified data to fill the footer | `string`  | `undefined` |
| `productCreditsLink`       | `product-credits-link`         |                                                       | `string`  | `undefined` |
| `productName`              | `product-name`                 |                                                       | `string`  | `undefined` |
| `productVersion`           | `product-version`              |                                                       | `string`  | `undefined` |
| `showReportAProblemButton` | `show-report-a-problem-button` |                                                       | `boolean` | `undefined` |


## Events

| Event                       | Description | Type               |
| --------------------------- | ----------- | ------------------ |
| `reportAProblemButtonClick` |             | `CustomEvent<any>` |


## Slots

| Slot       | Description       |
| ---------- | ----------------- |
|            | main navigation   |
| `"links"`  | bottom navigation |
| `"social"` | social links      |


## Dependencies

### Depends on

- [z-logo](../../logo/z-logo)
- [z-body](../../typography/z-body)
- [z-link](../../navigation/z-link)
- [z-button](../../buttons/z-button)
- [z-divider](../../z-divider)
- [z-footer-section](../z-footer-section)
- [z-footer-link](../z-footer-link)
- [z-footer-social](../z-footer-social)

### Graph
```mermaid
graph TD;
  z-footer --> z-logo
  z-footer --> z-body
  z-footer --> z-link
  z-footer --> z-button
  z-footer --> z-divider
  z-footer --> z-footer-section
  z-footer --> z-footer-link
  z-footer --> z-footer-social
  z-body --> z-typography
  z-link --> z-icon
  z-button --> z-icon
  z-footer-section --> z-icon
  style z-footer fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
