# z-menu



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                                                   | Type      | Default     |
| ---------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `active`   | `active`   | Flag to set the active status of the menu.                                                                                                    | `boolean` | `undefined` |
| `floating` | `floating` | Flag to set the display mode of the list. If true, the list will be absolutely positioned under the menu label, stacked beneath it otherwise. | `boolean` | `false`     |
| `open`     | `open`     | The opening state of the menu.                                                                                                                | `boolean` | `false`     |


## Events

| Event    | Description               | Type               |
| -------- | ------------------------- | ------------------ |
| `closed` | The menu has been closed. | `CustomEvent<any>` |
| `opened` | The menu has been opened. | `CustomEvent<any>` |


## Slots

| Slot       | Description                                                                                                                  |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------- |
|            | Menu label                                                                                                                   |
| `"header"` | Header to display as the first entry of the open menu.                                                                       |
| `"item"`   | Single entry of the section. Can be slotted multiple times to insert items onto the menu. Use `z-menu-section` for submenus. |


## Dependencies

### Depends on

- [z-icon](../../icons/z-icon)

### Graph
```mermaid
graph TD;
  z-menu --> z-icon
  style z-menu fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
