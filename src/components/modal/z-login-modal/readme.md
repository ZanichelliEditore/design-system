# z-login-modal



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description                    | Type                                               | Default     |
| --------- | --------- | ------------------------------ | -------------------------------------------------- | ----------- |
| `message` | `message` | Username helper message        | `string`                                           | `undefined` |
| `status`  | `status`  | Username/password input status | `"error" \| "selecting" \| "success" \| "warning"` | `undefined` |


## Events

| Event                | Description                            | Type               |
| -------------------- | -------------------------------------- | ------------------ |
| `facebookClick`      | Emitted on facebook button click       | `CustomEvent<any>` |
| `googleClick`        | Emitted on google button click         | `CustomEvent<any>` |
| `loginSubmit`        | Emitted on login submit                | `CustomEvent<any>` |
| `signupClick`        | Emitted on signup button click         | `CustomEvent<any>` |
| `zainoDigitaleClick` | Emitted on zaino digitale button click | `CustomEvent<any>` |


## Slots

| Slot         | Description                       |
| ------------ | --------------------------------- |
| `"login"`    | login button                      |
| `"password"` | password input                    |
| `"provider"` | expternal providers login buttons |
| `"signup"`   | signup button                     |
| `"username"` | username input                    |


## Dependencies

### Depends on

- [z-modal](../z-modal)
- [z-input](../../inputs/z-input)
- [z-link](../../navigation/z-link)
- [z-button](../../buttons/z-button)
- [z-body](../../typography/z-body)

### Graph
```mermaid
graph TD;
  z-login-modal --> z-modal
  z-login-modal --> z-input
  z-login-modal --> z-link
  z-login-modal --> z-button
  z-login-modal --> z-body
  z-modal --> z-icon
  z-input --> z-input-label
  z-input --> z-icon
  z-input --> z-input-message
  z-input --> z-select
  z-input-message --> z-icon
  z-select --> z-input-label
  z-select --> z-input
  z-select --> z-button-filter
  z-select --> z-icon
  z-select --> z-input-message
  z-button-filter --> z-icon
  z-link --> z-icon
  z-button --> z-icon
  z-body --> z-typography
  style z-login-modal fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
