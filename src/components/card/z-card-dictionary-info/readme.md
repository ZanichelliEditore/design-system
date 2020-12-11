# z-card-dictionary-info



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description     | Type                                                                                                                                                             | Default     |
| -------- | --------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `data`   | `data`    | dictionary info | `string \| { author: string; year: string; title: string; description: string; online_license: DictionaryLicenseData; offline_license: DictionaryLicenseData; }` | `undefined` |


## Events

| Event       | Description        | Type               |
| ----------- | ------------------ | ------------------ |
| `closeInfo` | flip card to front | `CustomEvent<any>` |


## Slots

| Slot | Description |
| ---- | ----------- |
|      | content     |


## Dependencies

### Depends on

- [z-icon](../../icons/z-icon)

### Graph
```mermaid
graph TD;
  z-card-dictionary-info --> z-icon
  style z-card-dictionary-info fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
