# z-cover-hero



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                    | Type                                                              | Default                        |
| ---------- | ---------- | -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ------------------------------ |
| `caption`  | `caption`  | Cover hero caption text to display in the z-info-reveal component.                                             | `string`                                                          | `''`                           |
| `position` | `position` | Cover hero content position (only for stacked variant).                                                        | `CoverHeroContentPosition.bottom \| CoverHeroContentPosition.top` | `CoverHeroContentPosition.top` |
| `variant`  | `variant`  | Cover hero variant. Can be one of "overlay", "stacked". Leave it undefined for the default cover hero variant. | `CoverHeroVariants.overlay \| CoverHeroVariants.stacked`          | `CoverHeroVariants.overlay`    |


## Dependencies

### Depends on

- [z-info-reveal](../z-info-reveal)

### Graph
```mermaid
graph TD;
  z-cover-hero --> z-info-reveal
  z-info-reveal --> z-icon
  style z-cover-hero fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
