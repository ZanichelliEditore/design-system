# z-footer

<!-- readme-group="footer" -->

<!-- Auto Generated Below -->


## Properties

| Property                   | Attribute                      | Description                                                                                                                                                               | Type      | Default     |
| -------------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `contentMaxWidth`          | `content-max-width`            | Maximum width of footer content                                                                                                                                           | `number`  | `undefined` |
| `data`                     | `data`                         | deprecated - JSON stringified data to fill the footer                                                                                                                     | `string`  | `undefined` |
| `productCreditsLink`       | `product-credits-link`         | 'undefined' or 'null' means 'don't show Credits', empty string means 'emit creditsLinkClick event', not empty string means 'open the url and emit creditsLinkClick event' | `string`  | `undefined` |
| `productName`              | `product-name`                 | The product name to be displayed on the top panel of the footer                                                                                                           | `string`  | `undefined` |
| `productVersion`           | `product-version`              | The product version to be displayed on the top panel of the footer                                                                                                        | `string`  | `undefined` |
| `showReportAProblemButton` | `show-report-a-problem-button` | True if the product must display a "Report a problem" button on the top panel of the footer                                                                               | `boolean` | `undefined` |


## Events

| Event                       | Description                              | Type               |
| --------------------------- | ---------------------------------------- | ------------------ |
| `creditsLinkClick`          | Emitted on credits link click            | `CustomEvent<any>` |
| `reportAProblemButtonClick` | Emitted on report a problem button click | `CustomEvent<any>` |


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
- [z-button-deprecated](../../../deprecated/z-button-deprecated)
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
  z-footer --> z-button-deprecated
  z-footer --> z-divider
  z-footer --> z-footer-section
  z-footer --> z-footer-link
  z-footer --> z-footer-social
  z-body --> z-typography
  z-link --> z-icon
  z-button-deprecated --> z-icon
  z-footer-section --> z-icon
  style z-footer fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
