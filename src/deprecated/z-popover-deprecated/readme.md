# z-popover-deprecated

# This component is deprecated and will be removed from the library starting 15 October 2022.

To be sure the algorithm finds the right container, when calculating the position, set its position to `position: relative;`

<!-- Auto Generated Below -->

## Properties

| Property          | Attribute          | Description                                   | Type                                                                                                                                                                                                                                                                                                                                                                            | Default                     |
| ----------------- | ------------------ | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| `backgroundColor` | `background-color` | [optional] Background color token for popover | `string`                                                                                                                                                                                                                                                                                                                                                                        | `"color-white"`             |
| `borderRadius`    | `border-radius`    | [optional] Border radius token for popover    | `PopoverBorderRadius.MEDIUM \| PopoverBorderRadius.NONE \| PopoverBorderRadius.SMALL`                                                                                                                                                                                                                                                                                           | `PopoverBorderRadius.SMALL` |
| `boxShadow`       | `box-shadow`       | [optional] Box shadow token for popover       | `PopoverShadow.SHADOW_1 \| PopoverShadow.SHADOW_12 \| PopoverShadow.SHADOW_16 \| PopoverShadow.SHADOW_2 \| PopoverShadow.SHADOW_24 \| PopoverShadow.SHADOW_3 \| PopoverShadow.SHADOW_4 \| PopoverShadow.SHADOW_6 \| PopoverShadow.SHADOW_8`                                                                                                                                     | `PopoverShadow.SHADOW_1`    |
| `padding`         | `padding`          | [optional] Sets padding for Popover container | `string`                                                                                                                                                                                                                                                                                                                                                                        | `"8px"`                     |
| `position`        | `position`         | [optional] Popover position                   | `PopoverPosition.ABOVE_CENTER \| PopoverPosition.ABOVE_LEFT \| PopoverPosition.ABOVE_RIGHT \| PopoverPosition.AFTER_CENTER \| PopoverPosition.AFTER_DOWN \| PopoverPosition.AFTER_UP \| PopoverPosition.BEFORE_CENTER \| PopoverPosition.BEFORE_DOWN \| PopoverPosition.BEFORE_UP \| PopoverPosition.BELOW_CENTER \| PopoverPosition.BELOW_LEFT \| PopoverPosition.BELOW_RIGHT` | `PopoverPosition.AFTER_UP`  |
| `showArrow`       | `show-arrow`       | [optional] Show or hide arrow                 | `boolean`                                                                                                                                                                                                                                                                                                                                                                       | `false`                     |

## Events

| Event          | Description                                       | Type               |
| -------------- | ------------------------------------------------- | ------------------ |
| `triggerClick` | Emitted on popover click, returns isVisible state | `CustomEvent<any>` |

---

_Built with [StencilJS](https://stenciljs.com/)_
