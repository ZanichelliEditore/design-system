# z-navigation-tab

<!-- readme-group="pagination" -->

```html
<z-navigation-tab
  pageId="10"
  value="10"
></z-navigation-tab>
<z-navigation-tab
  pageId="10"
  value="10"
  isdisabled
></z-navigation-tab>
<z-navigation-tab
  pageId="10"
  value="10"
  isselected
  isvisited
></z-navigation-tab>
```

<!-- Auto Generated Below -->


## Overview

Single tab component to use inside `z-navigation-tabs`. It renders a button.

## Properties

| Property      | Attribute     | Description                                                                                                     | Type                                                                         | Default                                |
| ------------- | ------------- | --------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | -------------------------------------- |
| `disabled`    | `disabled`    | Whether the tab is disabled.                                                                                    | `boolean`                                                                    | `false`                                |
| `htmlTitle`   | `html-title`  | Html `title` attribute for the button.                                                                          | `string`                                                                     | `undefined`                            |
| `icon`        | `icon`        | Name of the icon to use. The `filled` version will be automatically used (if found) when the tab is `selected`. | `string`                                                                     | `undefined`                            |
| `label`       | `label`       | Label to show in the tab.                                                                                       | `string`                                                                     | `undefined`                            |
| `orientation` | `orientation` | Tab orientation. Do not set this manually: `z-navigation-tabs` will handle this.                                | `NavigationTabsOrientation.HORIZONTAL \| NavigationTabsOrientation.VERTICAL` | `NavigationTabsOrientation.HORIZONTAL` |
| `selected`    | `selected`    | Whether the tab is selected.                                                                                    | `boolean`                                                                    | `false`                                |
| `size`        | `size`        | Tab size. Do not set this manually: `z-navigation-tabs` will handle this.                                       | `NavigationTabsSize.BIG \| NavigationTabsSize.SMALL`                         | `NavigationTabsSize.BIG`               |


## Events

| Event      | Description                | Type               |
| ---------- | -------------------------- | ------------------ |
| `selected` | The tab has been selected. | `CustomEvent<any>` |


## Dependencies

### Depends on

- [z-icon](../../../icons/z-icon)

### Graph
```mermaid
graph TD;
  z-navigation-tab --> z-icon
  style z-navigation-tab fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
