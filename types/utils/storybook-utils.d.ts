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
export declare function getColorTokens(): string[];
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
export declare function getColorVars(): string[];
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
export declare function getColorVarsLabels(): Record<string, string>;
/**
 * Get Design System themes tokens.
 */
export declare function getThemesColorTokens(): string[];
