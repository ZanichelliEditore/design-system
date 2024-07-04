/* eslint-disable @typescript-eslint/naming-convention */
import {OptionsConfig} from "@storybook/blocks";
import {Args} from "@storybook/web-components";

type CSSCustomProp = `--${string}`;
type EnsurePrefix<T extends string, P extends string> = T extends `${P}${string}` ? T : `${P}${T}`;

export type CSSVarsArguments<T extends string = string> = {[x in EnsurePrefix<T, "--">]: string};

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
    .flatMap((sheet) => Array.from(sheet.cssRules))
    .filter((rule): rule is CSSStyleRule => rule instanceof CSSStyleRule && rule.selectorText?.includes(":root"))
    .flatMap((rule) => Object.values(rule.style || {}))
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
export function getColorTokens(): CSSCustomProp[] {
  const tokenGroups = [...Object.values(PALETTES), "color"];
  const colorTokens = getRootCssProperties().filter((token): token is CSSCustomProp =>
    tokenGroups.some((group) => token.startsWith(`--${group}`))
  );

  return [...new Set(colorTokens)].sort();
}

/**
 * Get Design System color palettes.
 */
export function getPalettes(): Record<keyof typeof PALETTES, CSSCustomProp[]> {
  return Object.values(PALETTES).reduce(
    (acc, paletteName) => {
      const tokens = getRootCssProperties().filter((token): token is CSSCustomProp =>
        token.startsWith(`--${paletteName}`)
      );

      return {
        ...acc,
        [paletteName]: tokens.sort((a, b) => +a.replace(/\D/g, "") - +b.replace(/\D/g, "")),
      };
    },
    {} as Record<keyof typeof PALETTES, CSSCustomProp[]>
  );
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
export function getColorVars(): `var(${CSSCustomProp})`[] {
  return getColorTokens().map((token) => `var(${token})` as const);
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
export function getColorVarsLabels(): OptionsConfig["labels"] {
  return getColorVars().reduce(
    (acc, tokenVar) => {
      const tokenLabel = tokenVar.replace(/^var\(--(.*)\)/, "$1");

      return {
        ...acc,
        [tokenVar]: tokenLabel,
      };
    },
    {null: "default"}
  );
}

/**
 * Get Design System themes tokens.
 */
export function getThemesColorTokens(): `--color${string}`[] {
  const colorTokens = getRootCssProperties().filter((token): token is `--color${string}` =>
    token.startsWith("--color")
  );

  // remove duplicates
  return [...new Set(colorTokens)];
}

/**
 * Get the value of a token for a given theme.
 * @param themeClass CSS class name of the theme
 * @param token Token name to get the value of
 * @returns The value of the token for the given theme.
 */
export function getThemeTokenValue(themeClass: string, token: `--${string}`): string | undefined {
  const themeStyle = Array.from(document.styleSheets)
    .flatMap((sheet) => Array.from(sheet.cssRules))
    .filter((rule): rule is CSSStyleRule => rule instanceof CSSStyleRule)
    .find((rule) => rule.selectorText.includes(themeClass));

  const value = themeStyle.styleMap.get(token)?.[0] as CSSStyleValue | undefined;

  return value instanceof CSSVariableReferenceValue
    ? getComputedStyle(document.documentElement).getPropertyValue(value.variable)
    : value?.toString() ?? undefined;
}

/**
 * Get a Storybook Arg config for Design System color tokens.
 * Useful to configure a control for the stories.
 * @param nullable - If true, it will add a `null` option to the list of options, with a label of "-" to allow the user to deselect a color value.
 * @example ```
 *  "--z-component--background-color": getColorTokenArgConfig()
 * ```
 */
export function getColorTokenArgConfig(nullable = false): Args {
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
  } satisfies Args;
}
