# z-list

<!-- readme-group="list" -->

```html
<z-myz-list
  inputrawdata='[{"text":"elemento lista","link":"http://www.google.it","listitemid":"id1","icon":"checkbox-checked"},{"text":"elemento lista","link":"http://www.google.it","listitemid":"id2","icon":"checkbox"},{"text":""}]'
></z-myz-list>
```

<!-- Auto Generated Below -->

## Properties

| Property       | Attribute      | Description                                    | Type             | Default     |
| -------------- | -------------- | ---------------------------------------------- | ---------------- | ----------- |
| `inputrawdata` | `inputrawdata` | json stringified list data (mutable, optional) | `string`         | `undefined` |
| `list`         | --             | list item data (mutable, optional)             | `ListItemBean[]` | `undefined` |

## Dependencies

### Used by

- [z-header](../../navigation/z-header)

### Depends on

- [z-list-item](../z-list-item)

### Graph

```mermaid
graph TD;
  z-list --> z-list-item
  z-list-item --> z-icon
  z-header --> z-list
  style z-list fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
