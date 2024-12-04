# z-file-upload

<!-- Auto Generated Below -->


## Properties

| Property                 | Attribute                  | Description                                                            | Type                                                                         | Default                                           |
| ------------------------ | -------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------- |
| `acceptedFormat`         | `accepted-format`          | Prop indicating the accepted file type: ex ".pdf, .doc, .jpg"          | `string`                                                                     | `undefined`                                       |
| `allowedFilesMessage`    | `allowed-files-message`    | allowed file message                                                   | `string`                                                                     | `undefined`                                       |
| `buttonVariant`          | `button-variant`           | Prop indicating the button variant                                     | `ButtonVariant.PRIMARY \| ButtonVariant.SECONDARY \| ButtonVariant.TERTIARY` | `undefined`                                       |
| `description`            | `description`              | Description                                                            | `string`                                                                     | `undefined`                                       |
| `dragAndDropLabel`       | `drag-and-drop-label`      | drag & drop button label                                               | `string`                                                                     | `"Rilascia i file in questa area per allegarli."` |
| `errorModalMessage`      | `error-modal-message`      | error modal message                                                    | `string`                                                                     | `undefined`                                       |
| `errorModalTitle`        | `error-modal-title`        | error modal title                                                      | `string`                                                                     | `"Errore di caricamento"`                         |
| `fileMaxSize`            | `file-max-size`            | Max file dimension in Megabyte                                         | `number`                                                                     | `undefined`                                       |
| `hasFileSection`         | `has-file-section`         | uploaded files history rendering                                       | `boolean`                                                                    | `true`                                            |
| `inputName`              | `input-name`               | Value to set on the file input's `name` attribute (for use with forms) | `string`                                                                     | `"z-file-upload"`                                 |
| `mainTitle`              | `main-title`               | Title                                                                  | `string`                                                                     | `undefined`                                       |
| `type`                   | `type`                     | Prop indicating the file upload type - can be default or dragdrop      | `ZFileUploadType.DEFAULT \| ZFileUploadType.DRAGDROP`                        | `ZFileUploadType.DEFAULT`                         |
| `uploadBtnLabel`         | `upload-btn-label`         | upoload button label                                                   | `string`                                                                     | `"allega"`                                        |
| `uploadClickableMessage` | `upload-clickable-message` | upload clickable message                                               | `string`                                                                     | `"Carica"`                                        |
| `uploadMessage`          | `upload-message`           | upload message                                                         | `string`                                                                     | `"o trascina dal tuo computer"`                   |
| `uploadedFilesLabel`     | `uploaded-files-label`     | loaded files label                                                     | `string`                                                                     | `"File appena caricati"`                          |


## Events

| Event       | Description                                | Type               |
| ----------- | ------------------------------------------ | ------------------ |
| `fileInput` | Emitted when user select one or more files | `CustomEvent<any>` |


## Methods

### `getFiles() => Promise<File[]>`

Get the list of uploaded files

#### Returns

Type: `Promise<File[]>`



### `removeFile(fileName: string) => Promise<void>`

Remove a previously uploaded file

#### Parameters

| Name       | Type     | Description |
| ---------- | -------- | ----------- |
| `fileName` | `string` |             |

#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [z-divider](../../z-divider)
- [z-button](../../z-button)
- [z-dragdrop-area](../z-dragdrop-area)
- [z-modal](../../z-modal)

### Graph
```mermaid
graph TD;
  z-file-upload --> z-divider
  z-file-upload --> z-button
  z-file-upload --> z-dragdrop-area
  z-file-upload --> z-modal
  z-button --> z-icon
  z-modal --> z-icon
  style z-file-upload fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
