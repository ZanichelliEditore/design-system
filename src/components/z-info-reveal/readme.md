# z-info-reveal

Interactive info panel used to show short sentences, one at a time. The initial (closed) state always displays a custom icon and may contain a text label.

All the inner content is provided from the product.

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                | Type                                                                                                                               | Default                           |
| ---------- | ---------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| `icon`     | `icon`     | Name of the icon for the open button                       | `string`                                                                                                                           | `'informationsource'`             |
| `label`    | `label`    | Text that appears on closed panel next to the open button. | `string`                                                                                                                           | `undefined`                       |
| `position` | `position` | Position of the open/close button on the panel.            | `InfoRevealPosition.BOTTOM_LEFT \| InfoRevealPosition.BOTTOM_RIGHT \| InfoRevealPosition.TOP_LEFT \| InfoRevealPosition.TOP_RIGHT` | `InfoRevealPosition.BOTTOM_RIGHT` |


## Dependencies

### Depends on

- [z-icon](../icons/z-icon)

### Graph
```mermaid
graph TD;
  z-info-reveal --> z-icon
  style z-info-reveal fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
