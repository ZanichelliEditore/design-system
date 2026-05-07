import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import "./index.stories.css";

type TypographyArgs = {
  fontFamily: "--font-family-sans" | "--font-family-serif";
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
      options: ["--font-family-sans", "--font-family-serif"],
      control: {type: "inline-radio"},
    },
  },
  args: {
    fontFamily: "--font-family-sans",
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

const getWeightSuffix = (weight: string | null): string => (weight ? `-${weight}` : "");

const getPxValue = (cssVar: string): string => {
  const rootStyles = getComputedStyle(document.documentElement);
  const remValue = Number.parseFloat(rootStyles.getPropertyValue(cssVar));
  const baseFontSize = Number.parseFloat(rootStyles.getPropertyValue("font-size"));

  return `${remValue * baseFontSize}px`;
};

export const TypeScale = {
  argTypes: {
    fontWeight: {
      options: ["--font-lt", "--font-rg", "--font-sb", "--font-bd"],
      control: {type: "inline-radio"},
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
            fontFamily: `var(${args.fontFamily})`,
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
 * Section titles are also available as CSS custom properties:
 * those properties are meant to be used with the "font" shorthand property. For example:
 *
 * ```css
 * h4 {
 *  font: var(--section-title-4);
 * }
 * ```
 */
export const TypographyClasses = {
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
            <div class="body-5-sb">{`.section-title-${level} / --section-title-${level}`}</div>
          </div>
        ))}
      </div>

      <div class="heading-classes">
        {Array.from({length: headingLevels}, (_, i) => i + 1).map((level) => (
          <div class="typography-group">
            <div
              class={`heading-${level}${getWeightSuffix(args.headingWeight)}`}
              style={{fontFamily: `var(${args.fontFamily})`}}
            >
              Heading {level}
            </div>
            <div class="body-5-sb">{`.heading-${level}${getWeightSuffix(args.headingWeight)}`}</div>
          </div>
        ))}
      </div>

      <div class="body-classes">
        {Array.from({length: bodyLevels}, (_, i) => i + 1).map((level) => (
          <div class="typography-group">
            <div
              class={`body-${level}${getWeightSuffix(args.fontWeight)}`}
              style={{fontFamily: `var(${args.fontFamily})`}}
            >
              Body {level}
            </div>
            <div class="body-5-sb">{`.body-${level}${getWeightSuffix(args.fontWeight)}`}</div>
          </div>
        ))}
      </div>

      <div class="interactive-classes">
        {Array.from({length: interactiveLevels}, (_, i) => i + 1).map((level) => (
          <div class="typography-group">
            <div
              class={`interactive-${level}${getWeightSuffix(args.fontWeight)}`}
              style={{fontFamily: `var(${args.fontFamily})`}}
            >
              Interactive {level}
            </div>
            <div class="body-5-sb">{`.interactive-${level}${getWeightSuffix(args.fontWeight)}`}</div>
          </div>
        ))}
      </div>

      <div class="helper-classes">
        <div class="typography-group">
          <div
            class={`helper${getWeightSuffix(args.fontWeight)}`}
            style={{fontFamily: `var(${args.fontFamily})`}}
          >
            Helper
          </div>
          <div class="body-5-sb">{`.helper${getWeightSuffix(args.fontWeight)}`}</div>
        </div>
      </div>
    </div>
  ),
} satisfies StoryObj<TypographyClassesArgs>;
