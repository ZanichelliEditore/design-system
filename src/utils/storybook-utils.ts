import type {OptionsConfig} from "@storybook/addon-docs/blocks";
import type {Args} from "storybook/internal/csf";

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
 * argTypes: {
 *  "--z-component--background-color": {
 *    control: {type: "select"},
 *    options: getColorTokens(),
 *  }
 * }```
 *
 * and then in the component tag
 *
 * ```<z-component style={{"--z-component--background-color": `var(${args["--z-component--background-color"]})`}} />```
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
 * argTypes: {
 *  "--z-component--background-color": {
 *    control: {type: "select"},
 *    options: getColorTokens(),
 *  }
 * }```
 *
 * and then in the component tag
 *
 * ```<z-component style={{"--z-component--background-color": `var(${args["--z-component--background-color"]})`}} />```
 */
export function getColorVars(): `var(${CSSCustomProp})`[] {
  return getColorTokens().map((token) => `var(${token})` as const);
}

/**
 * Get Design System color tokens as readable labels for `control` configuration.
 * It assumes you set the options using the `getColorTokens()` function, so expected options are something like `var(--color-token)`.
 * @example ```
 * argTypes: {
 *  "--z-component--background-color": {
 *    options: getColorTokens(),
 *    control: {
 *      type: "select",
 *      labels: getColorVarsLabels(),
 *    },
 *  }
 * }```
 */
export function getColorVarsLabels(): OptionsConfig["labels"] {
  return getColorVars().reduce((acc, tokenVar) => {
    const tokenLabel = tokenVar.replace(/^var\(--(.*)\)/, "$1");

    return {
      ...acc,
      [tokenVar]: tokenLabel,
    };
  }, {});
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
 * Useful to configure an `arg` of the stories.
 * @param additionalOptions - Additional options to include in the list of options.
 * Can be a string for a simple value or an object with `label` and `value` properties if you need custom labels.
 * The additional options will be added at the beginning of the list of options.
 * @example ```
 * argTypes: {
 *   "--z-component--background-color": getColorTokenArgConfig()
 * }
 * ```
 */
export function getColorTokenArgConfig(additionalOptions?: (string | {label: string; value: string})[]): Args {
  const options: (string | ReturnType<typeof getColorVars>[number])[] = getColorVars();
  const labels = getColorVarsLabels();

  if (additionalOptions?.length) {
    additionalOptions.forEach((option) => {
      if (typeof option === "string") {
        options.unshift(option);
      } else if (option.value) {
        options.unshift(option.value);
        labels[option.value] = option.label;
      }
    });
  }

  return {
    options,
    control: {
      type: "select",
      labels,
    },
  } satisfies Args;
}

/**
 * Extract CSS variables from an object.
 * Returns only the entries with keys starting with `--`.
 */
export function extractCSSVars(args: Args): CSSVarsArguments {
  return Object.fromEntries(Object.entries(args).filter(([key]) => key.startsWith("--")));
}
