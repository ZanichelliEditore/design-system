import {Args, Meta, StoryObj} from "@storybook/web-components";
import {html, type TemplateResult} from "lit";
import {styleMap} from "lit/directives/style-map.js";
import {type ZAccordion} from ".";
import {AccordionVariant, ControlSize} from "../../beans";
import {ICONS} from "../../constants/iconset";
import {CSSVarsArguments, getColorTokenArgConfig} from "../../utils/storybook-utils";
import "../z-tag/index";
import "./index";

const cssPropsArgs = {
  "--z-accordion-bg": {
    ...getColorTokenArgConfig(true),
  },
  "--z-accordion-label-color": {
    ...getColorTokenArgConfig(true),
  },
  "--z-accordion-disabled-label-color": {
    ...getColorTokenArgConfig(true),
    if: {
      arg: "isDisabled",
      truthy: true,
    },
  },
  "--z-accordion-content-bg": {
    ...getColorTokenArgConfig(true),
  },
  "--z-accordion-content-fg": {
    ...getColorTokenArgConfig(true),
  },
  "--z-accordion-hover-color": {
    ...getColorTokenArgConfig(true),
  },
  "--z-accordion-highlight-color": {
    ...getColorTokenArgConfig(true),
    if: {
      arg: "highlight",
      truthy: true,
    },
  },
} as const;

type ZAccordionStoriesArgs = ZAccordion &
  CSSVarsArguments<
    | keyof typeof cssPropsArgs
    | `z-accordion-${"left" | "right"}-padding`
    | "z-accordion-label-font-weight"
    | `z-accordion-highlight-color${number | undefined}`
  >;

/**
 * To add the highlight band on the left, set the `highlight` property to `true` then set the `--z-accordion-highlight-color` CSS variable to the desired color.
 */
const StoryMeta = {
  title: "ZAccordion",
  component: "z-accordion",
  argTypes: {
    ...cssPropsArgs,
    icon: {
      options: [null, ...Object.keys(ICONS).sort()],
      control: {
        type: "select",
        labels: {
          null: "—",
        },
      },
    },
    shadow: {
      if: {
        arg: "variant",
        eq: AccordionVariant.BACKGROUND,
      },
    },
    size: {
      options: Object.values(ControlSize),
      control: {
        type: "inline-radio",
      },
    },
    variant: {
      options: Object.values(AccordionVariant),
      control: {
        type: "inline-radio",
      },
    },
  },
  args: {
    "--z-accordion-bg": null,
    "--z-accordion-label-color": null,
    "--z-accordion-disabled-label-color": null,
    "--z-accordion-content-bg": null,
    "--z-accordion-content-fg": null,
    "--z-accordion-hover-color": null,
    "--z-accordion-highlight-color": null,
    "--z-accordion-right-padding": "var(--space-unit)",
    "--z-accordion-left-padding": "calc(var(--space-unit) * 2)",
    "--z-accordion-label-font-weight": "var(--font-sb)",
    "highlight": false,
    "icon": null,
    "isDisabled": false,
    "label": "Text label",
    "open": false,
    "shadow": true,
    "size": ControlSize.BIG,
    "variant": AccordionVariant.DEFAULT,
  },
  render: (args: Args): TemplateResult =>
    html`<z-accordion
      .highlight=${args.highlight}
      .icon=${args.icon}
      .isDisabled=${args.isDisabled}
      .open=${args.open}
      .shadow=${args.shadow}
      label=${args.label}
      size=${args.size}
      variant=${args.variant}
      style=${styleMap({
        "--z-accordion-highlight-color": args["--z-accordion-highlight-color"],
        "--z-accordion-bg": args["--z-accordion-bg"],
        "--z-accordion-label-color": args["--z-accordion-label-color"],
        "--z-accordion-disabled-label-color": args["--z-accordion-disabled-label-color"],
        "--z-accordion-content-bg": args["--z-accordion-content-bg"],
        "--z-accordion-content-fg": args["--z-accordion-content-fg"],
        "--z-accordion-hover-color": args["--z-accordion-hover-color"],
        "--z-accordion-right-padding": args["--z-accordion-right-padding"],
        "--z-accordion-left-padding": args["--z-accordion-left-padding"],
        "--z-accordion-label-font-weight": args["--z-accordion-label-font-weight"],
      })}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in Archimede,
      qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit? Possumusne ergo in vita
      summum bonum dicere, cum id ne in cena quidem posse videamur? Morbo gravissimo affectus, exul, orbus, egens,
      torqueatur eculeo: quem hunc appellas, Zeno? Nam memini etiam quae nolo, oblivisci non possum quae volo. Nec vero
      sum nescius esse utilitatem in historia, non modo voluptatem.
    </z-accordion>`,
} satisfies Meta<ZAccordionStoriesArgs>;

