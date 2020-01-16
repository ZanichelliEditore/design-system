# z-header



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description | Type                                                                                                     | Default     |
| ------------- | ------------- | ----------- | -------------------------------------------------------------------------------------------------------- | ----------- |
| `extlinkdata` | `extlinkdata` |             | `MenuItem[] \| string`                                                                                   | `undefined` |
| `imagealt`    | `imagealt`    |             | `string`                                                                                                 | `undefined` |
| `intlinkdata` | `intlinkdata` |             | `MenuItem[] \| string`                                                                                   | `undefined` |
| `ismyz`       | `ismyz`       |             | `boolean`                                                                                                | `undefined` |
| `logolink`    | `logolink`    |             | `string`                                                                                                 | `undefined` |
| `userdata`    | `userdata`    |             | `string \| { islogged: boolean; id?: number; name?: string; usergroup: number; userlinks: MenuItem[]; }` | `undefined` |


## Dependencies

### Depends on

- [z-logo](../z-logo)
- [z-list](../z-list)
- [z-link](../z-link)
- [z-menu-dropdown](../z-menu-dropdown)
- [z-button](../z-button)
- [z-icon](../z-icon)

### Graph
```mermaid
graph TD;
  z-header --> z-logo
  z-header --> z-list
  z-header --> z-link
  z-header --> z-menu-dropdown
  z-header --> z-button
  z-header --> z-icon
  z-list --> z-list-item
  z-list-item --> z-icon
  z-link --> z-icon
  z-menu-dropdown --> z-link
  z-menu-dropdown --> z-icon
  z-button --> z-icon
  style z-header fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
