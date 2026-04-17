# z-searchbar



<!-- Auto Generated Below -->


## Properties

| Property               | Attribute                 | Description                                                | Type                                                                         | Default                         |
| ---------------------- | ------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------- |
| `autocomplete`         | `autocomplete`            | Show autocomplete results                                  | `boolean`                                                                    | `false`                         |
| `autocompleteMinChars` | `autocomplete-min-chars`  | Minimun number of characters to dispatch typing event      | `number`                                                                     | `3`                             |
| `htmlAriaLabel`        | `html-aria-label`         | The input aria-label                                       | `string`                                                                     | `undefined`                     |
| `htmlid`               | `htmlid`                  | The id of the searchbar element                            | `string`                                                                     | `` `searchbar-${randomId()}` `` |
| `label`                | `label`                   | The input label                                            | `string`                                                                     | `undefined`                     |
| `placeholder`          | `placeholder`             | Search input placeholder                                   | `string`                                                                     | `undefined`                     |
| `preventSubmit`        | `prevent-submit`          | Prevent submit action                                      | `boolean`                                                                    | `false`                         |
| `resultsCount`         | `results-count`           | Number of results shown. Default: all                      | `number`                                                                     | `undefined`                     |
| `resultsItems`         | `results-items`           | Autocomplete results items                                 | `SearchbarItem[] \| string`                                                  | `undefined`                     |
| `searchButtonIconOnly` | `search-button-icon-only` | Hide the label of the submit button, showing only the icon | `boolean`                                                                    | `false`                         |
| `searchHelperLabel`    | `search-helper-label`     | Search helper text                                         | `string`                                                                     | `"Cerca {searchString}"`        |
| `showSearchButton`     | `show-search-button`      | Show submit button                                         | `boolean`                                                                    | `false`                         |
| `size`                 | `size`                    | Size of the `z-input` and submit `z-button`                | `ControlSize.BIG \| ControlSize.SMALL \| ControlSize.X_SMALL`                | `ControlSize.BIG`               |
| `sortResultsItems`     | `sort-results-items`      | Sort autocomplete results items                            | `boolean`                                                                    | `false`                         |
| `value`                | `value`                   | Input search string                                        | `string`                                                                     | `undefined`                     |
| `variant`              | `variant`                 | Submit `z-button` variant                                  | `ButtonVariant.PRIMARY \| ButtonVariant.SECONDARY \| ButtonVariant.TERTIARY` | `ButtonVariant.PRIMARY`         |


## Events

| Event             | Description                                    | Type                                                                                                                                                                                                          |
| ----------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `searchItemClick` | Emitted on search result click, return item    | `CustomEvent<{ label: string; id?: string; icon?: string; tag?: { icon?: string; text: string; }; category?: string; subcategory?: string; children?: Omit<SearchbarItem, "category" \| "subcategory">[]; }>` |
| `searchSubmit`    | Emitted on search submit, return search string | `CustomEvent<string>`                                                                                                                                                                                         |
| `searchTyping`    | Emitted on search typing, return search string | `CustomEvent<string>`                                                                                                                                                                                         |


## Dependencies

### Used by

 - [z-app-header](../z-app-header)
 - [z-app-header-deprecated](../deprecated/z-app-header-deprecated)

### Depends on

- [z-list-element](../list/z-list-element)
- [z-icon](../z-icon)
- [z-tag](../z-tag)
- [z-list](../list/z-list)
- [z-list-group](../list/z-list-group)
- [z-input](../z-input)
- [z-button](../z-button)

### Graph
```mermaid
graph TD;
  z-searchbar --> z-list-element
  z-searchbar --> z-icon
  z-searchbar --> z-tag
  z-searchbar --> z-list
  z-searchbar --> z-list-group
  z-searchbar --> z-input
  z-searchbar --> z-button
  z-list-element --> z-icon
  z-list-element --> z-divider
  z-tag --> z-icon
  z-list-group --> z-divider
  z-input --> z-icon
  z-input --> z-input-message
  z-input-message --> z-icon
  z-button --> z-icon
  z-app-header --> z-searchbar
  z-app-header-deprecated --> z-searchbar
  style z-searchbar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
