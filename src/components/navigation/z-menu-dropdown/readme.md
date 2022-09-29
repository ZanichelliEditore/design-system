# z-menu-dropdown

<!-- readme-group="header" -->

```html
<z-menu-dropdown
  nomeutente="username molto lungo nome"
  menucontent='[{"id":"profile","label":"Profilo","link":"/i-tuoi-dati","icon":"user-avatar"},{"id":"activate-resource","label":"Attiva libro","link":"#","icon":"plus"},{"id":"logout-button","label":"Esci","link":"/logout","icon":"logout"}]'
></z-menu-dropdown>
```

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                                     | Type                   | Default     |
| ------------- | ------------- | ----------------------------------------------- | ---------------------- | ----------- |
| `buttonid`    | `buttonid`    | unique button id                                | `string`               | `undefined` |
| `menucontent` | `menucontent` | Json stringified or array to fill menu dropdown | `MenuItem[] \| string` | `undefined` |
| `nomeutente`  | `nomeutente`  | user name text                                  | `string`               | `undefined` |


## Dependencies

### Used by

 - [z-myz-topbar](../../../snowflakes/myz/topbar)

### Depends on

- [z-link](../z-link)
- [z-icon](../../icons/z-icon)

### Graph
```mermaid
graph TD;
  z-menu-dropdown --> z-link
  z-menu-dropdown --> z-icon
  z-link --> z-icon
  z-myz-topbar --> z-menu-dropdown
  style z-menu-dropdown fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
