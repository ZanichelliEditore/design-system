import {Meta, StoryObj} from "@storybook/web-components";
import {html} from "lit";
import {type ZSelect} from ".";
import {ControlSize, InputStatus, SelectItem} from "../../beans";
import "./index";

const StoryMeta = {
  title: "ZSelect",
  component: "z-select",
  argTypes: {
    status: {
      control: {
        type: "select",
        labels: {
          null: "-",
        },
      },
      options: [null, ...Object.values(InputStatus)],
    },
    size: {
      control: {
        type: "inline-radio",
      },
      options: Object.values(ControlSize),
    },
  },
  args: {
    items: [
      {
        id: "item_1",
        name: "item_1",
        selected: false,
      },
      {
        id: "item_2",
        name: "item_2",
        selected: true,
      },
      {
        id: "item_3",
        name: "item_3",
        selected: false,
        disabled: true,
      },
      {
        id: "item_4",
        name: "item_4",
        selected: false,
      },
    ] as SelectItem[],
    label: "this is the label",
    ariaLabel: "",
    placeholder: "select placeholder",
    status: null,
    message: "helper text",
    size: ControlSize.BIG,
    disabled: false,
    readonly: false,
    htmlid: "",
    htmltitle: "",
    autocomplete: false,
    noresultslabel: "Nessun risultato",
    hasGroupItems: false,
    hasTreeItems: false,
    resetItem: "",
    isfixed: false,
  },
} satisfies Meta<ZSelect>;
export default StoryMeta;

type Story = StoryObj<ZSelect>;

export const Default = {
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
} satisfies Story;

export const Groups = {
  args: {
    hasGroupItems: true,
    items: [
      {
        id: "item_1",
        name: "item_1",
        selected: false,
        category: "Gruppo 1",
      },
      {
        id: "item_2",
        name: "item_2",
        selected: false,
        category: "Gruppo 1",
      },
      {
        id: "item_3",
        name: "item_3",
        selected: false,
        category: "Gruppo 2",
        disabled: true,
      },
      {
        id: "item_4",
        name: "item_4",
        selected: false,
        category: "Gruppo 2",
      },
      {
        id: "item_5",
        name: "item_5",
        selected: false,
        category: "Gruppo 3",
        disabled: true,
      },
      {
        id: "item_6",
        name: "item_6",
        selected: false,
        category: "Gruppo 3",
      },
    ] as SelectItem[],
  },
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
      .hasGroupItems=${args.hasGroupItems}
      reset-item=${args.resetItem}
      isfixed=${args.isfixed}
      size=${args.size}
    ></z-select>
  `,
} satisfies Story;

export const ZSelectWithIcons = {
  args: {
    hasGroupItems: true,
    items: [
      {
        id: "item_1",
        name: "item_1",
        selected: false,
        icon: "teacher",
      },
      {
        id: "item_2",
        name: "item_2",
        selected: false,
        icon: "teacher",
      },
      {
        id: "item_3",
        name: "item_3",
        selected: false,
        disabled: true,
        icon: "teacher",
      },
    ] as SelectItem[],
  },
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
} satisfies Story;

export const ZSelectWithTreeItems = {
  args: {
    hasTreeItems: true,
    hasGroupItems: false,
    items: [
      {
        id: "padre",
        name: "Padre",
        selected: false,
        category: "Sezione",
        children: [
          {
            id: "figlio1aa",
            name: "Figlio",
            selected: false,
            children: [],
          },
          {
            id: "figlio1b",
            name: "Figlio 2",
            selected: false,
          },
        ],
      },
      {
        id: "padre1",
        name: "Padre 1",
        selected: false,
        category: "Sezione 1",
        children: [
          {
            id: "figlio1a",
            name: "Figlio 1A",
            selected: false,
            children: [
              {
                id: "nipote1a-1",
                name: "Nipote 1A-1",
                selected: false,
              },
              {
                id: "nipote1a-2",
                name: "Nipote 1A-2 (disabilitato)",
                selected: false,
                disabled: true,
              },
            ],
          },
          {
            id: "figlio1b",
            name: "Figlio 1B",
            selected: false,
          },
        ],
      },
      {
        id: "padre3",
        name: "Padre 3",
        selected: false,
        category: "Altra sezione",
        children: [
          {
            id: "figlio3a",
            name: "Figlio 3A",
            selected: false,
            children: [
              {
                id: "nipote3a-1",
                name: "Nipote 3A-1",
                selected: false,
              },
            ],
          },
        ],
      },
    ] as SelectItem[],
  },
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
      .hasTreeItems=${args.hasTreeItems}
    ></z-select>
  `,
} satisfies Story;

export const ZSelectWithGroupsAndTreeItems = {
  args: {
    hasTreeItems: true,
    hasGroupItems: true,
    items: [
      {
        id: "padre",
        name: "Padre",
        selected: false,
        category: "Sezione",
        children: [
          {
            id: "figlio1aa",
            name: "Figlio",
            selected: false,
            children: [],
          },
          {
            id: "figlio1b",
            name: "Figlio 2",
            selected: false,
          },
        ],
      },
      {
        id: "padre1",
        name: "Padre 1",
        selected: false,
        category: "Sezione 1",
        children: [
          {
            id: "figlio1a",
            name: "Figlio 1A",
            selected: false,
            children: [
              {
                id: "nipote1a-1",
                name: "Nipote 1A-1",
                selected: false,
              },
              {
                id: "nipote1a-2",
                name: "Nipote 1A-2 (disabilitato)",
                selected: false,
                disabled: true,
              },
            ],
          },
          {
            id: "figlio1b",
            name: "Figlio 1B",
            selected: false,
          },
        ],
      },
      {
        id: "padre3",
        name: "Padre 3",
        selected: false,
        category: "Altra sezione",
        children: [
          {
            id: "figlio3a",
            name: "Figlio 3A",
            selected: false,
            children: [
              {
                id: "nipote3a-1",
                name: "Nipote 3A-1",
                selected: false,
              },
            ],
          },
        ],
      },
    ] as SelectItem[],
  },
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
      .hasTreeItems=${args.hasTreeItems}
      .hasGroupItems=${args.hasGroupItems}
    ></z-select>
  `,
} satisfies Story;
