# z-button-filter

# This component is deprecated and will be removed from the library as of 09 August 2022.

<!-- readme-group="buttons" -->

```html
<z-button-filter
  filtername="filter 1"
  isfixed
></z-button-filter>
<z-button-filter filtername="filter 2"></z-button-filter>
<z-button-filter
  filtername="filter 3"
  isfixed
  hasicon="false"
></z-button-filter>
<z-button-filter
  filtername="filter 4"
  hasicon="false"
></z-button-filter>
```

<!-- Auto Generated Below -->

## Properties

| Property     | Attribute    | Description                   | Type      | Default     |
| ------------ | ------------ | ----------------------------- | --------- | ----------- |
| `filterid`   | `filterid`   | filter id                     | `string`  | `undefined` |
| `filtername` | `filtername` | filter text content           | `string`  | `undefined` |
| `hasicon`    | `hasicon`    | add icon to button            | `boolean` | `true`      |
| `isfixed`    | `isfixed`    | disable action on button      | `boolean` | `false`     |
| `issmall`    | `issmall`    | reduce button size (optional) | `boolean` | `false`     |

## Events

| Event          | Description                                 | Type               |
| -------------- | ------------------------------------------- | ------------------ |
| `removefilter` | remove filter click event, returns filterid | `CustomEvent<any>` |

## Dependencies

### Depends on

- [z-icon](../../components/icons/z-icon)

### Graph

```mermaid
graph TD;
  z-button-filter --> z-icon
  style z-button-filter fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
