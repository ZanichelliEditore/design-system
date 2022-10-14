# z-pocket-body

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description   | Type                                                               | Default                |
| ---------- | ---------- | ------------- | ------------------------------------------------------------------ | ---------------------- |
| `pocketid` | `pocketid` | pocket id     | `string`                                                           | `undefined`            |
| `status`   | `status`   | pocket status | `PocketStatus.CLOSED \| PocketStatus.OPEN \| PocketStatus.PREVIEW` | `PocketStatus.PREVIEW` |


## Slots

| Slot | Description         |
| ---- | ------------------- |
|      | pocket body content |


## Dependencies

### Used by

 - [z-messages-pocket](../z-messages-pocket)

### Graph
```mermaid
graph TD;
  z-messages-pocket --> z-pocket-body
  style z-pocket-body fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
