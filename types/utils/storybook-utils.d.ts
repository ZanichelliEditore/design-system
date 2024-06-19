import { OptionsConfig } from "@storybook/blocks";
import { Args } from "@storybook/web-components";
type CSSCustomProp = `--${string}`;
type EnsurePrefix<T extends string, P extends string> = T extends `${P}${string}` ? T : `${P}${T}`;
export type CSSVarsArguments<T extends string = string> = {
    [x in EnsurePrefix<T, "--">]: string;
};
declare enum PALETTES {
    RED = "red",
    GREEN = "green",
    BLUE = "blue",
    YELLOW = "yellow",
    GRAY = "gray",
    AVATAR = "avatar",
    SUBJECT = "subject"
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
export declare function getColorTokens(): CSSCustomProp[];
/**
 * Get Design System color palettes.
 */
export declare function getPalettes(): Record<keyof typeof PALETTES, CSSCustomProp[]>;
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
export declare function getColorVars(): `var(${CSSCustomProp})`[];
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
export declare function getColorVarsLabels(): OptionsConfig["labels"];
/**
 * Get Design System themes tokens.
 */
export declare function getThemesColorTokens(): string[];
/**
 * Get a Storybook Arg config for Design System color tokens.
 * Useful to configure a control for the stories.
 * @param nullable - If true, it will add a `null` option to the list of options, with a label of "-" to allow the user to deselect a color value.
 * @example ```
 *  "--z-component--background-color": getColorTokenArgConfig()
 * ```
 */
export declare function getColorTokenArgConfig(nullable?: boolean): Args;
export {};
