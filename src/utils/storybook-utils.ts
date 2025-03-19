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
 * Transform a `cssText` string, with the content of a rule, to an object.
 */
function mapStyle(cssText: string): Record<string, string> {
  return Object.fromEntries(
    cssText
      .split(";")
      .filter(Boolean)
      .map((declaration) => declaration.trim().split(": "))
  );
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
 * Get Design System theme's color tokens.
 * @param name Name of the theme, like `theme-black`.
 * @param variant Variant of the theme, like `theme-black--red`.
 */
export function getThemeColorTokens(
  name: string,
  variant: string | undefined = undefined
): Record<CSSCustomProp, CSSCustomProp> {
  const themeClass = name.startsWith(".") ? name : `.${name}`;
  const themeVariantClass = variant ? (variant.startsWith(".") ? variant : `.${variant}`) : undefined;
  const theme = Array.from(document.styleSheets)
    .flatMap((sheet) => Array.from(sheet.cssRules))
    .filter((rule): rule is CSSStyleRule => rule instanceof CSSStyleRule)
    .filter((rule) => {
      const selectorTargets = rule.selectorText.split(",").map((selector) => selector.trim());

      return selectorTargets.includes(themeClass) || selectorTargets.includes(themeClass + (themeVariantClass ?? ""));
    })
    .reduce((store, rule) => {
      const styleObj = mapStyle(rule.style.cssText);
      // remove all non-color properties
      for (const key of Object.keys(styleObj)) {
        if (!key.startsWith("--color")) {
          delete styleObj[key];
        } else {
          // remove `var()` call from the value
          styleObj[key] = styleObj[key].replace(/^var\((.+)\)/, "$1");
        }
      }

      return {...store, ...styleObj};
    }, {});

  return theme;
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
