# z-myz-card

<!-- readme-group="card" -->

```html
<z-myz-card>{slot}</z-myz-card>
<z-myz-card faded="true">{slot}</z-myz-card>
<z-myz-card ishighlighted>{slot}</z-myz-card>
<z-myz-card ispressed>{slot}</z-myz-card>
<z-myz-card faded="true">{slot}</z-myz-card>
<z-myz-card cardtype="reale">{slot}</z-myz-card>
<z-myz-card
  cardtype="reale"
  ishighlighted
  >{slot}</z-myz-card
>
<z-myz-card
  cardtype="reale"
  ispressed
  >{slot}</z-myz-card
>
```

<!-- Auto Generated Below -->


## Properties

| Property        | Attribute       | Description                | Type                                                                               | Default     |
| --------------- | --------------- | -------------------------- | ---------------------------------------------------------------------------------- | ----------- |
| `cardtype`      | `cardtype`      | graphic variant (optional) | `LicenseType.REAL \| LicenseType.TEMP \| LicenseType.TRIAL \| LicenseType.VIRTUAL` | `undefined` |
| `faded`         | `faded`         | faded status               | `boolean`                                                                          | `undefined` |
| `ishighlighted` | `ishighlighted` | highlighted status         | `boolean`                                                                          | `false`     |
| `ispressed`     | `ispressed`     | pressed status             | `boolean`                                                                          | `false`     |


## Slots

| Slot | Description       |
| ---- | ----------------- |
|      | generic card slot |


## Dependencies

### Used by

 - [z-myz-card-dictionary](../z-myz-card-dictionary)

### Graph
```mermaid
graph TD;
  z-myz-card-dictionary --> z-myz-card
  style z-myz-card fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
