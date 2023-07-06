# z-td



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description                                                                                                                                                  | Type                                                      | Default     |
| ---------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------- | ----------- |
| `colspan`  | `colspan`   | Number of columns that the cell should span.                                                                                                                 | `number`                                                  | `undefined` |
| `showMenu` | `show-menu` | Enables the contextual menu. Can be set to "hover" or "always" to show the button only on cell hover or always. Set a nullish value to hide the menu button. | `VisibilityCondition.ALWAYS \| VisibilityCondition.HOVER` | `null`      |
| `sticky`   | `sticky`    | Whether the cell should stick.                                                                                                                               | `boolean`                                                 | `false`     |


## Events

| Event           | Description                                      | Type                  |
| --------------- | ------------------------------------------------ | --------------------- |
| `colspanChange` | Emitted when the value of the `colspan` changes. | `CustomEvent<number>` |


## Slots

| Slot | Description  |
| ---- | ------------ |
|      | ZTd content. |


## Dependencies

### Depends on

- [z-button](../../../buttons/z-button)
- [z-popover](../../../z-popover)

### Graph
```mermaid
graph TD;
  z-td --> z-button
  z-td --> z-popover
  z-button --> z-icon
  style z-td fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
