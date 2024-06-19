# z-myz-card-alert

<!-- readme-group="card" -->

```html
<z-myz-card-alert
  slot="alert"
  iconName="checkmark-circle"
  contenttext="Libro aggiunto ai miei libri"
  actiontext="Annulla"
  type="add"
></z-myz-card-alert>
<z-myz-card-alert
  slot="alert"
  iconName="checkmark-circle"
  contenttext="Libro rimosso dai tuoi libri"
  actiontext="annulla"
  type="remove"
  faded="true"
></z-myz-card-alert>
<z-myz-card-alert
  slot="alert"
  iconName="checkmark-circle"
  contenttext="Libro rimosso dai tuoi libri"
  type="remove"
  faded="true"
></z-myz-card-alert>
<z-myz-card-alert
  slot="alert"
  iconName="checkmark-circle"
  contenttext="Libro aggiunto ai miei libri"
  type="add"
></z-myz-card-alert>
```

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description        | Type     | Default     |
| ------------- | ------------- | ------------------ | -------- | ----------- |
| `actiontext`  | `actiontext`  | action button text | `string` | `undefined` |
| `contenttext` | `contenttext` | content text       | `string` | `undefined` |
| `iconname`    | `iconname`    | icon name          | `string` | `undefined` |
| `type`        | `type`        | alert variant type | `string` | `undefined` |


## Events

| Event        | Description                                          | Type               |
| ------------ | ---------------------------------------------------- | ------------------ |
| `undoAction` | undo action click/keyboard event, returns actionType | `CustomEvent<any>` |


## Dependencies

### Depends on

- [z-alert](../../z-alert)
- [z-icon](../../../../components/z-icon)

### Graph
```mermaid
graph TD;
  z-myz-card-alert --> z-alert
  z-myz-card-alert --> z-icon
  style z-myz-card-alert fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
