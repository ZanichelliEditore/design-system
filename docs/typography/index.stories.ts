import {Meta, StoryObj} from "@storybook/web-components";
import {html} from "lit";
import "./index.stories.css";

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
} satisfies Meta;

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
];

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
  render: (args) =>
    html`<div class="type-scale">
      ${scaleProps.map(
        (prop) => html`
          <span class="body-5-sb">${prop}</span>
          <span class="body-5"
            >${parseFloat(getComputedStyle(document.documentElement).getPropertyValue(prop)) *
            parseFloat(getComputedStyle(document.documentElement).getPropertyValue("font-size"))}px</span
          >
          <span
            class="sample-text"
            style="font-size: var(${prop}); font-family: var(${args.fontFamily}); font-weight: var(${args.fontWeight})"
            >${sampleText}</span
          >
        `
      )}
    </div>`,
} satisfies StoryObj;

const headingLevels = 4;
const bodyLevels = 5;
const interactiveLevels = 3;
const getWeightSuffix = (weight: string | null): string => (weight ? `-${weight}` : "");

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
  render: (args) =>
    html`<div class="typography-classes">
      <div class="heading-classes">
        ${Array.from({length: headingLevels}, (_, i) => i + 1).map(
          (level) => html`
            <div class="typography-group">
              <div
                class="heading-${level}${getWeightSuffix(args.headingWeight)}"
                style="font-family: var(${args.fontFamily})"
              >
                Heading ${level}
              </div>
              <div class="body-5-sb">.heading-${level}${getWeightSuffix(args.headingWeight)}</div>
            </div>
          `
        )}
      </div>
      <div class="body-classes">
        ${Array.from({length: bodyLevels}, (_, i) => i + 1).map(
          (level) => html`
            <div class="typography-group">
              <div
                class="body-${level}${getWeightSuffix(args.fontWeight)}"
                style="font-family: var(${args.fontFamily})"
              >
                Body ${level}
              </div>
              <div class="body-5-sb">.body-${level}${getWeightSuffix(args.fontWeight)}</div>
            </div>
          `
        )}
      </div>
      <div class="interactive-classes">
        ${Array.from({length: interactiveLevels}, (_, i) => i + 1).map(
          (level) =>
            html`<div class="typography-group">
              <div
                class="interactive-${level}${getWeightSuffix(args.fontWeight)}"
                style="font-family: var(${args.fontFamily})"
              >
                Interactive ${level}
              </div>
              <div class="body-5-sb">.interactive-${level}${getWeightSuffix(args.fontWeight)}</div>
            </div>`
        )}
      </div>
      <div class="helper-classes">
        <div class="typography-group">
          <div
            class="helper${getWeightSuffix(args.fontWeight)}"
            style="font-family: var(${args.fontFamily})"
          >
            Helper
          </div>
          <div class="body-5-sb">.helper${getWeightSuffix(args.fontWeight)}</div>
        </div>
      </div>
    </div>`,
} satisfies StoryObj;

const sectionTitleLevels = 6;

export const SectionTitle = {
  render: () => html`
    <div class="section-title-classes">
      ${Array.from({length: sectionTitleLevels}, (_, i) => i + 1).map(
        (level) =>
          html`<div>
            <div class="z-section-title-${level}">Section title ${level}</div>
            <div class="body-5-sb">.z-section-title-${level} / --z-section-title-${level}</div>
          </div>`
      )}
      <div>
        <p>The CSS custom properties are meant to be used with the "font" shorthand property. For example:</p>
        <code class="theme-dark">font: var(--z-section-title-1);</code>
      </div>
    </div>
  `,
} satisfies StoryObj;
