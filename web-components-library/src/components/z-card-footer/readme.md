# z-card-footer

<!-- readme-group="card" -->

```html
<z-card-footer titolo="titolo" autori="autori" anno="2019" isbn="9788808620713">{list slot}{toggle slot}</z-card-footer>
<z-card-footer titolo="titolo" autori="autori autori autori" anno="2019" isbn="97-88-80-8620-710" faded=true>{list slot}{toggle slot}</z-card-footer>
<z-card-footer cardtype="reale" titolo="titolo" autori="autoriautori autori" anno="2019" isbn="97-88-80-8620-710">{list slot}{toggle slot}</z-card-footer>
```

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                     | Type                                                                       | Default      |
| ------------- | ------------- | ------------------------------- | -------------------------------------------------------------------------- | ------------ |
| `anno`        | `anno`        | year                            | `number`                                                                   | `undefined`  |
| `annolabel`   | `annolabel`   | year label                      | `string`                                                                   | `"Edizione"` |
| `autori`      | `autori`      | authors name text               | `string`                                                                   | `undefined`  |
| `autorilabel` | `autorilabel` | authors label text              | `string`                                                                   | `"Autore"`   |
| `cardtype`    | `cardtype`    | card graphic variant (optional) | `LicenseTypeEnum.essay \| LicenseTypeEnum.real \| LicenseTypeEnum.virtual` | `undefined`  |
| `faded`       | `faded`       | faded status                    | `boolean`                                                                  | `undefined`  |
| `isbn`        | `isbn`        | volume isbn                     | `string`                                                                   | `undefined`  |
| `titolo`      | `titolo`      | volume title                    | `string`                                                                   | `undefined`  |


## Slots

| Slot       | Description              |
| ---------- | ------------------------ |
| `"list"`   | card resources list slot |
| `"toggle"` | toggle button slot       |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
