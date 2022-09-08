# z-tooltip-deprecated

# This component is deprecated and will be removed from the library starting 15 October 2022.

Use the `bindTo` property (`bind-to` in HTML) to bind the tooltip to an element, so the tooltip knows where to place itself. Its value can be a CSS selector or an HTMLElement.

You can use the `open` prop to show/hide the tooltip.

Maybe you want to know where the tooltip goes when the `type` is set to `auto`, so the `positionChange` event is fired when it changes its position.

To be sure the algorithm finds the right container, when calculating the position, set its position to `position: relative;`

<!-- readme-group="tootlip" -->

### Usage

```html
<z-tooltip-deprecated
  type="top"
  bind-to="#tooltip-btn"
  open
>
  <span>Tooltip text</span>
</z-tooltip-deprecated>
<button id="tooltip-btn">Button</button>
```

### Legacy version

```html
<z-tooltip-deprecated content="Aggiungi libro" type="top"></z-tooltip-deprecated>
<z-tooltip-deprecated content="Aggiungi libro" type="bottom"></z-tooltip-deprecated>
<z-tooltip-deprecated content="Rimuovi libro" type="left"></z-tooltip-deprecated>
<z-tooltip-deprecated content="Rimuovi libro" type="right"></z-tooltip>
```

<!-- Auto Generated Below -->

## Properties

| Property  | Attribute | Description                                                             | Type                                                                                                                                                                                                                                                                                                                                                                                  | Default                 |
| --------- | --------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| `bindTo`  | `bind-to` | The selector or the element bound with the tooltip.                     | `HTMLElement \| string`                                                                                                                                                                                                                                                                                                                                                               | `undefined`             |
| `content` | `content` | <span style="color:red">**[DEPRECATED]**</span> <br/><br/>Content text. | `string`                                                                                                                                                                                                                                                                                                                                                                              | `undefined`             |
| `open`    | `open`    | The open state of the tooltip.                                          | `boolean`                                                                                                                                                                                                                                                                                                                                                                             | `false`                 |
| `type`    | `type`    | Tooltip position.                                                       | `PopoverPositions.auto \| PopoverPositions.bottom \| PopoverPositions.bottom_left \| PopoverPositions.bottom_right \| PopoverPositions.left \| PopoverPositions.left_bottom \| PopoverPositions.left_top \| PopoverPositions.right \| PopoverPositions.right_bottom \| PopoverPositions.right_top \| PopoverPositions.top \| PopoverPositions.top_left \| PopoverPositions.top_right` | `PopoverPositions.auto` |

## Events

| Event            | Description            | Type               |
| ---------------- | ---------------------- | ------------------ |
| `positionChange` | Position change event. | `CustomEvent<any>` |

---

_Built with [StencilJS](https://stenciljs.com/)_
