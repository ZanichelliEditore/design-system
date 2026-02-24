# Usage Example: z-input-group for Registration Form

## Problem
The registration form at `https://my.zanichelli.it/registrazione/studente/1` contains three radio buttons for age/education level that are not wrapped in a `<fieldset>` with a corresponding `<legend>`, violating WCAG 1.3.1 (Info and Relationships).

## Solution
Wrap the radio button group with the new `z-input-group` component.

### Before (Non-compliant)
```html
<h2 class="heading-4-lt">Frequenti</h2>
<div class="radioGroup">
  <z-input type="radio" name="studentType" value="underGdpr" label="la scuola e hai meno di 14 anni" size="big"></z-input>
  <z-input type="radio" name="studentType" value="overGdpr" label="la scuola e hai più di 14 anni" size="big"></z-input>
  <z-input type="radio" name="studentType" value="university" label="l'università" size="big"></z-input>
</div>
```

### After (WCAG 1.3.1 Compliant)
```html
<h2 class="heading-4-lt">Frequenti</h2>
<z-input-group legend="Frequenti" hide-legend>
  <z-input type="radio" name="studentType" value="underGdpr" label="la scuola e hai meno di 14 anni" size="big"></z-input>
  <z-input type="radio" name="studentType" value="overGdpr" label="la scuola e hai più di 14 anni" size="big"></z-input>
  <z-input type="radio" name="studentType" value="university" label="l'università" size="big"></z-input>
</z-input-group>
```

Note: The `hide-legend` prop is used because the visual heading (H2) already provides the same information. The legend is still present in the DOM for screen readers, ensuring programmatic association between the heading and the radio buttons.

## Benefits
1. **WCAG 1.3.1 Compliance**: The `<fieldset>` element programmatically groups related form controls
2. **Screen Reader Support**: The `<legend>` provides context to screen reader users about what the radio buttons represent
3. **Flexible**: Can show or hide the legend visually while maintaining accessibility
4. **No Visual Impact**: With `hide-legend`, the visual design remains unchanged

## Implementation Steps
1. Locate the registration form code (likely in a backend template or frontend component)
2. Wrap the radio button group with `<z-input-group legend="Frequenti" hide-legend>`
3. Ensure the `@zanichelli/albe-web-components` package is updated to include the new component
4. Test with screen readers to verify the legend is announced correctly
