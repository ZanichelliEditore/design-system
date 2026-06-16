# z-otp

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description   | Type                                                                    | Default     |
| ---------- | ----------- | ------------- | ----------------------------------------------------------------------- | ----------- |
| `inputNum` | `input-num` | Input number  | `number`                                                                | `6`         |
| `message`  | `message`   | Input message | `string`                                                                | `undefined` |
| `status`   | `status`    | Input status  | `SfInputStatus.ERROR \| SfInputStatus.SUCCESS \| SfInputStatus.WARNING` | `undefined` |


## Events

| Event       | Description      | Type               |
| ----------- | ---------------- | ------------------ |
| `otpChange` | Otp change event | `CustomEvent<any>` |


## Dependencies

### Depends on

- [z-sf-input-message](../../../components/z-sf-input-message)

### Graph
```mermaid
graph TD;
  z-otp --> z-sf-input-message
  z-sf-input-message --> z-sf-icon
  style z-otp fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
