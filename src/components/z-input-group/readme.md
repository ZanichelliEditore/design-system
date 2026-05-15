# z-input-group

Provides semantic grouping for related form inputs using `<fieldset>` and `<legend>` elements, ensuring WCAG 1.3.1 compliance.

## Usage

Use `z-input-group` to wrap groups of related radio buttons or checkboxes. The `legend` prop provides a descriptive label for the group.

```html
<z-input-group legend="Select your age group">
  <z-input type="radio" name="age" value="under14" label="Under 14 years old" />
  <z-input type="radio" name="age" value="over14" label="14 years or older" />
</z-input-group>
```

## WCAG Compliance

This component satisfies WCAG 2.1 Success Criterion 1.3.1 (Info and Relationships) by programmatically associating the legend with the grouped inputs through the `<fieldset>` element.

<!-- Auto Generated Below -->


## Properties

| Property              | Attribute     | Description                                                                                                                                         | Type      | Default     |
| --------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `hideLegend`          | `hide-legend` | Whether to visually hide the legend while keeping it accessible to screen readers. Useful when the legend text is redundant with a visible heading. | `boolean` | `false`     |
| `legend` _(required)_ | `legend`      | The legend text that describes the group of inputs. Required for accessibility to provide context to screen reader users.                           | `string`  | `undefined` |


## Slots

| Slot | Description                                                            |
| ---- | ---------------------------------------------------------------------- |
|      | Content containing form inputs (typically radio buttons or checkboxes) |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