export default StoryMeta;

type Story = StoryObj<ZAccordionStoriesArgs>;

export const Default = {};

/**
 * When multiple `ZAccordion`s are placed in stack, the style is automatically optimized through global styles.
 */
export const Stack = {
  argTypes: {
    "--z-accordion-highlight-color2": cssPropsArgs["--z-accordion-highlight-color"],
    "--z-accordion-highlight-color3": cssPropsArgs["--z-accordion-highlight-color"],
    "--z-accordion-highlight-color4": cssPropsArgs["--z-accordion-highlight-color"],
  },
  args: {
    "--z-accordion-highlight-color2": null,
    "--z-accordion-highlight-color3": null,
    "--z-accordion-highlight-color4": null,
  },
  parameters: {
    controls: {
      exclude: ["open"],
    },
  },
  render: (args) =>
    html`${[
      StoryMeta.render(args),
      StoryMeta.render({
        ...args,
        "--z-accordion-highlight-color": args["--z-accordion-highlight-color2"],
      }),
      StoryMeta.render({
        ...args,
        "--z-accordion-highlight-color": args["--z-accordion-highlight-color3"],
      }),
      StoryMeta.render({
        ...args,
        "--z-accordion-highlight-color": args["--z-accordion-highlight-color4"],
      }),
    ]}`,
} satisfies Story;

export const WithTags = {
  render: (args) => html`
    <z-accordion
      .highlight=${args.highlight}
      .icon=${args.icon}
      .isDisabled=${args.isDisabled}
      .open=${args.open}
      .shadow=${args.shadow}
      label=${args.label}
      size=${args.size}
      variant=${args.variant}
      style=${styleMap({
        "--z-accordion-highlight-color": args["--z-accordion-highlight-color"],
        "--z-accordion-bg": args["--z-accordion-bg"],
        "--z-accordion-label-color": args["--z-accordion-label-color"],
        "--z-accordion-disabled-label-color": args["--z-accordion-disabled-label-color"],
        "--z-accordion-content-bg": args["--z-accordion-content-bg"],
        "--z-accordion-content-fg": args["--z-accordion-content-fg"],
        "--z-accordion-hover-color": args["--z-accordion-hover-color"],
        "--z-accordion-right-padding": args["--z-accordion-right-padding"],
        "--z-accordion-left-padding": args["--z-accordion-left-padding"],
        "--z-accordion-label-font-weight": args["--z-accordion-label-font-weight"],
      })}
    >
      <z-tag slot="tag">Tag 1</z-tag>
      <z-tag slot="tag">Tag 2</z-tag>
      <z-tag slot="tag">Tag 3</z-tag>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in Archimede,
      qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit? Possumusne ergo in vita
      summum bonum dicere, cum id ne in cena quidem posse videamur? Morbo gravissimo affectus, exul, orbus, egens,
      torqueatur eculeo: quem hunc appellas, Zeno? Nam memini etiam quae nolo, oblivisci non possum quae volo. Nec vero
      sum nescius esse utilitatem in historia, non modo voluptatem.
    </z-accordion>
  `,
} satisfies Story;
