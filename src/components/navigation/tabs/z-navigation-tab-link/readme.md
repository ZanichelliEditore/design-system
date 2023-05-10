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


## Properties

| Property       | Attribute       | Description                                                                                                                                                                                                                                                                                                 | Type                                                                         | Default                                |
| -------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | -------------------------------------- |
| `ariaControls` | `aria-controls` | set aria-controls attribute to tab property identifying a corresponding tabpanel (that has a tabpanel role) by that element's id. When an element with the tabpanel role has focus, or a child of it has focus, that indicates that the connected element with the tab role is the active tab in a tablist. | `string`                                                                     | `""`                                   |
| `disabled`     | `disabled`      | Whether the tab is disabled.                                                                                                                                                                                                                                                                                | `boolean`                                                                    | `false`                                |
| `href`         | `href`          | Url to set to the anchor element.                                                                                                                                                                                                                                                                           | `string`                                                                     | `undefined`                            |
| `htmlTitle`    | `html-title`    | Html title attribute for the anchor element.                                                                                                                                                                                                                                                                | `string`                                                                     | `undefined`                            |
| `icon`         | `icon`          | Name of the icon to use. The `filled` version will be automatically used (if found) when the tab is `selected`.                                                                                                                                                                                             | `string`                                                                     | `undefined`                            |
| `label`        | `label`         | Label to show in the tab.                                                                                                                                                                                                                                                                                   | `string`                                                                     | `undefined`                            |
| `orientation`  | `orientation`   | Tab orientation. Do not set this manually: `z-navigation-tabs` will handle this.                                                                                                                                                                                                                            | `NavigationTabsOrientation.HORIZONTAL \| NavigationTabsOrientation.VERTICAL` | `NavigationTabsOrientation.HORIZONTAL` |
| `selected`     | `selected`      | Whether the tab is selected.                                                                                                                                                                                                                                                                                | `boolean`                                                                    | `false`                                |
| `size`         | `size`          | Tab size. Do not set this manually: `z-navigation-tabs` will handle this.                                                                                                                                                                                                                                   | `NavigationTabsSize.BIG \| NavigationTabsSize.SMALL`                         | `NavigationTabsSize.BIG`               |
| `tabId`        | `tab-id`        | set id attribute to tab property identifying a corresponding tabpanel (that has a tabpanel role) by that element's attribute  aria-labelledby.                                                                                                                                                              | `string`                                                                     | `""`                                   |
| `target`       | `target`        | Html `target` attribute for the anchor element.                                                                                                                                                                                                                                                             | `string`                                                                     | `undefined`                            |


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
  z-navigation-tab-link --> z-icon
  style z-navigation-tab-link fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
