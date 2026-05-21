# z-pagination

<!-- Auto Generated Below -->


## Overview

Pagination bar component.

## Properties

| Property                  | Attribute       | Description                                                                               | Type      | Default     |
| ------------------------- | --------------- | ----------------------------------------------------------------------------------------- | --------- | ----------- |
| `currentPage`             | `current-page`  | Current page.                                                                             | `number`  | `1`         |
| `edges`                   | `edges`         | Enable buttons to go to the first and last pages.                                         | `boolean` | `false`     |
| `goToPage`                | `go-to-page`    | Whether to show "go to page" feature.                                                     | `boolean` | `undefined` |
| `label`                   | `label`         | Pagination label placed before the bar.                                                   | `string`  | `undefined` |
| `navArrows`               | `nav-arrows`    | Enable navigation arrows.                                                                 | `boolean` | `true`      |
| `skip`                    | `skip`          | Number of pages to skip.                                                                  | `number`  | `0`         |
| `split`                   | `split`         | Number of pages to show left/right of the current, before showing "load more" symbol (…). | `number`  | `undefined` |
| `totalPages` _(required)_ | `total-pages`   | Total number of pages. Required.                                                          | `number`  | `undefined` |
| `visiblePages`            | `visible-pages` | Number of pages to show at a time. If not set, all pages will be shown.                   | `number`  | `undefined` |


## Events

| Event         | Description                                      | Type               |
| ------------- | ------------------------------------------------ | ------------------ |
| `pageChanged` | Event emitted when the current page has changed. | `CustomEvent<any>` |


## CSS Custom Properties

| Name                                        | Description                                                                                |
| ------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `--z-pagination--page-button-width`         | Width of the pagination's page buttons. The default is 64px on mobile and 88px on desktop. |
| `--z-pagination--pages-container-max-width` | Max width of the container of the page buttons. The default is 100% (full width).          |
| `--z-pagination-background-color`           | Background of the pagination's tabs. The default is --color-background                     |
| `--z-pagination-background-color-hover`     | Background of the pagination's tabs on hover. The default is --color-surface01             |


## Dependencies

### Depends on

- [z-icon](../z-icon)
- [z-input](../z-input)
- [z-button](../z-button)

### Graph
```mermaid
graph TD;
  z-pagination --> z-icon
  z-pagination --> z-input
  z-pagination --> z-button
  z-input --> z-icon
  z-input --> z-input-message
  z-input-message --> z-icon
  z-button --> z-icon
  style z-pagination fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
