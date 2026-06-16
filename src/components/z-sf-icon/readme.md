# z-fs-icon

<!-- readme-group="icon" -->

```html
<z-fs-icon name="book-plus"></z-fs-icon>
<z-fs-icon
  name="chevron-down"
  iconid="zicon"
></z-fs-icon>
<z-fs-icon
  name="download"
  iconid="zicon"
  width="10"
  height="10"
></z-fs-icon>
```

<!-- Auto Generated Below -->


## Overview

Component to render an SVG icon from the internal icon set, selected by `name`.
This component automatically recognizes icons that have an indicator (e.g. `bg-color`, `font-color`, etc.), that can be filled with a custom color via the `indicatorColor` prop.

## Properties

| Property         | Attribute         | Description                                                                                                                                                                                                              | Type               | Default     |
| ---------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ | ----------- |
| `fill`           | `fill`            | Name of the CSS color token to use for the icon fill color (e.g. `blue500`).                                                                                                                                             | `string`           | `undefined` |
| `height`         | `height`          | Icon height (optional)                                                                                                                                                                                                   | `number \| string` | `undefined` |
| `iconid`         | `iconid`          | HTML `id` attribute (optional)                                                                                                                                                                                           | `string`           | `undefined` |
| `indicatorColor` | `indicator-color` | Color to use to fill the icon's color indicator, if it has one. Can be any valid value for the `fill` svg attribute. If the icon passed through the `name` prop doesn't have a color indicator, this prop has no effect. | `string`           | `undefined` |
| `name`           | `name`            | Icon name                                                                                                                                                                                                                | `string`           | `undefined` |
| `width`          | `width`           | Icon width (optional)                                                                                                                                                                                                    | `number \| string` | `undefined` |


## Dependencies

### Used by

 - [z-myz-card-alert](../../snowflakes/myz/card/z-myz-card-alert)
 - [z-myz-card-icon](../../snowflakes/myz/card/z-myz-card-icon)
 - [z-myz-card-info](../../snowflakes/myz/card/z-myz-card-info)
 - [z-myz-list-item](../../snowflakes/myz/list/z-myz-list-item)
 - [z-sf-button](../z-sf-button)
 - [z-slideshow](../../snowflakes/myz/z-slideshow)

### Graph
```mermaid
graph TD;
  z-myz-card-alert --> z-sf-icon
  z-myz-card-icon --> z-sf-icon
  z-myz-card-info --> z-sf-icon
  z-myz-list-item --> z-sf-icon
  z-sf-button --> z-sf-icon
  z-slideshow --> z-sf-icon
  style z-sf-icon fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
