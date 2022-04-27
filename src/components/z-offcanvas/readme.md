# z-offcanvas



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute            | Description                                                         | Type      | Default          |
| ------------------ | -------------------- | ------------------------------------------------------------------- | --------- | ---------------- |
| `alignleft`        | `alignleft`          | move the component on the left side of the viewport. Default: false | `boolean` | `false`          |
| `closeButtonLabel` | `close-button-label` | aria-label for close button (optional)                              | `string`  | `"close canvas"` |
| `open`             | `open`               | open component. Default: false                                      | `boolean` | `false`          |


## Events

| Event                   | Description                   | Type               |
| ----------------------- | ----------------------------- | ------------------ |
| `canvasBackgroundClick` | emitted on background click   | `CustomEvent<any>` |
| `canvasClose`           | emitted on close button click | `CustomEvent<any>` |


## Slots

| Slot                  | Description                   |
| --------------------- | ----------------------------- |
| `"canvasCloseButton"` | accept custom close button    |
| `"canvasContent"`     | set the content of the canvas |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
