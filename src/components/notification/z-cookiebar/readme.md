# z-cookiebar



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute         | Description                                    | Type        | Default     |
| ----------------- | ----------------- | ---------------------------------------------- | ----------- | ----------- |
| `callback`        | --                | callback to handle ok button action (optional) | `() => any` | `undefined` |
| `cookiepolicyurl` | `cookiepolicyurl` | cookie policy link url                         | `string`    | `undefined` |
| `hide`            | `hide`            | hide cookie bar (optional)                     | `boolean`   | `undefined` |


## Events

| Event           | Description                               | Type               |
| --------------- | ----------------------------------------- | ------------------ |
| `okButtonClick` | emitted on OK button click, returns event | `CustomEvent<any>` |
| `okButtonKeyUp` | emitted on OK button keyUp, returns event | `CustomEvent<any>` |


## Dependencies

### Depends on

- [z-button](../../buttons/z-button)
- [z-candybar](../z-candybar)

### Graph
```mermaid
graph TD;
  z-cookiebar --> z-button
  z-cookiebar --> z-candybar
  z-button --> z-icon
  style z-cookiebar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
