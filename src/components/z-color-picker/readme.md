# z-color-picker



<!-- Auto Generated Below -->


## Overview

Color picker component.
This component allows the user to pick a color from a predefined set.

## Properties

| Property             | Attribute             | Description                                                                                                                                                      | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Default     |
| -------------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `disableTransparent` | `disable-transparent` | Disables the transparent color option. Setting `selectedColor` prop to `#FFFFFF00` while `disableTransparent` is true will default to `#333333` ("dark gray 2"). | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | `false`     |
| `htmlAriaLabel`      | `html-aria-label`     | The aria-label for the color picker, e.g. "Select a background color for the label".                                                                             | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `undefined` |
| `lng`                | `lng`                 | The language for the aria labels inside the color picker.                                                                                                        | `"en" \| "it"`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `"it"`      |
| `selectedColor`      | `selected-color`      | The selected color to highlight.                                                                                                                                 | `"#004466" \| "#006633" \| "#0088CC" \| "#00CC66" \| "#110066" \| "#2200CC" \| "#226600" \| "#333333" \| "#33BBFF" \| "#33FF99" \| "#44CC00" \| "#5533FF" \| "#660000" \| "#660066" \| "#662B00" \| "#665600" \| "#77FF33" \| "#7E7E7E" \| "#99DDFF" \| "#99FFCC" \| "#AA99FF" \| "#BBFF99" \| "#CC0000" \| "#CC00CC" \| "#CC5500" \| "#CCAA00" \| "#CCCCCC" \| "#CCEEFF" \| "#CCFFE5" \| "#D4CCFF" \| "#DDFFCC" \| "#FF3333" \| "#FF33FF" \| "#FF8933" \| "#FF9999" \| "#FF99FF" \| "#FFC399" \| "#FFCCCC" \| "#FFCCFF" \| "#FFDD33" \| "#FFE1CC" \| "#FFEE99" \| "#FFF7CC" \| "#FFFFFF" \| "#FFFFFF00"` | `undefined` |


## Events

| Event           | Description                             | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --------------- | --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `colorSelected` | Event emitted when a color is selected. | `CustomEvent<"#004466" \| "#006633" \| "#0088CC" \| "#00CC66" \| "#110066" \| "#2200CC" \| "#226600" \| "#333333" \| "#33BBFF" \| "#33FF99" \| "#44CC00" \| "#5533FF" \| "#660000" \| "#660066" \| "#662B00" \| "#665600" \| "#77FF33" \| "#7E7E7E" \| "#99DDFF" \| "#99FFCC" \| "#AA99FF" \| "#BBFF99" \| "#CC0000" \| "#CC00CC" \| "#CC5500" \| "#CCAA00" \| "#CCCCCC" \| "#CCEEFF" \| "#CCFFE5" \| "#D4CCFF" \| "#DDFFCC" \| "#FF3333" \| "#FF33FF" \| "#FF8933" \| "#FF9999" \| "#FF99FF" \| "#FFC399" \| "#FFCCCC" \| "#FFCCFF" \| "#FFDD33" \| "#FFE1CC" \| "#FFEE99" \| "#FFF7CC" \| "#FFFFFF" \| "#FFFFFF00">` |


## Methods

### `setFocus() => Promise<void>`

Focuses the selected or first enabled color button and makes the container non-tabbable.

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
