# z-modal-login

<!-- Auto Generated Below -->


## Properties

| Property            | Attribute             | Description                    | Type                                               | Default                   |
| ------------------- | --------------------- | ------------------------------ | -------------------------------------------------- | ------------------------- |
| `forgotPasswordUrl` | `forgot-password-url` | Forgot Password Url            | `string`                                           | `undefined`               |
| `heading`           | `heading`             | Login modal title              | `string`                                           | `"Entra in MyZanichelli"` |
| `message`           | `message`             | Username helper message        | `string`                                           | `undefined`               |
| `pwdmessage`        | `pwdmessage`          | Password helper message        | `string`                                           | `undefined`               |
| `status`            | `status`              | Username/password input status | `"error" \| "selecting" \| "success" \| "warning"` | `undefined`               |


## Events

| Event                | Description                            | Type               |
| -------------------- | -------------------------------------- | ------------------ |
| `loginSubmit`        | Emitted on login submit                | `CustomEvent<any>` |
| `signupClick`        | Emitted on signup button click         | `CustomEvent<any>` |
| `statusUpdate`       | Emitted on status update               | `CustomEvent<any>` |
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

- [z-button](../../buttons/z-button)
- [z-modal](../z-modal)
- [z-input](../../inputs/z-input)
- [z-link](../../navigation/z-link)
- [z-body](../../typography/z-body)

### Graph
```mermaid
graph TD;
  z-modal-login --> z-button
  z-modal-login --> z-modal
  z-modal-login --> z-input
  z-modal-login --> z-link
  z-modal-login --> z-body
  z-button --> z-icon
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
  z-body --> z-typography
  style z-modal-login fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
