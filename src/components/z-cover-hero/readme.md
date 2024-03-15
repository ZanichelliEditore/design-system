# z-cover-hero

<!-- Auto Generated Below -->


## Overview

Cover hero component.
Component to display a hero image with content.

## Properties

| Property              | Attribute               | Description                                                                                                                                                                                                                                                                         | Type                                                              | Default                        |
| --------------------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ------------------------------ |
| `contentPosition`     | `content-position`      | Vertical content position (for `STACKED` variant).                                                                                                                                                                                                                                  | `CoverHeroContentPosition.BOTTOM \| CoverHeroContentPosition.TOP` | `CoverHeroContentPosition.TOP` |
| `preserveAspectRatio` | `preserve-aspect-ratio` | Whether to keep the image aspect ratio. If set to `false`, the cssprop `--cover-hero-aspect-ratio` will not affect the component's size; instead, the height of the component follows the content's one. Note: it may be necessary to set a min and/or max height to the component. | `boolean`                                                         | `true`                         |
| `variant`             | `variant`               | Cover hero variant. Can be `OVERLAY` or `STACKED`.                                                                                                                                                                                                                                  | `CoverHeroVariant.OVERLAY \| CoverHeroVariant.STACKED`            | `CoverHeroVariant.OVERLAY`     |


## Slots

| Slot            | Description               |
| --------------- | ------------------------- |
| `"content"`     | slot for the content.     |
| `"cover"`       | slot for the cover image. |
| `"info-reveal"` | slot for the info reveal. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
