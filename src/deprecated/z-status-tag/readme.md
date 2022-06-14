# z-status-tag

# This component is deprecated and will be removed from the library starting 09 August 2022.

<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description                                   | Type                                                                                                                                | Default                   |
| ------------ | ------------ | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| `expandable` | `expandable` | [optional] Hide the text and show it on hover | `boolean`                                                                                                                           | `undefined`               |
| `icon`       | `icon`       | [optional] Status tag icon                    | `string`                                                                                                                            | `undefined`               |
| `status`     | `status`     | [optional] Status tag color                   | `StatusTagStatus.default \| StatusTagStatus.error \| StatusTagStatus.neutral \| StatusTagStatus.success \| StatusTagStatus.warning` | `StatusTagStatus.default` |
| `text`       | `text`       | [optional] Status tag text                    | `string`                                                                                                                            | `undefined`               |
| `variant`    | `variant`    | [optional] Status tag style                   | `ThemeVariant.dark \| ThemeVariant.light`                                                                                           | `undefined`               |


## Dependencies

### Depends on

- [z-icon](../../components/icons/z-icon)

### Graph
```mermaid
graph TD;
  z-status-tag --> z-icon
  style z-status-tag fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
