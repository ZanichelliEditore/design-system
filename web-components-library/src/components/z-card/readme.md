# z-card



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description | Type      | Default     |
| ----------- | ----------- | ----------- | --------- | ----------- |
| `carddata`  | `carddata`  |             | `any`     | `undefined` |
| `cardtype`  | `cardtype`  |             | `string`  | `undefined` |
| `hasbutton` | `hasbutton` |             | `boolean` | `undefined` |
| `isremoved` | `isremoved` |             | `boolean` | `true`      |


## Events

| Event             | Description | Type               |
| ----------------- | ----------- | ------------------ |
| `headerIconClick` |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [z-card-manager](../z-card-manager)

### Depends on

- [z-card-header](z-card-header)
- [z-card-body](z-card-body)
- [z-card-footer](z-card-footer)

### Graph
```mermaid
graph TD;
  z-card --> z-card-header
  z-card --> z-card-body
  z-card --> z-card-footer
  z-card-manager --> z-card
  style z-card fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
