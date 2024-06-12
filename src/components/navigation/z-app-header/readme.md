# z-app-header

<!-- Auto Generated Below -->


## Properties

| Property            | Attribute            | Description                                                                                                                                                                                                                                    | Type                               | Default     |
| ------------------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | ----------- |
| `drawerOpen`        | `drawer-open`        | The opening state of the drawer.                                                                                                                                                                                                               | `boolean`                          | `false`     |
| `enableSearch`      | `enable-search`      | Enable the search bar.                                                                                                                                                                                                                         | `boolean`                          | `false`     |
| `enableZLogo`       | `enable-z-logo`      | Enable laZ logo.                                                                                                                                                                                                                               | `boolean`                          | `false`     |
| `flow`              | `flow`               | Control menu bar position in the header. - auto: the menu bar is positioned near the title - stack: the menu bar is positioned below the title - offcanvas: the menu bar is not displayed and a burger icon appears to open the offcanvas menu | `"auto" \| "offcanvas" \| "stack"` | `"auto"`    |
| `searchPageUrl`     | `search-page-url`    | Url to the search page. Set this prop and `enableSearch` to show a link-button on mobile and tablet viewports, instead of the normal searchbar. The link will also appear on the sticky header.                                                | `string`                           | `undefined` |
| `searchPlaceholder` | `search-placeholder` | Placeholder text for the search bar.                                                                                                                                                                                                           | `string`                           | `"Cerca"`   |
| `searchString`      | `search-string`      | Search string for the search bar.                                                                                                                                                                                                              | `string`                           | `""`        |
| `stuck`             | `stuck`              | Stuck mode for the header. You can programmatically set it using an IntersectionObserver.                                                                                                                                                      | `boolean`                          | `false`     |


## Events

| Event      | Description                                          | Type               |
| ---------- | ---------------------------------------------------- | ------------------ |
| `sticking` | Emitted when the `stuck` state of the header changes | `CustomEvent<any>` |


## Slots

| Slot              | Description                                                                    |
| ----------------- | ------------------------------------------------------------------------------ |
| `"product-logo"`  | To insert the product logo, it should be used with an img tag.                 |
| `"stucked-title"` | Title for the stuck header. By default it uses the text from the `title` slot. |
| `"title"`         | Slot for the main title                                                        |
| `"top-subtitle"`  | Slot for the top subtitle. It will not appear in stuck header.                 |


## Dependencies

### Depends on

- [z-button](../../buttons/z-button)
- [z-searchbar](../../inputs/z-searchbar)
- [z-divider](../../z-divider)
- [z-offcanvas](../../z-offcanvas)
- [z-icon](../../icons/z-icon)

### Graph
```mermaid
graph TD;
  z-app-header --> z-button
  z-app-header --> z-searchbar
  z-app-header --> z-divider
  z-app-header --> z-offcanvas
  z-app-header --> z-icon
  z-button --> z-icon
  z-searchbar --> z-input
  z-searchbar --> z-button
  z-searchbar --> z-list
  z-searchbar --> z-list-group
  z-searchbar --> z-list-element
  z-searchbar --> z-icon
  z-searchbar --> z-tag
  z-input --> z-icon
  z-input --> z-input-message
  z-input-message --> z-icon
  z-list-group --> z-divider
  z-list-element --> z-icon
  z-list-element --> z-divider
  z-tag --> z-icon
  style z-app-header fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
