# z-card-info

<!-- Auto Generated Below -->


## Properties

| Property       | Attribute      | Description                        | Type                                                                                                                                                           | Default     |
| -------------- | -------------- | ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `data`         | `data`         | dictionary info                    | `string \| { author: string; year: string; title: string; description: string; onlineLicense: DictionaryLicenseData; offlineLicense: DictionaryLicenseData; }` | `undefined` |
| `htmltabindex` | `htmltabindex` | tabindex link attribute (optional) | `number`                                                                                                                                                       | `0`         |


## Events

| Event      | Description        | Type               |
| ---------- | ------------------ | ------------------ |
| `flipCard` | flip card to front | `CustomEvent<any>` |


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
  z-card-info --> z-icon
  style z-card-info fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
