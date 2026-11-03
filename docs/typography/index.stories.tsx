import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import "./index.stories.css";

type TypographyArgs = {
  fontFamily: "sans" | "serif";
};

type TypeScaleArgs = TypographyArgs & {
  fontWeight: "--font-lt" | "--font-rg" | "--font-sb" | "--font-bd";
};

type TypographyClassesArgs = TypographyArgs & {
  headingWeight: "lt" | "sb" | null;
  fontWeight: "sb" | null;
};

/**
 * The typographic styles are based on the `IBM Plex` font family.
 * Some CSS classes and props are provided to apply the typographic styles:
 * - a set of CSS custom props for font sizes and font weights
 * - a set of classes for headings, body text, and interactive text
 * - a set of classes and CSS custom props for section titles
 */
export default {
  title: "Typography",
  argTypes: {
    fontFamily: {
      options: ["sans", "serif"],
      control: {type: "inline-radio"},
    },
  },
  args: {
    fontFamily: "sans",
  },
  parameters: {
    docs: {
      codePanel: false,
    },
  },
} satisfies Meta<TypographyArgs & TypeScaleArgs>;

const sampleText = "The quick brown fox jumps over the lazy dog";
const scaleProps = [
  "--font-size-1",
  "--font-size-2",
  "--font-size-3",
  "--font-size-4",
  "--font-size-5",
  "--font-size-6",
  "--font-size-7",
  "--font-size-8",
  "--font-size-9",
  "--font-size-10",
  "--font-size-11",
  "--font-size-12",
  "--font-size-13",
  "--font-size-14",
  "--font-size-15",
  "--font-size-16",
  "--font-size-17",
] as const;

const headingLevels = 4;
const bodyLevels = 5;
const interactiveLevels = 3;
const sectionTitleLevels = 6;

const buildFontString = (prefix: string, level: string, weight?: string, family?: string): string =>
  [prefix, level, weight, family === "sans" ? "" : family].filter(Boolean).join("-");

const getPxValue = (cssVar: string): string => {
  const docStyles = getComputedStyle(document.documentElement);
  const remValue = Number.parseFloat(docStyles.getPropertyValue(cssVar));
  const baseFontSize = Number.parseFloat(docStyles.getPropertyValue("font-size"));

  return `${remValue * baseFontSize}px`;
};

export const TypeScale = {
  argTypes: {
    fontWeight: {
      options: ["--font-lt", "--font-rg", "--font-sb", "--font-bd"],
      control: {
        type: "inline-radio",
        labels: {
          "--font-lt": "Light",
          "--font-rg": "Regular",
          "--font-sb": "Semibold",
          "--font-bd": "Bold",
        },
      },
    },
  },
  args: {
    fontWeight: "--font-rg",
  },
  render: (args: TypeScaleArgs) => (
    <div class="type-scale">
      {scaleProps.map((prop) => [
        <span class="body-5-sb">{prop}</span>,
        <span class="body-5">{getPxValue(prop)}</span>,
        <span
          class="sample-text"
          style={{
            fontSize: `var(${prop})`,
            fontFamily: `var(--font-family-${args.fontFamily})`,
            fontWeight: `var(${args.fontWeight})`,
          }}
        >
          {sampleText}
        </span>,
      ])}
    </div>
  ),
} satisfies StoryObj<TypeScaleArgs>;

/**
 * `.heading-1` and `.heading-2` classes automatically scale in size starting from desktop viewport.
 * Typography classes (except for `helper`) can also be used with a viewport prefix (`mobile`, `tablet`, `desktop`, `wide`)
 * to apply the styles only on specific viewport sizes.
 * For example:
 *
 * ```html
 * <p class="mobile-body-3 tablet-body-2 body-1">Lorem ipsum...</p>
 * ```
 *
 * will apply the `body-3` style on mobile, `body-2` on tablet, and `body-1` on desktop and wide viewports.
 *
 * Each class is also available as CSS custom property that can be used with the `font` shorthand property.
 *
 * For example:
 *
 * ```css
 * h1 {
 *  font: var(--heading-1);
 * }
 *
 * h4 {
 *  font: var(--section-title-4);
 * }
 * ```
 *
 * Since with the `font` shorthand property the `font-family` is mandatory and cannot be inherited,
 * there are also the `-serif` variants of each CSS custom property to use a serif font family (the default is `sans`).
 *
 * For example:
 *
 * ```css
 * h1 {
 *  font: var(--heading-1-serif);
 * }
 * ```
 */
export const TypographyClassesAndCSSProps = {
  argTypes: {
    headingWeight: {
      options: ["lt", null, "sb"],
      control: {
        type: "inline-radio",
        labels: {
          lt: "Light",
          null: "Regular",
          sb: "Semibold",
        },
      },
    },
    fontWeight: {
      options: [null, "sb"],
      control: {
        type: "inline-radio",
        labels: {
          null: "Regular",
          sb: "Semibold",
        },
      },
    },
  },
  args: {
    headingWeight: null,
    fontWeight: null,
  },
  render: (args: TypographyClassesArgs) => (
    <div class="typography-classes">
      <div class="section-title-classes">
        {Array.from({length: sectionTitleLevels}, (_, i) => i + 1).map((level) => (
          <div class="typography-group">
            <div class={`section-title-${level}`}>{`Section title ${level}`}</div>
            <div class="body-5-sb">section-title-{level}</div>
          </div>
        ))}
      </div>

      <div class="heading-classes">
        {Array.from({length: headingLevels}, (_, i) => i + 1).map((level) => (
          <div class="typography-group">
            <div
              class={buildFontString("heading", `${level}`, args.headingWeight, args.fontFamily)}
            >{`Heading ${level}`}</div>
            <div class="body-5-sb">{buildFontString("heading", `${level}`, args.headingWeight, args.fontFamily)}</div>
          </div>
        ))}
      </div>

      <div class="body-classes">
        {Array.from({length: bodyLevels}, (_, i) => i + 1).map((level) => (
          <div class="typography-group">
            <div class={buildFontString("body", `${level}`, args.fontWeight, args.fontFamily)}>Body {level}</div>
            <div class="body-5-sb">{buildFontString("body", `${level}`, args.fontWeight, args.fontFamily)}</div>
          </div>
        ))}
      </div>

      <div class="interactive-classes">
        {Array.from({length: interactiveLevels}, (_, i) => i + 1).map((level) => (
          <div class="typography-group">
            <div class={buildFontString("interactive", `${level}`, args.fontWeight, args.fontFamily)}>
              Interactive {level}
            </div>
            <div class="body-5-sb">{buildFontString("interactive", `${level}`, args.fontWeight, args.fontFamily)}</div>
          </div>
        ))}
      </div>

      <div class="helper-classes">
        <div class="typography-group">
          <div class={buildFontString("helper", "", args.fontWeight, args.fontFamily)}>Helper</div>
          <div class="body-5-sb">{buildFontString("helper", "", args.fontWeight, args.fontFamily)}</div>
        </div>
      </div>
    </div>
  ),
} satisfies StoryObj<TypographyClassesArgs>;
