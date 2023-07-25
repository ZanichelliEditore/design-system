/**
 * Get all root CSS properties.
 */
function getRootCssProperties(): string[] {
  return Array.from(document.styleSheets)
    .map((sheet) => Array.from(sheet.cssRules))
    .flat()
    .filter((rule): rule is CSSStyleRule => rule instanceof CSSStyleRule && rule.selectorText === ":root")
    .map((rule) => Object.values(rule.style || {}))
    .flat()
    .filter(Boolean);
}

/**
 * Get Design System color tokens.
 * Can be used in components stories controls as follows:
 * @example ```
 * argTypes={{
 *  "--z-component--background-color": {
 *    control: {type: "select"},
 *    options: getColorTokens(),
 *  }
 * }}```
 *
 * and then in the component tag
 *
 * ```<z-component .style="--z-component--background-color: var(${args["--z-component--background-color"]})" />```
 */
export function getColorTokens(): string[] {
  const availableColorGroups = ["red", "green", "blue", "yellow", "gray", "avatar", "color"];
  const colorTokens = getRootCssProperties()?.filter((token) =>
    availableColorGroups.some((group) => token.startsWith(`--${group}`))
  );

  return [...new Set(colorTokens)].sort();
}

/**
 * Get Design System color tokens as CSS variable rule (something like `var(--color-token)`).
 * @example ```
 * argTypes={{
 *  "--z-component--background-color": {
 *    control: {type: "select"},
 *    options: getColorTokens(),
 *  }
 * }}```
 *
 * and then in the component tag
 *
 * ```<z-component .style="--z-component--background-color: ${args["--z-component--background-color"]}" />```
 */
export function getColorVars(): string[] {
  return getColorTokens().map((token) => `var(${token})`);
}

/**
 * Get Design System color tokens as readable labels for control configuration.
 * It assumes you set the options using the `getColorVars()` function, so expected options are something like `var(--color-token)`.
 * @example ```
 * argTypes={{
 *  "--z-component--background-color": {
 *    options: getColorTokens(),
 *    control: {
 *      type: "select",
 *      labels: getColorVarsLabels(),
 *    },
 *  }
 * }}```
 */
export function getColorVarsLabels(): Record<string, string> {
  return getColorVars().reduce((acc, token) => ({...acc, [token]: token.slice(6, -1)}), {});
}

/**
 * Get Design System themes tokens.
 */
export function getThemesColorTokens(): string[] {
  const colorTokens = getRootCssProperties()?.filter((token) => token.startsWith(`--color`));

  // remove duplicates
  return [...new Set(colorTokens)];
}
