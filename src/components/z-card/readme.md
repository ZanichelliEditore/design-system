# z-card

[Abstract](https://app.abstract.com/projects/fd370780-e659-11e8-99dc-0d08537c5fde/branches/e696391e-bd14-4345-a98c-78343d192340/commits/5078c674ea888e961e09ac28741f206cb8506111/files/9f586aa0-bd5b-4c12-9541-aed2e98a7a9c/layers/61FBCDE5-1C49-442B-A262-EA3E73FA352F?collectionId=12a021f0-42e6-4e22-b64a-df001c3d6917&collectionLayerId=9986ef95-6efb-4e31-ae1f-c037d0f16b9d&mode=build&selected=root-45C828A6-52D2-4722-8891-AEEAA2C6E021)

## Implementation state

Variants:

- [x] Default
- [x] Border
- [x] Shadow
- [x] Overlay
- [ ] Text

Orientation:

- [x] Vertical
- [ ] Horizontal

Interactions:

- [x] Click
- [ ] Multi select
- [ ] Hover actions
- [ ] Reveal

Cover variants:

- [x] Horizontal
- [ ] Vertical
- [x] With icon
- [ ] Square
- [ ] Circle

---

## CSS Variables

- `--z-card--color-cover-background`: used to set the background color of the color cover.
- `--z-card--border-color`: used to set the border color of the card.
- `--aspect-ratio`: used to set the ratio of the cover (respecting the indications of the design). Default is `1.62`.

---

## Notes

The width of the card must be set externally, respecting the grid indication of the design.

---

<!-- Auto Generated Below -->

## Properties

| Property    | Attribute    | Description                                                                                                 | Type                                                                 | Default     |
| ----------- | ------------ | ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | ----------- |
| `clickable` | `clickable`  | Enable click interactions on the card. Default: false                                                       | `boolean`                                                            | `false`     |
| `coverIcon` | `cover-icon` | Name of the icon to place over the image cover                                                              | `string`                                                             | `undefined` |
| `variant`   | `variant`    | Card variant. Can be one of "text", "border", "shadow", "overlay". Leave it undefined for the default card. | `CardVariants.border \| CardVariants.overlay \| CardVariants.shadow` | `undefined` |

## Events

| Event         | Description                                          | Type               |
| ------------- | ---------------------------------------------------- | ------------------ |
| `cardClicked` | Card click event. Fired only if `clickable` is true. | `CustomEvent<any>` |

## Dependencies

### Depends on

- [z-icon](../icons/z-icon)

### Graph

```mermaid
graph TD;
  z-card --> z-icon
  style z-card fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
