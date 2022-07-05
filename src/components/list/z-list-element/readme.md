# z-list-element



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute            | Description                                               | Type                                                                                | Default                          |
| ------------------ | -------------------- | --------------------------------------------------------- | ----------------------------------------------------------------------------------- | -------------------------------- |
| `alignButton`      | `align-button`       | [optional] Align expandable button left or right.         | `ExpandableListButtonAlign.left \| ExpandableListButtonAlign.right`                 | `ExpandableListButtonAlign.left` |
| `clickable`        | `clickable`          | [optional] Sets element clickable.                        | `boolean`                                                                           | `false`                          |
| `color`            | `color`              | [optional] Sets text color of the element.                | `string`                                                                            | `"none"`                         |
| `disabled`         | `disabled`           | [optional] Sets disabled style of the element.            | `boolean`                                                                           | `false`                          |
| `dividerColor`     | `divider-color`      | [optional] Sets the divider color.                        | `string`                                                                            | `"color-surface03"`              |
| `dividerSize`      | `divider-size`       | [optional] Sets the divider size.                         | `DividerSize.large \| DividerSize.medium \| DividerSize.small`                      | `DividerSize.small`              |
| `dividerType`      | `divider-type`       | [optional] Sets the position where to insert the divider. | `ListDividerType.element \| ListDividerType.header \| ListDividerType.none`         | `ListDividerType.none`           |
| `expandable`       | `expandable`         | [optional] Sets element as expandable.                    | `boolean`                                                                           | `false`                          |
| `expandableStyle`  | `expandable-style`   | [optional] Sets expandable style to element.              | `ExpandableListStyle.accordion \| ExpandableListStyle.menu`                         | `ExpandableListStyle.accordion`  |
| `isContextualMenu` | `is-contextual-menu` | [optional] If is used in ZContextualMenu component        | `boolean`                                                                           | `false`                          |
| `listElementId`    | `list-element-id`    |                                                           | `number`                                                                            | `undefined`                      |
| `size`             | `size`               | [optional] Sets size of inside elements.                  | `ListSize.large \| ListSize.medium \| ListSize.small \| typeof ListSize["x-large"]` | `ListSize.medium`                |


## Events

| Event             | Description                                 | Type                  |
| ----------------- | ------------------------------------------- | --------------------- |
| `accessibleFocus` | remove filter click event, returns filterid | `CustomEvent<number>` |
| `clickItem`       | remove filter click event, returns filterid | `CustomEvent<any>`    |


## Dependencies

### Used by

 - [z-contextual-menu](../../z-contextual-menu)
 - [z-select](../../inputs/z-select)

### Depends on

- [z-icon](../../icons/z-icon)
- [z-divider](../../z-divider)

### Graph
```mermaid
graph TD;
  z-list-element --> z-icon
  z-list-element --> z-divider
  z-contextual-menu --> z-list-element
  z-select --> z-list-element
  style z-list-element fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
