# z-button

<!-- readme-group="buttons" -->

```html
<z-button label="button" type="primary"></z-button>
<z-button label="button" type="primary" icon="download"></z-button>
<z-button label="button" type="primary" isdisabled icon="download"></z-button>
<z-button label="button" type="secondary"></z-button>
<z-button label="button" type="secondary" isdisabled></z-button>
<z-button label="button" type="tertiary"></z-button>
<z-button label="button" type="tertiary" isdisabled></z-button>
<z-button label="button" type="primary" issmall></z-button>
<z-button label="button" type="primary" issmall icon="download"></z-button>
<z-button
  label="button"
  type="primary"
  issmall
  isdisabled
  icon="download"
></z-button>
<z-button label="button" type="secondary" issmall></z-button>
<z-button label="button" type="secondary" issmall isdisabled></z-button>
<z-button label="button" type="tertiary" issmall></z-button>
<z-button label="button" type="tertiary" issmall isdisabled></z-button>
```

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                | Type                                                                                     | Default                     |
| ---------- | ---------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | --------------------------- |
| `disabled` | `disabled` | HTML button disabled attribute.                                                                            | `boolean`                                                                                | `false`                     |
| `htmlid`   | `htmlid`   | Identifier, should be unique.                                                                              | `string`                                                                                 | `undefined`                 |
| `icon`     | `icon`     | `z-icon` name to use (optional).                                                                           | `string`                                                                                 | `undefined`                 |
| `issmall`  | `issmall`  | <span style="color:red">**[DEPRECATED]**</span> Use `size` prop.<br/><br/>Reduce button size (deprecated). | `boolean`                                                                                | `false`                     |
| `name`     | `name`     | HTML button name attribute.                                                                                | `string`                                                                                 | `undefined`                 |
| `size`     | `size`     | Available sizes: `big`, `small` and `x-small`. Defaults to `big`.                                          | `ButtonSizeEnum.big \| ButtonSizeEnum.small \| typeof ButtonSizeEnum["x-small"]`         | `ButtonSizeEnum.big`        |
| `square`   | `square`   | Spy to render square button.                                                                               | `boolean`                                                                                | `false`                     |
| `type`     | `type`     | HTML button type attribute.                                                                                | `string`                                                                                 | `ButtonTypeEnum.button`     |
| `variant`  | `variant`  | Graphical variant: `primary`, `secondary` and `tertiary`. Defaults to `primary`.                           | `ButtonVariantEnum.primary \| ButtonVariantEnum.secondary \| ButtonVariantEnum.tertiary` | `ButtonVariantEnum.primary` |


## Slots

| Slot | Description  |
| ---- | ------------ |
|      | button label |


## Dependencies

### Used by

 - [z-card-dictionary](../../card/z-card-dictionary)
 - [z-cookiebar](../../notification/z-cookiebar)
 - [z-header](../../navigation/z-header)
 - [z-modal-login](../../modal/z-modal-login)
 - [z-registro-table-cell](../../../snowflakes/registro-table/z-registro-table-cell)

### Depends on

- [z-icon](../../icons/z-icon)

### Graph
```mermaid
graph TD;
  z-button --> z-icon
  z-card-dictionary --> z-button
  z-cookiebar --> z-button
  z-header --> z-button
  z-modal-login --> z-button
  z-registro-table-cell --> z-button
  style z-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
