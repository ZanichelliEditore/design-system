# z-table-header

<!-- Auto Generated Below -->


## Properties

| Property               | Attribute                | Description                                                  | Type                                                                      | Default              |
| ---------------------- | ------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------------------- | -------------------- |
| `columnId`             | `column-id`              | Column ID                                                    | `string`                                                                  | `undefined`          |
| `defaultSortDirection` | `default-sort-direction` | [Optional] Default sort order                                | `SortDirection.ASC \| SortDirection.DESC \| SortDirection.NONE`           | `SortDirection.ASC`  |
| `padding`              | `padding`                | Set padding size of cell, if special 0px padding will be set | `Size.LARGE \| Size.MEDIUM \| Size.SMALL \| Size.SPECIAL \| Size.X_SMALL` | `Size.MEDIUM`        |
| `showButton`           | `show-button`            | [Optional] Show contextual menu button                       | `boolean`                                                                 | `undefined`          |
| `sortDirection`        | `sort-direction`         | Sort direction                                               | `SortDirection.ASC \| SortDirection.DESC \| SortDirection.NONE`           | `SortDirection.NONE` |
| `sortable`             | `sortable`               | [Optional] Make the header sortable                          | `boolean`                                                                 | `undefined`          |


## Events

| Event  | Description                     | Type               |
| ------ | ------------------------------- | ------------------ |
| `sort` | [Optional] callback for sorting | `CustomEvent<any>` |


## Dependencies

### Used by

 - [z-table-header-row](../z-table-header-row)

### Depends on

- [z-icon](../../icons/z-icon)
- [z-button](../../buttons/z-button)
- [z-popover](../../z-popover)

### Graph
```mermaid
graph TD;
  z-table-header --> z-icon
  z-table-header --> z-button
  z-table-header --> z-popover
  z-button --> z-icon
  z-table-header-row --> z-table-header
  style z-table-header fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
