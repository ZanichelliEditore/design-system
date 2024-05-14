import {html} from "lit";
import {styleMap} from "lit/directives/style-map.js";
import {ControlSize, AccordionVariant} from "../../beans";
import {ICONS} from "../icons/icons";
import {getColorVars, getColorVarsLabels} from "../../utils/storybook-utils";

export default {
  title: "ZAccordion",
  component: "z-accordion",

  argTypes: {
    "--z-accordion-bg": {
      options: [null, ...getColorVars()],

      control: {
        type: "select",
        labels: getColorVarsLabels(),
      },
    },

    "--z-accordion-label-color": {
      options: [null, ...getColorVars()],

      control: {
        type: "select",
        labels: getColorVarsLabels(),
      },
    },

    "--z-accordion-disabled-label-color": {
      options: [null, ...getColorVars()],

      control: {
        type: "select",
        labels: getColorVarsLabels(),
      },

      if: {
        arg: "isDisabled",
        truthy: true,
      },
    },

    "--z-accordion-content-bg": {
      options: [null, ...getColorVars()],

      control: {
        type: "select",
        labels: getColorVarsLabels(),
      },
    },

    "--z-accordion-content-fg": {
      options: [null, ...getColorVars()],

      control: {
        type: "select",
        labels: getColorVarsLabels(),
      },
    },

    "--z-accordion-hover-color": {
      options: [null, ...getColorVars()],

      control: {
        type: "select",
        labels: getColorVarsLabels(),
      },
    },

    "--z-accordion-highlight-color": {
      options: [null, ...getColorVars()],

      control: {
        type: "select",
        labels: getColorVarsLabels(),
      },

      if: {
        arg: "highlight",
        truthy: true,
      },
    },

    "icon": {
      options: [null, ...Object.keys(ICONS).sort()],

      control: {
        type: "select",

        labels: {
          null: "—",
        },
      },
    },

    "shadow": {
      if: {
        arg: "variant",
        eq: AccordionVariant.BACKGROUND,
      },
    },

    "size": {
      options: Object.values(ControlSize),

      control: {
        type: "inline-radio",
      },
    },

    "variant": {
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

  parameters: {
    accordionTemplate: (args) =>
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
        torqueatur eculeo: quem hunc appellas, Zeno? Nam memini etiam quae nolo, oblivisci non possum quae volo. Nec
        vero sum nescius esse utilitatem in historia, non modo voluptatem.
      </z-accordion>`,
  },
};

export const ZAccordion = {
  render: (args, context) => context.parameters.accordionTemplate(args),
  name: "ZAccordion",
};

export const Stack = {
  render: (args, context) =>
    html`${[
      context.parameters.accordionTemplate(args),
      context.parameters.accordionTemplate({
        ...args,
        "--z-accordion-highlight-color": args["--z-accordion-highlight-color 2"],
      }),
      context.parameters.accordionTemplate({
        ...args,
        "--z-accordion-highlight-color": args["--z-accordion-highlight-color 3"],
      }),
      context.parameters.accordionTemplate({
        ...args,
        "--z-accordion-highlight-color": args["--z-accordion-highlight-color 4"],
      }),
    ]}`,

  name: "stack",

  argTypes: {
    "--z-accordion-highlight-color 2": {
      options: [null, ...getColorVars()],

      control: {
        type: "select",
        labels: getColorVarsLabels(),
      },

      if: {
        arg: "highlight",
        truthy: true,
      },
    },

    "--z-accordion-highlight-color 3": {
      options: [null, ...getColorVars()],

      control: {
        type: "select",
        labels: getColorVarsLabels(),
      },

      if: {
        arg: "highlight",
        truthy: true,
      },
    },

    "--z-accordion-highlight-color 4": {
      options: [null, ...getColorVars()],

      control: {
        type: "select",
        labels: getColorVarsLabels(),
      },

      if: {
        arg: "highlight",
        truthy: true,
      },
    },
  },

  args: {
    "--z-accordion-highlight-color 2": null,
    "--z-accordion-highlight-color 3": null,
    "--z-accordion-highlight-color 4": null,
    "isDisabled": false,
  },

  parameters: {
    controls: {
      exclude: ["open"],
    },
  },
};

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

  name: "with tags",
};
