/* eslint-disable @typescript-eslint/naming-convention */
import {OptionsConfig} from "@storybook/blocks";
import {Args} from "@storybook/web-components";

type EnsurePrefix<T extends string, P extends string> = T extends `${P}${string}` ? T : `${P}${T}`;

export type CssVarsArguments<T extends string = string> = {[x in EnsurePrefix<T, "--">]: string};

enum PALETTES {
  RED = "red",
  GREEN = "green",
  BLUE = "blue",
  YELLOW = "yellow",
  GRAY = "gray",
  AVATAR = "avatar",
  SUBJECT = "subject",
}

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
  const tokenGroups = [...Object.values(PALETTES), "color"];
  const colorTokens = getRootCssProperties()?.filter((token) =>
    tokenGroups.some((group) => token.startsWith(`--${group}`))
  );

  return [...new Set(colorTokens)].sort();
}

/**
 * Get Design System color palettes.
 */
export function getPalettes(): Record<keyof typeof PALETTES, string[]> {
  return Object.values(PALETTES).reduce(
    (acc, curr) => {
      const tokens = getRootCssProperties()?.filter((token) => token.startsWith(`--${curr}`));
      acc[curr] = tokens.sort((a, b) => +a.replace(/\D/g, "") - +b.replace(/\D/g, ""));

      return acc;
    },
    {} as Record<keyof typeof PALETTES, string[]>
  );
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
export function getColorVarsLabels(): OptionsConfig["labels"] {
  return getColorVars().reduce((acc, token) => ({...acc, [token]: token.slice(6, -1)}), {null: "default"});
}

/**
 * Get Design System themes tokens.
 */
export function getThemesColorTokens(): string[] {
  const colorTokens = getRootCssProperties()?.filter((token) => token.startsWith(`--color`));

  // remove duplicates
  return [...new Set(colorTokens)];
}

/**
 * Get a Storybook Arg config for Design System color tokens.
 * Useful to configure a control for the stories.
 * @param nullable - If true, it will add a `null` option to the list of options, with a label of "-" to allow the user to deselect a color value.
 * @example ```
 * "--z-component--background-color": {
 *  ...getColorTokenArgConfig(),
 * }
  ```
 */
export function getColorTokenArgConfig(nullable = false): Args {
  const colorTokens = getColorTokens();
  if (nullable) {
    colorTokens.unshift(null);
  }

  return {
    options: colorTokens,
    control: {
      type: "select",
      labels: getColorVarsLabels(),
    },
  } satisfies Args;
}
