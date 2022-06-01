# z-navigation-tab

<!-- readme-group="pagination" -->
```html
<z-navigation-tab pageId='10' value='10'></z-navigation-tab>
<z-navigation-tab pageId='10' value='10' isdisabled></z-navigation-tab>
<z-navigation-tab pageId='10' value='10' isselected isvisited></z-navigation-tab>
```


<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                                     | Type                         | Default                                 |
| ------------- | ------------- | ----------------------------------------------- | ---------------------------- | --------------------------------------- |
| `disabled`    | `disabled`    | Whether the tab is disabled.                    | `boolean`                    | `false`                                 |
| `href`        | `href`        | Url to set to the anchor element.               | `string`                     | `undefined`                             |
| `orientation` | `orientation` | Tab orientation.                                | `"horizontal" \| "vertical"` | `NavigationTabsOrientations.horizontal` |
| `selected`    | `selected`    | Whether the tab is selected.                    | `boolean`                    | `false`                                 |
| `size`        | `size`        | Tab size.                                       | `"big" \| "small"`           | `NavigationTabsSizes.big`               |
| `target`      | `target`      | Html `target` attribute for the anchor element. | `string`                     | `undefined`                             |
| `title`       | `title`       | Html `title` attribute for the anchor element.  | `string`                     | `undefined`                             |


## Events

| Event      | Description | Type               |
| ---------- | ----------- | ------------------ |
| `selected` |             | `CustomEvent<any>` |


## Slots

| Slot      | Description |
| --------- | ----------- |
| `"icon"`  | Tab icon    |
| `"label"` | Tab label   |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
