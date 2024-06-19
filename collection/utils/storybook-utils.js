var PALETTES;
(function (PALETTES) {
    PALETTES["RED"] = "red";
    PALETTES["GREEN"] = "green";
    PALETTES["BLUE"] = "blue";
    PALETTES["YELLOW"] = "yellow";
    PALETTES["GRAY"] = "gray";
    PALETTES["AVATAR"] = "avatar";
    PALETTES["SUBJECT"] = "subject";
})(PALETTES || (PALETTES = {}));
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
 * ```<z-component style="--z-component--background-color: var(${args["--z-component--background-color"]})" />```
 */
export function getColorTokens() {
    const tokenGroups = [...Object.values(PALETTES), "color"];
    const colorTokens = getRootCssProperties().filter((token) => tokenGroups.some((group) => token.startsWith(`--${group}`)));
    return [...new Set(colorTokens)].sort();
}
/**
 * Get Design System color palettes.
 */
export function getPalettes() {
    return Object.values(PALETTES).reduce((acc, paletteName) => {
        const tokens = getRootCssProperties().filter((token) => token.startsWith(`--${paletteName}`));
        return Object.assign(Object.assign({}, acc), { [paletteName]: tokens.sort((a, b) => +a.replace(/\D/g, "") - +b.replace(/\D/g, "")) });
    }, {});
}
/**
 * Get Design System color tokens wrapped with CSS `var()`.
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
 * ```<z-component style="--z-component--background-color: ${args["--z-component--background-color"]}" />```
 */
export function getColorVars() {
    return getColorTokens().map((token) => `var(${token})`);
}
/**
 * Get Design System color tokens as readable labels for `control` configuration.
 * It assumes you set the options using the `getColorTokens()` function, so expected options are something like `var(--color-token)`.
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
    return getColorVars().reduce((acc, tokenVar) => {
        const tokenLabel = tokenVar.replace(/^var\(--(.*)\)/, "$1");
        return Object.assign(Object.assign({}, acc), { [tokenVar]: tokenLabel });
    }, { null: "default" });
}
/**
 * Get Design System themes tokens.
 */
export function getThemesColorTokens() {
    const colorTokens = getRootCssProperties().filter((token) => token.startsWith(`--color`));
    // remove duplicates
    return [...new Set(colorTokens)];
}
/**
 * Get a Storybook Arg config for Design System color tokens.
 * Useful to configure a control for the stories.
 * @param nullable - If true, it will add a `null` option to the list of options, with a label of "-" to allow the user to deselect a color value.
 * @example ```
 *  "--z-component--background-color": getColorTokenArgConfig()
 * ```
 */
export function getColorTokenArgConfig(nullable = false) {
    const colorTokens = getColorVars();
    if (nullable) {
        colorTokens.unshift(null);
    }
    return {
        options: colorTokens,
        control: {
            type: "select",
            labels: getColorVarsLabels(),
        },
    };
}
//# sourceMappingURL=storybook-utils.js.map
