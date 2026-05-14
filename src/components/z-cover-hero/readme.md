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


## CSS Custom Properties

| Name                        | Description                                                                                                                                                            |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--cover-hero-aspect-ratio` | aspect ratio to use for the image. You can pass a fraction or a number representing the ratio. **Default**: the intrinsic aspect ratio of the slotted image or `16/9`. |
| `--cover-hero-overlay`      | overlay color of the cover hero (CSS `background` property). **Default**: `linear-gradient(270deg, #0000 0%, #000000e6 100%)`.                                         |
| `--cover-hero-text-color`   | color of the text.                                                                                                                                                     |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
