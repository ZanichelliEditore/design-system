# z-registro-table-header

<!-- readme-group="registro-table" -->

```html
<z-registro-table-header></z-registro-table-header>
```

<!-- Auto Generated Below -->


## Properties

| Property               | Attribute                | Description                                                  | Type                                                                                | Default                  |
| ---------------------- | ------------------------ | ------------------------------------------------------------ | ----------------------------------------------------------------------------------- | ------------------------ |
| `columnId`             | `column-id`              | Column ID                                                    | `string`                                                                            | `undefined`              |
| `defaultSortDirection` | `default-sort-direction` | [Optional] Default sort order                                | `SortDirectionEnum.asc \| SortDirectionEnum.desc \| SortDirectionEnum.none`         | `SortDirectionEnum.asc`  |
| `padding`              | `padding`                | Set padding size of cell, if special 0px padding will be set | `Size.large \| Size.medium \| Size.small \| Size.special \| typeof Size["x-small"]` | `Size.medium`            |
| `showButton`           | `show-button`            | [Optional] Show contextual menu button                       | `boolean`                                                                           | `undefined`              |
| `sortDirection`        | `sort-direction`         |                                                              | `SortDirectionEnum.asc \| SortDirectionEnum.desc \| SortDirectionEnum.none`         | `SortDirectionEnum.none` |
| `sortable`             | `sortable`               | [Optional] Make the header sortable                          | `boolean`                                                                           | `undefined`              |


## Events

| Event  | Description                     | Type               |
| ------ | ------------------------------- | ------------------ |
| `sort` | [Optional] callback for sorting | `CustomEvent<any>` |


## Dependencies

### Used by

 - [z-table-header-row](../z-table-header-row)

### Depends on

- [z-icon](../../icons/z-icon)
- [z-popover](../../z-popover)
- [z-button](../../buttons/z-button)

### Graph
```mermaid
graph TD;
  z-table-header --> z-icon
  z-table-header --> z-popover
  z-table-header --> z-button
  z-button --> z-icon
  z-table-header-row --> z-table-header
  style z-table-header fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
