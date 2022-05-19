/**
 * Get all root CSS properties.
 * @returns {string[]}
 */
function getRootCssProperties() {
  return [...document.styleSheets]
    .map(sheet => [...sheet.cssRules])
    .flat()
    .filter(rule => rule.selectorText === ":root")
    .map(rule => Object.values(rule.style || {}))
    .flat()
    .filter(Boolean);
}

/**
 * Get Design System color tokens.
 * @returns {string[]}
 */
export function getColorTokens() {
  const availableColorPrefixes = ['red', 'green', 'blue', 'yellow', 'gray', 'avatar', 'color'];

  const colorTokens = getRootCssProperties()
    ?.filter(token => availableColorPrefixes.some(prefix => token.startsWith(`--${prefix}`)));

  // remove duplicates
  return [...new Set(colorTokens)];
}

/**
 * Get Design System themes tokens.
 * @returns {string[]}
 */
export function getThemesColorTokens() {
  const colorTokens = getRootCssProperties()?.filter(token => token.startsWith(`--color`));

  // remove duplicates
  return [...new Set(colorTokens)];
}
