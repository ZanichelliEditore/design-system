# z-otp



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description | Type                                | Default     |
| ---------- | ----------- | ----------- | ----------------------------------- | ----------- |
| `inputNum` | `input-num` |             | `number`                            | `6`         |
| `message`  | `message`   |             | `string`                            | `undefined` |
| `status`   | `status`    |             | `"error" \| "success" \| "warning"` | `undefined` |


## Events

| Event       | Description | Type               |
| ----------- | ----------- | ------------------ |
| `otpChange` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [z-input-message](../../../components/inputs/z-input-message)

### Graph
```mermaid
graph TD;
  z-otp --> z-input-message
  z-input-message --> z-icon
  style z-otp fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
