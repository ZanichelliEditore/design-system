# z-combobox

<!-- readme-group="combobox" -->

```html
<z-combobox
  inputid="combo_1"
  items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true}]'
  hassearch="true"
  searchlabel="Autore"
  searchplaceholder="Cerca Autore"
  label="Combo Corta"
  closesearchtext="CHIUDI"
  isopen="true"
></z-combobox>
<z-combobox
  inputid="combo_2"
  items='[{"id":"item_1","name":"primo elemento","checked":false},{"id":"item_2","name":"secondo elemento","checked":true},{"id":"item_3","name":"terzo","checked":false},{"id":"item_4","name":"quarto elemento","checked":true},{"id":"item_5","name":"quinto elemento","checked":false},{"id":"item_6","name":"sesto elemento","checked":true}]'
  hassearch="true"
  searchlabel="Autore"
  searchplaceholder="Cerca Autore"
  label="Combo Corta"
  label="Combo Lunga"
  closesearchtext="CHIUDI"
></z-combobox>
```

<!-- Auto Generated Below -->

## Properties

| Property            | Attribute           | Description                                   | Type                        | Default               |
| ------------------- | ------------------- | --------------------------------------------- | --------------------------- | --------------------- |
| `checkalltext`      | `checkalltext`      | check all label (optional)                    | `string`                    | `"Seleziona tutti"`   |
| `closesearchtext`   | `closesearchtext`   | close combobox list text                      | `string`                    | `"Chiudi"`            |
| `hascheckall`       | `hascheckall`       | show "check all" checkbox (optional)          | `boolean`                   | `false`               |
| `hassearch`         | `hassearch`         | show search input flag (optional)             | `boolean`                   | `false`               |
| `inputid`           | `inputid`           | input unique id                               | `string`                    | `undefined`           |
| `isfixed`           | `isfixed`           | fixed style flag                              | `boolean`                   | `false`               |
| `isopen`            | `isopen`            | toggle combo list opening flag                | `boolean`                   | `false`               |
| `items`             | `items`             | list items array                              | `ComboItemBean[] \| string` | `undefined`           |
| `label`             | `label`             | label text                                    | `string`                    | `undefined`           |
| `maxcheckableitems` | `maxcheckableitems` | max number of checkable items (0 = unlimited) | `number`                    | `0`                   |
| `noresultslabel`    | `noresultslabel`    | no result text message                        | `string`                    | `"Nessun risultato"`  |
| `searchlabel`       | `searchlabel`       | search input label text (optional)            | `string`                    | `undefined`           |
| `searchplaceholder` | `searchplaceholder` | search input placeholder text (optional)      | `string`                    | `undefined`           |
| `searchtitle`       | `searchtitle`       | search input title text (optional)            | `string`                    | `undefined`           |
| `uncheckalltext`    | `uncheckalltext`    | uncheck all label (optional)                  | `string`                    | `"Deseleziona tutti"` |

## Events

| Event            | Description                                                 | Type               |
| ---------------- | ----------------------------------------------------------- | ------------------ |
| `comboboxChange` | Emitted when value is checked/unchecked. Returns id, items. | `CustomEvent<any>` |

## Dependencies

### Depends on

- [z-body](../../typography/z-body)
- [z-icon](../../icons/z-icon)
- [z-myz-list-item](../../../snowflakes/myz/list/z-myz-list-item)
- [z-input](../z-input)

### Graph

```mermaid
graph TD;
  z-combobox --> z-body
  z-combobox --> z-icon
  z-combobox --> z-myz-list-item
  z-combobox --> z-input
  z-body --> z-typography
  z-myz-list-item --> z-icon
  z-input --> z-icon
  z-input --> z-input-message
  z-input-message --> z-icon
  style z-combobox fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
