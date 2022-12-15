# z-searchbar



<!-- Auto Generated Below -->


## Properties

| Property               | Attribute                | Description                                           | Type              | Default     |
| ---------------------- | ------------------------ | ----------------------------------------------------- | ----------------- | ----------- |
| `autocompleteMinChars` | `autocomplete-min-chars` | Minimun number of characters to dispatch typing event | `number`          | `3`         |
| `automplete`           | `automplete`             | Show autocomplete results                             | `boolean`         | `false`     |
| `preventSubmit`        | `prevent-submit`         | Show simple input without submit button               | `boolean`         | `false`     |
| `resultsCount`         | `results-count`          | Number of results shown - default all                 | `number`          | `undefined` |
| `resultsEllipsis`      | `results-ellipsis`       | Truncate results to single row                        | `boolean`         | `true`      |
| `resultsItems`         | --                       | Autocomplete results items                            | `SearchbarItem[]` | `undefined` |


## Events

| Event          | Description                                          | Type               |
| -------------- | ---------------------------------------------------- | ------------------ |
| `seachSubmit`  | Emitted on search submit, return search string       | `CustomEvent<any>` |
| `searchTyping` | Emitted when user stops typing, return search string | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
