# z-carousel

<<<<<<< HEAD
=======
Show element in a carousel.
Elements are passed to carousel using slots. 
To activate keyboard navigation through elements, use any <a href="https://html.spec.whatwg.org/multipage/interaction.html#the-tabindex-attribute">"tabbable" element</a> or add the attribute `tabindex="0"`.

Progress indicators are only shown in single mode.
To activate single mode, set the attribute `single` to `true` and set a width to the carousel.

>>>>>>> master
<!-- Auto Generated Below -->


## Properties

| Property             | Attribute              | Description                                                                                                                          | Type                                                           | Default     |
| -------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------- | ----------- |
| `arrowsPosition`     | `arrows-position`      | Arrow buttons position                                                                                                               | `CarouselArrowsPosition.BOTTOM \| CarouselArrowsPosition.OVER` | `undefined` |
| `ghostLoadingHeight` | `ghost-loading-height` | The height of z-carousel ghost loading, this prop is mandatory when isloading is set to true, as otherwise the component won't show. | `number`                                                       | `100`       |
| `isLoading`          | `is-loading`           | The z-carousel is on loading state                                                                                                   | `boolean`                                                      | `undefined` |
| `label`              | `label`                | The z-carousel title, if given.                                                                                                      | `string`                                                       | `undefined` |
| `progressMode`       | `progress-mode`        | Progress indicator. Only available for `single` mode                                                                                 | `CarouselProgressMode.DOTS \| CarouselProgressMode.NUMBERS`    | `undefined` |
| `single`             | `single`               | Shows only one content at a time                                                                                                     | `boolean`                                                      | `false`     |


## Events

| Event         | Description                                        | Type               |
| ------------- | -------------------------------------------------- | ------------------ |
| `indexChange` | Emitted on index change and only in `single` mode. | `CustomEvent<any>` |


## Slots

| Slot | Description                                                                            |
| ---- | -------------------------------------------------------------------------------------- |
|      | carousel items. use `<li>` elements inside this slot as it is wrapped inside an `<ul>` |


## Dependencies

### Depends on

- [z-ghost-loading](../z-ghost-loading)
- [z-button](../buttons/z-button)
- [z-icon](../icons/z-icon)

### Graph
```mermaid
graph TD;
  z-carousel --> z-ghost-loading
  z-carousel --> z-button
  z-carousel --> z-icon
  z-button --> z-icon
  style z-carousel fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
