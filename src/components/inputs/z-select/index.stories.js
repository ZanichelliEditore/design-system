import {html} from "lit";
import {InputStatus, ControlSize} from "../../../beans";

export default {
  title: "ZSelect",
  component: "z-select",

  argTypes: {
    items: {
      control: {
        type: "object",
      },
    },

    label: {
      control: {
        type: "text",
      },
    },

    ariaLabel: {
      control: {
        type: "text",
      },
    },

    placeholder: {
      control: {
        type: "text",
      },
    },

    name: {
      control: {
        type: "text",
      },
    },

    status: {
      control: {
        type: "select",
      },

      options: ["-", ...Object.values(InputStatus)],
    },

    message: {
      control: {
        type: "text",
      },
    },

    size: {
      control: {
        type: "inline-radio",
      },

      options: Object.values(ControlSize),
    },

    disabled: {
      control: {
        type: "boolean",
      },
    },

    readonly: {
      control: {
        type: "boolean",
      },
    },

    htmlid: {
      control: {
        type: "text",
      },
    },

    htmltitle: {
      control: {
        type: "text",
      },
    },

    autocomplete: {
      control: {
        type: "boolean",
      },
    },

    noresultslabel: {
      control: {
        type: "text",
      },
    },

    hasListGroups: {
      control: {
        type: "boolean",
      },
    },

    resetItem: {
      control: {
        type: "text",
      },
    },

    isfixed: {
      control: {
        type: "boolean",
      },
    },
  },

  args: {
    items: [
      {
        id: "item_1",
        name: "first item",
        selected: false,
      },
      {
        id: "item_2",
        name: "second item",
        selected: true,
      },
      {
        id: "item_3",
        name: "disabled item",
        selected: false,
        disabled: true,
      },
      {
        id: "item_4",
        name: "fourth item",
        selected: false,
      },
    ],

    label: "this is the label",
    ariaLabel: "",
    placeholder: "select placeholder",
    name: "",
    status: "-",
    message: "helper text",
    size: "big",
    disabled: false,
    readonly: false,
    htmlid: "",
    htmltitle: "",
    autocomplete: false,
    noresultslabel: "Nessun risultato",
    hasListGroups: false,
    resetItem: "",
    isfixed: false,
  },

  decorators: [
    (Story) => html`
      <style>
        span,
        p {
          font-size: inherit;
          letter-spacing: initial;
        }
      </style>
      ${Story()}
    `,
  ],
};

export const ZSelect = {
  render: (args) => html`
    <z-select
      items=${JSON.stringify(args.items)}
      label=${args.label}
      aria-label=${args.ariaLabel}
      placeholder=${args.placeholder}
      name=${args.name}
      status=${args.status}
      message=${args.message}
      autocomplete=${args.autocomplete}
      noresultslabel=${args.noresultslabel}
      disabled=${args.disabled}
      readonly=${args.readonly}
      htmlid=${args.htmlid}
      htmltitle=${args.htmltitle}
      reset-item=${args.resetItem}
      isfixed=${args.isfixed}
      size=${args.size}
    ></z-select>
  `,

  name: "z-select",
};

export const ZSelectWithGroups = {
  render: (args) => html`
    <z-select
      items=${JSON.stringify(args.items)}
      label=${args.label}
      aria-label=${args.ariaLabel}
      placeholder=${args.placeholder}
      name=${args.name}
      status=${args.status}
      message=${args.message}
      autocomplete=${args.autocomplete}
      noresultslabel=${args.noresultslabel}
      disabled=${args.disabled}
      readonly=${args.readonly}
      htmlid=${args.htmlid}
      htmltitle=${args.htmltitle}
      has-group-items=${args.hasListGroups}
      reset-item=${args.resetItem}
      isfixed=${args.isfixed}
      size=${args.size}
    ></z-select>
  `,

  name: "z-select with groups",

  args: {
    hasListGroups: true,

    items: [
      {
        id: "item_1",
        name: "first item",
        selected: false,
        category: "Gruppo 1",
      },
      {
        id: "item_2",
        name: "second item",
        selected: false,
        category: "Gruppo 1",
      },
      {
        id: "item_3",
        name: "disabled item",
        selected: false,
        category: "Gruppo 2",
        disabled: true,
      },
      {
        id: "item_4",
        name: "fourth item",
        selected: false,
        category: "Gruppo 2",
      },
      {
        id: "item_5",
        name: "fifth item",
        selected: false,
        category: "Gruppo 3",
        disabled: true,
      },
      {
        id: "item_6",
        name: "sixth item",
        selected: false,
        category: "Gruppo 3",
      },
    ],
  },
};

export const ZSelectWithIcons = {
  render: (args) => html`
    <z-select
      items=${JSON.stringify(args.items)}
      label=${args.label}
      aria-label=${args.ariaLabel}
      placeholder=${args.placeholder}
      name=${args.name}
      status=${args.status}
      message=${args.message}
      autocomplete=${args.autocomplete}
      noresultslabel=${args.noresultslabel}
      disabled=${args.disabled}
      readonly=${args.readonly}
      htmlid=${args.htmlid}
      htmltitle=${args.htmltitle}
      reset-item=${args.resetItem}
      isfixed=${args.isfixed}
      size=${args.size}
    ></z-select>
  `,

  name: "z-select with icons",

  args: {
    hasListGroups: true,

    items: [
      {
        id: "item_1",
        name: "first item",
        selected: false,
        icon: "teacher",
      },
      {
        id: "item_2",
        name: "second item",
        selected: false,
        icon: "teacher",
      },
      {
        id: "item_3",
        name: "disabled item",
        selected: false,
        disabled: true,
        icon: "teacher",
      },
    ],
  },
};
