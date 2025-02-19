# z-myz-list-item

<!-- readme-group="list" -->

```html
<z-myz-list-item text="testo"></z-myz-list-item>
<z-myz-list-item
  text="testo"
  link="http://www.google.it"
></z-myz-list-item
>`
```

<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description                      | Type      | Default     |
| ------------ | ------------ | -------------------------------- | --------- | ----------- |
| `action`     | `action`     | data-action attribute (optional) | `string`  | `undefined` |
| `icon`       | `icon`       | icon name (optional)             | `string`  | `undefined` |
| `link`       | `link`       | link url (optional)              | `string`  | `undefined` |
| `linktarget` | `linktarget` | link target (optional)           | `string`  | `"_self"`   |
| `listitemid` | `listitemid` | id (optional)                    | `string`  | `undefined` |
| `text`       | `text`       | content text                     | `string`  | `undefined` |
| `underlined` | `underlined` | underlined style flag            | `boolean` | `true`      |


## Events

| Event                | Description                                     | Type               |
| -------------------- | ----------------------------------------------- | ------------------ |
| `zListItemClick`     | emitted on list item click, returns listitemid  | `CustomEvent<any>` |
| `zListItemLinkClick` | emitted on list item link click, returns linkId | `CustomEvent<any>` |


## Dependencies

### Used by

 - [z-myz-list](../z-myz-list)

### Depends on

- [z-icon](../../../../components/z-icon)

### Graph
```mermaid
graph TD;
  z-myz-list-item --> z-icon
  z-myz-list --> z-myz-list-item
  style z-myz-list-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
