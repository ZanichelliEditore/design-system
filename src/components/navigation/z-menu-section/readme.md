# z-menu-section

<!-- Auto Generated Below -->

## Properties

| Property | Attribute | Description  | Type      | Default     |
| -------- | --------- | ------------ | --------- | ----------- |
| `active` | `active`  | Active state | `boolean` | `undefined` |

## Events

| Event    | Description                  | Type               |
| -------- | ---------------------------- | ------------------ |
| `closed` | The section has been closed. | `CustomEvent<any>` |
| `opened` | The section has been opened. | `CustomEvent<any>` |

## Slots

| Slot     | Description                                                                 |
| -------- | --------------------------------------------------------------------------- |
|          | Menu section label                                                          |
| `"item"` | Single entry of the section. Can be slotted multiple times to insert items. |

## Dependencies

### Depends on

- [z-icon](../../icons/z-icon)

### Graph

```mermaid
graph TD;
  z-menu-section --> z-icon
  style z-menu-section fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
