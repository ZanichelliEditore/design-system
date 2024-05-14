# z-list-element

<!-- Auto Generated Below -->


## Properties

| Property              | Attribute               | Description                                                          | Type                                                                        | Default                          |
| --------------------- | ----------------------- | -------------------------------------------------------------------- | --------------------------------------------------------------------------- | -------------------------------- |
| `alignButton`         | `align-button`          | [optional] Align expandable button left or right.                    | `ExpandableListButtonAlign.LEFT \| ExpandableListButtonAlign.RIGHT`         | `ExpandableListButtonAlign.LEFT` |
| `clickable`           | `clickable`             | [optional] Sets element clickable.                                   | `boolean`                                                                   | `false`                          |
| `color`               | `color`                 | [optional] Sets text color of the element.                           | `string`                                                                    | `"none"`                         |
| `disabled`            | `disabled`              | [optional] Sets disabled style of the element.                       | `boolean`                                                                   | `false`                          |
| `dividerColor`        | `divider-color`         | [optional] Sets the divider color.                                   | `string`                                                                    | `"color-surface03"`              |
| `dividerSize`         | `divider-size`          | [optional] Sets the divider size.                                    | `DividerSize.LARGE \| DividerSize.MEDIUM \| DividerSize.SMALL`              | `DividerSize.SMALL`              |
| `dividerType`         | `divider-type`          | [optional] Sets the position where to insert the divider.            | `ListDividerType.ELEMENT \| ListDividerType.HEADER \| ListDividerType.NONE` | `ListDividerType.NONE`           |
| `expandable`          | `expandable`            | [optional] Sets element as expandable.                               | `boolean`                                                                   | `false`                          |
| `expandableStyle`     | `expandable-style`      | [optional] Sets expandable style to element.                         | `ExpandableListStyle.ACCORDION \| ExpandableListStyle.MENU`                 | `ExpandableListStyle.ACCORDION`  |
| `htmlTabindex`        | `html-tabindex`         | set tabindex to Host tag (optional). Defaults to 0.                  | `number`                                                                    | `0`                              |
| `listElementId`       | `list-element-id`       | [optional] List element id.                                          | `number`                                                                    | `undefined`                      |
| `listElementPosition` | `list-element-position` | [optional] position of the list element inside the list or the group | `string`                                                                    | `"0"`                            |
| `listType`            | `list-type`             | [optional] type of the list marker for each element                  | `ListType.NONE \| ListType.ORDERED \| ListType.UNORDERED`                   | `ListType.NONE`                  |
| `role`                | `role`                  | Sets element role.                                                   | `string`                                                                    | `"listitem"`                     |
| `size`                | `size`                  | [optional] Sets size of inside elements.                             | `ListSize.LARGE \| ListSize.MEDIUM \| ListSize.SMALL \| ListSize.X_LARGE`   | `ListSize.MEDIUM`                |


## Events

| Event                 | Description                                                       | Type                  |
| --------------------- | ----------------------------------------------------------------- | --------------------- |
| `accessibleFocus`     | remove filter click event, returns filterid                       | `CustomEvent<number>` |
| `ariaDescendantFocus` | set parent aria-activedescendant on focus event, returns filterid | `CustomEvent<number>` |
| `clickItem`           | remove filter click event, returns filterid                       | `CustomEvent<any>`    |


## Shadow Parts

| Part                    | Description |
| ----------------------- | ----------- |
| `"list-item-container"` |             |


## Dependencies

### Used by

 - [z-breadcrumb](../../z-breadcrumb)
 - [z-combobox](../../inputs/z-combobox)
 - [z-searchbar](../../inputs/z-searchbar)
 - [z-select](../../inputs/z-select)

### Depends on

- [z-icon](../../icons/z-icon)
- [z-divider](../../z-divider)

### Graph
```mermaid
graph TD;
  z-list-element --> z-icon
  z-list-element --> z-divider
  z-breadcrumb --> z-list-element
  z-combobox --> z-list-element
  z-searchbar --> z-list-element
  z-select --> z-list-element
  style z-list-element fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
