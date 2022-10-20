/**
 * Get all root CSS properties.
 * @returns {string[]}
 */
function getRootCssProperties() {
  return [...document.styleSheets]
    .map((sheet) => [...sheet.cssRules])
    .flat()
    .filter((rule) => rule.selectorText === ":root")
    .map((rule) => Object.values(rule.style || {}))
    .flat()
    .filter(Boolean);
}

/**
 * Get Design System color tokens.
 * Can be used in components stories controls:
 * @example ```
 * argTypes={{
 *  "--z-component--background-color": {
 *    options: getColorTokens(),
 *    control: { type: "select" }
 *  }
 * }}```
 *
 * and then in the component tag
 *
 * ```<z-component .style="--z-component--background-color: var(${args["--z-component--background-color"]})" />```
 * @returns {string[]}
 */
export function getColorTokens() {
  const availableColorGroups = ["red", "green", "blue", "yellow", "gray", "avatar", "color"];

  const colorTokens = getRootCssProperties()?.filter((token) =>
    availableColorGroups.some((group) => token.startsWith(`--${group}`))
  );

  // remove duplicates
  return [...new Set(colorTokens)];
}

/**
 * Get Design System themes tokens.
 * @returns {string[]}
 */
export function getThemesColorTokens() {
  const colorTokens = getRootCssProperties()?.filter((token) => token.startsWith(`--color`));

  // remove duplicates
  return [...new Set(colorTokens)];
}
