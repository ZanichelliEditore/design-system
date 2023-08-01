/**
 * Get all root CSS properties.
 */
function getRootCssProperties() {
  return Array.from(document.styleSheets)
    .map((sheet) => Array.from(sheet.cssRules))
    .flat()
    .filter((rule) => rule instanceof CSSStyleRule && rule.selectorText === ":root")
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
export function getColorTokens() {
  var _a;
  const availableColorGroups = ["red", "green", "blue", "yellow", "gray", "avatar", "color"];
  const colorTokens = (_a = getRootCssProperties()) === null || _a === void 0 ? void 0 : _a.filter((token) => availableColorGroups.some((group) => token.startsWith(`--${group}`)));
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
export function getColorVars() {
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
export function getColorVarsLabels() {
  return getColorVars().reduce((acc, token) => (Object.assign(Object.assign({}, acc), { [token]: token.slice(6, -1) })), { null: "default" });
}
/**
 * Get Design System themes tokens.
 */
export function getThemesColorTokens() {
  var _a;
  const colorTokens = (_a = getRootCssProperties()) === null || _a === void 0 ? void 0 : _a.filter((token) => token.startsWith(`--color`));
  // remove duplicates
  return [...new Set(colorTokens)];
}
