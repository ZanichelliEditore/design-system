import {h} from "@stencil/core";
import {Fragment} from "@stencil/core/internal";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {AccordionVariant, ControlSize} from "../../beans";
import {ICONS} from "../../constants/iconset";
import {CSSVarsArguments, extractCSSVars, getColorTokenArgConfig} from "../../utils/storybook-utils";
import {ZAccordion} from "./index";

const colorTokenArgConfig = getColorTokenArgConfig();
const cssPropsArgs = {
  "--z-accordion-bg": colorTokenArgConfig,
  "--z-accordion-label-color": colorTokenArgConfig,
  "--z-accordion-disabled-label-color": {
    ...colorTokenArgConfig,
    if: {
      arg: "isDisabled",
      truthy: true,
    },
  },
  "--z-accordion-content-bg": colorTokenArgConfig,
  "--z-accordion-content-fg": colorTokenArgConfig,
  "--z-accordion-hover-color": colorTokenArgConfig,
  "--z-accordion-highlight-color": {
    ...colorTokenArgConfig,
    if: {
      arg: "highlight",
      truthy: true,
    },
  },
} as const;

type ZAccordionStoriesArgs = ZAccordion &
  CSSVarsArguments<
    | keyof typeof cssPropsArgs
    | "z-accordion-right-padding"
    | "z-accordion-left-padding"
    | "z-accordion-label-font-weight"
    | `z-accordion-highlight-color${number | undefined}`
  >;

/**
 * To add the highlight band on the left, set the `highlight` property to `true` then set the `--z-accordion-highlight-color` CSS variable to the desired color.
 */
const StoryMeta = {
  title: "ZAccordion",
  component: ZAccordion,
  argTypes: {
    ...cssPropsArgs,
    icon: {
      options: Object.keys(ICONS).sort(),
      control: {
        type: "select",
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
    "--z-accordion-highlight-color": "var(--color-primary01)",
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
  render: (args) => (
    <z-accordion
      {...args}
      style={extractCSSVars(args)}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in Archimede,
      qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit? Possumusne ergo in vita
      summum bonum dicere, cum id ne in cena quidem posse videamur? Morbo gravissimo affectus, exul, orbus, egens,
      torqueatur eculeo: quem hunc appellas, Zeno? Nam memini etiam quae nolo, oblivisci non possum quae volo. Nec vero
      sum nescius esse utilitatem in historia, non modo voluptatem.
    </z-accordion>
  ),
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
    "--z-accordion-highlight-color2": "var(--color-primary01)",
    "--z-accordion-highlight-color3": "var(--color-primary01)",
    "--z-accordion-highlight-color4": "var(--color-primary01)",
  },
  parameters: {
    controls: {
      exclude: ["open"],
    },
  },
  render: (args) => (
    <Fragment>
      {StoryMeta.render(args)}
      {StoryMeta.render({
        ...args,
        "--z-accordion-highlight-color": args["--z-accordion-highlight-color2"],
      } as ZAccordionStoriesArgs)}
      {StoryMeta.render({
        ...args,
        "--z-accordion-highlight-color": args["--z-accordion-highlight-color3"],
      } as ZAccordionStoriesArgs)}
      {StoryMeta.render({
        ...args,
        "--z-accordion-highlight-color": args["--z-accordion-highlight-color4"],
      } as ZAccordionStoriesArgs)}
    </Fragment>
  ),
} satisfies Story;

export const WithTags = {
  render: (args) => (
    <z-accordion
      {...args}
      style={extractCSSVars(args)}
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
  ),
} satisfies Story;
