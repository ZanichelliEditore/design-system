# z-offcanvas

[Abstract](https://app.abstract.com/share/9c363a6e-21fd-41a3-8458-7ea71ab4a477?collectionLayerId=68ca70b2-f3c1-4961-b56d-04775daea44e&mode=design)

## CSS Variables

- `--z-offcanvas--container-width`: set the minimum width of the canvas
- `--z-offcanvas--top-space`: set the top space left on top of the canvas in overlay variant

<!-- Auto Generated Below -->


## Properties

| Property              | Attribute             | Description                                                                            | Type                                                                 | Default                             |
| --------------------- | --------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | ----------------------------------- |
| `open`                | `open`                | open component. Default: false                                                         | `boolean`                                                            | `false`                             |
| `transitiondirection` | `transitiondirection` | open content transitioning in a specified direction left \| right. Default: left       | `TransitionDirectionEnum.left \| TransitionDirectionEnum.right`      | `TransitionDirectionEnum.left`      |
| `variant`             | `variant`             | Offcanvas variant. Can be one of "overlay", "pushcontent" Default variant: pushcontent | `OffCanvasVariantsEnum.overlay \| OffCanvasVariantsEnum.pushcontent` | `OffCanvasVariantsEnum.pushcontent` |


## Events

| Event                     | Description                    | Type               |
| ------------------------- | ------------------------------ | ------------------ |
| `canvasOpenStatusChanged` | emitted when open prop changes | `CustomEvent<any>` |


## Slots

| Slot              | Description                   |
| ----------------- | ----------------------------- |
| `"canvasContent"` | set the content of the canvas |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
