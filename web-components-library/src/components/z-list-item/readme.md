# z-list-item



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description | Type      | Default     |
| ------------ | ------------ | ----------- | --------- | ----------- |
| `action`     | `action`     |             | `string`  | `undefined` |
| `icon`       | `icon`       |             | `string`  | `undefined` |
| `link`       | `link`       |             | `string`  | `undefined` |
| `linktarget` | `linktarget` |             | `string`  | `'_self'`   |
| `listitemid` | `listitemid` |             | `string`  | `undefined` |
| `text`       | `text`       |             | `string`  | `undefined` |
| `underlined` | `underlined` |             | `boolean` | `true`      |


## Events

| Event                | Description | Type               |
| -------------------- | ----------- | ------------------ |
| `zListItemLinkClick` |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [z-combobox](../z-combobox)
 - [z-list](../z-list)

### Depends on

- [z-icon](../z-icon)

### Graph
```mermaid
graph TD;
  z-list-item --> z-icon
  z-combobox --> z-list-item
  z-list --> z-list-item
  style z-list-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
