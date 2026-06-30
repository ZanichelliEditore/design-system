# z-toggle-button

<!-- readme-group="buttons" -->

```html
<z-toggle-button
  label="risorse"
  slot="toggle"
></z-toggle-button>
<z-toggle-button
  label="risorse"
  slot="toggle"
  avoidclick="true"
></z-toggle-button>
<z-toggle-button
  label="risorse"
  slot="toggle"
  isdisabled="true"
  avoidclick="true"
></z-toggle-button>
```

<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description                     | Type      | Default     |
| ------------ | ------------ | ------------------------------- | --------- | ----------- |
| `ariaLabel`  | `aria-label` | aria-label for the button       | `string`  | `""`        |
| `avoidclick` | `avoidclick` | avoidclick status flag          | `boolean` | `undefined` |
| `isdisabled` | `isdisabled` | disabled status flag (optional) | `boolean` | `false`     |
| `label`      | `label`      | label text                      | `string`  | `undefined` |
| `opened`     | `opened`     | open by default (optional)      | `boolean` | `false`     |


## Events

| Event         | Description                                    | Type               |
| ------------- | ---------------------------------------------- | ------------------ |
| `toggleClick` | emitted on toggle button click, returns isOpen | `CustomEvent<any>` |


## Dependencies

### Depends on

- [z-icon](../../z-icon)

### Graph
```mermaid
graph TD;
  z-toggle-button --> z-icon
  style z-toggle-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
