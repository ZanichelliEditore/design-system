# z-accordion



<!-- Auto Generated Below -->


## Overview

Accordion component.

## Properties

| Property     | Attribute     | Description                                                                      | Type                                                          | Default                    |
| ------------ | ------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------- | -------------------------- |
| `highlight`  | `highlight`   | Enable highlight band on the `summary`'s left edge.                              | `boolean`                                                     | `false`                    |
| `icon`       | `icon`        | Name of the z-icon to display before the label's text.                           | `string`                                                      | `undefined`                |
| `isDisabled` | `is-disabled` | Disabled state of the accordion.                                                 | `boolean`                                                     | `false`                    |
| `label`      | `label`       | Text label.                                                                      | `string`                                                      | `undefined`                |
| `open`       | `open`        | The open state of the accordion.                                                 | `boolean`                                                     | `false`                    |
| `shadow`     | `shadow`      | Enable box-shadow on the accordion. Only applies when `variant` is `BACKGROUND`. | `boolean`                                                     | `true`                     |
| `size`       | `size`        | Size of the component.                                                           | `ControlSize.BIG \| ControlSize.SMALL \| ControlSize.X_SMALL` | `ControlSize.BIG`          |
| `variant`    | `variant`     | Accordion variant.                                                               | `AccordionVariant.BACKGROUND \| AccordionVariant.DEFAULT`     | `AccordionVariant.DEFAULT` |


## Events

| Event     | Description                                | Type                   |
| --------- | ------------------------------------------ | ---------------------- |
| `toggled` | Event fired when the accordion is toggled. | `CustomEvent<boolean>` |


## Slots

| Slot    | Description                |
| ------- | -------------------------- |
|         | Slot for the main content. |
| `"tag"` | Slot for tags.             |


## Shadow Parts

| Part        | Description                                                                    |
| ----------- | ------------------------------------------------------------------------------ |
| `"content"` | The content element that is shown or hidden when the accordion is toggled.     |
| `"summary"` | The summary element that is always visible and acts as the accordion's toggle. |


## CSS Custom Properties

| Name                                 | Description                                                                                                            |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| `--z-accordion-bg`                   | Background color of the summary. Default: `--color-surface02`.                                                         |
| `--z-accordion-content-bg`           | Background color of the accordion. Default: `--color-surface02`.                                                       |
| `--z-accordion-content-fg`           | Content text color. Default: `--color-default-text`.                                                                   |
| `--z-accordion-disabled-label-color` | Label color when disabled. Default: `--color-text03`.                                                                  |
| `--z-accordion-highlight-color`      | Color of the highlight band on the summary's left edge. Only applies when `highlight` is true. Default: `transparent`. |
| `--z-accordion-hover-color`          | Hover color of the summary. Default: `--color-surface03`.                                                              |
| `--z-accordion-label-color`          | Label color. Default: `--color-default-text`.                                                                          |
| `--z-accordion-label-font-weight`    | Font weight of the summary label. Default: `--font-sb`.                                                                |
| `--z-accordion-left-padding`         | Left padding of the summary. Default: `--space-unit` * 2.                                                              |
| `--z-accordion-right-padding`        | Right padding of the summary. Default: `--space-unit`.                                                                 |


## Dependencies

### Depends on

- [z-icon](../z-icon)

### Graph
```mermaid
graph TD;
  z-accordion --> z-icon
  style z-accordion fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
