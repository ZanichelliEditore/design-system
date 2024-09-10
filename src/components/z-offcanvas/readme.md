# z-offcanvas

[Abstract](https://app.abstract.com/share/9c363a6e-21fd-41a3-8458-7ea71ab4a477?collectionLayerId=68ca70b2-f3c1-4961-b56d-04775daea44e&mode=design)

## CSS Variables

- `--z-offcanvas--container-width`: set the minimum width of the canvas
- `--z-offcanvas--top-space`: set the top space left on top of the canvas in overlay variant

<!-- Auto Generated Below -->


## Properties

| Property              | Attribute             | Description                                                                                               | Type                                                       | Default                        |
| --------------------- | --------------------- | --------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ------------------------------ |
| `open`                | `open`                | Whether the offcanvas is open. Default: false                                                             | `boolean`                                                  | `false`                        |
| `skipLoadAnimation`   | `skip-load-animation` | Whether to skip the initial animation. Useful when the initial value of the `open` prop is set to `true`. | `boolean`                                                  | `false`                        |
| `transitiondirection` | `transitiondirection` | open content transitioning in a specified direction left \| right. Default: left                          | `TransitionDirection.LEFT \| TransitionDirection.RIGHT`    | `TransitionDirection.LEFT`     |
| `variant`             | `variant`             | Offcanvas variant. Can be one `overlay` or `pushcontent`. Default variant: pushcontent                    | `OffCanvasVariant.OVERLAY \| OffCanvasVariant.PUSHCONTENT` | `OffCanvasVariant.PUSHCONTENT` |


## Events

| Event                     | Description                      | Type               |
| ------------------------- | -------------------------------- | ------------------ |
| `canvasOpenStatusChanged` | emitted when `open` prop changes | `CustomEvent<any>` |


## Slots

| Slot              | Description                |
| ----------------- | -------------------------- |
| `"canvasContent"` | Slot for the main content. |


## Dependencies

### Used by

 - [z-app-header](../z-app-header)
 - [z-app-header-deprecated](../deprecated/z-app-header-deprecated)

### Graph
```mermaid
graph TD;
  z-app-header --> z-offcanvas
  z-app-header-deprecated --> z-offcanvas
  style z-offcanvas fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
