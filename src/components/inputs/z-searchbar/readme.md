# z-searchbar



<!-- Auto Generated Below -->


## Properties

| Property               | Attribute                | Description                                                                   | Type                                                                                                  | Default                     |
| ---------------------- | ------------------------ | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | --------------------------- |
| `autocomplete`         | `autocomplete`           | Show autocomplete results                                                     | `boolean`                                                                                             | `false`                     |
| `autocompleteMinChars` | `autocomplete-min-chars` | Minimun number of characters to dispatch typing event                         | `number`                                                                                              | `3`                         |
| `htmlid`               | `htmlid`                 | the id of the searchbar element                                               | `string`                                                                                              | ``searchbar-${randomId()}`` |
| `placeholder`          | `placeholder`            | Search input placeholder                                                      | `string`                                                                                              | `undefined`                 |
| `preventSubmit`        | `prevent-submit`         | Prevent submit action                                                         | `boolean`                                                                                             | `false`                     |
| `resultsCount`         | `results-count`          | Number of results shown - default all                                         | `number`                                                                                              | `undefined`                 |
| `resultsEllipsis`      | `results-ellipsis`       | Truncate results to single row                                                | `boolean`                                                                                             | `true`                      |
| `resultsItems`         | `results-items`          | Autocomplete results items                                                    | `SearchbarItem[] \| string`                                                                           | `undefined`                 |
| `searchHelperLabel`    | `search-helper-label`    | Search helper text                                                            | `string`                                                                                              | `"Cerca {searchString}"`    |
| `showSearchButton`     | `show-search-button`     | Show submit button                                                            | `boolean`                                                                                             | `false`                     |
| `size`                 | `size`                   | Available sizes: `big`, `small` and `x-small`. Defaults to `big`.             | `ControlSize.BIG \| ControlSize.SMALL \| ControlSize.X_SMALL`                                         | `ControlSize.BIG`           |
| `sortResultsItems`     | `sort-results-items`     | Sort autocomplete results items                                               | `boolean`                                                                                             | `false`                     |
| `value`                | `value`                  | Input search string                                                           | `string`                                                                                              | `undefined`                 |
| `variant`              | `variant`                | Graphical variant: `primary`, `secondary`, `tertiary`. Defaults to `primary`. | `ButtonVariant.DARK_BG \| ButtonVariant.PRIMARY \| ButtonVariant.SECONDARY \| ButtonVariant.TERTIARY` | `ButtonVariant.PRIMARY`     |


## Events

| Event             | Description                                    | Type                                                                                                   |
| ----------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `searchItemClick` | Emitted on search result click, return item    | `CustomEvent<{ label: string; id?: string; icon?: string; category?: string; subcategory?: string; }>` |
| `searchSubmit`    | Emitted on search submit, return search string | `CustomEvent<string>`                                                                                  |
| `searchTyping`    | Emitted on search typing, return search string | `CustomEvent<string>`                                                                                  |


## Dependencies

### Depends on

- [z-input](../z-input)
- [z-button](../../buttons/z-button)
- [z-list](../../list/z-list)
- [z-list-group](../../list/z-list-group)
- [z-list-element](../../list/z-list-element)
- [z-icon](../../icons/z-icon)
- [z-link](../../navigation/z-link)

### Graph
```mermaid
graph TD;
  z-searchbar --> z-input
  z-searchbar --> z-button
  z-searchbar --> z-list
  z-searchbar --> z-list-group
  z-searchbar --> z-list-element
  z-searchbar --> z-icon
  z-searchbar --> z-link
  z-input --> z-icon
  z-input --> z-input-message
  z-input-message --> z-icon
  z-button --> z-icon
  z-list-group --> z-divider
  z-list-element --> z-icon
  z-list-element --> z-divider
  z-link --> z-icon
  style z-searchbar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
