# z-card-footer

<!-- readme-group="card" -->

```html
<z-card-footer titolo="titolo" autori="autori" anno="2019" isbn="9788808620713">{list slot}{toggle slot}</z-card-footer>
<z-card-footer titolo="titolo" autori="autori autori autori" anno="2019" isbn="97-88-80-8620-710" faded=true>{list slot}{toggle slot}</z-card-footer>
<z-card-footer cardtype="reale" titolo="titolo" autori="autoriautori autori" anno="2019" isbn="97-88-80-8620-710">{list slot}{toggle slot}</z-card-footer>
```

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                         | Type                                                                       | Default     |
| ---------- | ---------- | ----------------------------------- | -------------------------------------------------------------------------- | ----------- |
| `autori`   | `autori`   | authors name text                   | `string`                                                                   | `undefined` |
| `cardtype` | `cardtype` | card graphic variant (optional)     | `LicenseTypeEnum.real \| LicenseTypeEnum.trial \| LicenseTypeEnum.virtual` | `undefined` |
| `faded`    | `faded`    | faded status                        | `boolean`                                                                  | `undefined` |
| `isbn`     | `isbn`     | volume isbn                         | `string`                                                                   | `undefined` |
| `opened`   | `opened`   | footer opened by default (optional) | `boolean`                                                                  | `false`     |
| `titolo`   | `titolo`   | volume title                        | `string`                                                                   | `undefined` |


## Slots

| Slot       | Description              |
| ---------- | ------------------------ |
| `"list"`   | card resources list slot |
| `"toggle"` | toggle button slot       |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
