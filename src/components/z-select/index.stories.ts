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
        name: "¡Acción!",
        id: "2000047831",
        category: "¡Acción!",
        selected: false,
        children: [
          {
            name: "Unidades 0-6",
            id: "2000047832",
            selected: false,
          },
          {
            name: "Unidades 07-12",
            id: "2000047833",
            selected: false,
          },
          {
            name: "Unidades 13-18",
            id: "2000047834",
            selected: false,
          },
        ],
      },
      {
        name: "¡Buen Viaje!",
        id: "2000056919",
        category: "¡Buen Viaje!",
        selected: false,
        children: [
          {
            name: "¡Buen Viaje!",
            id: "2000056920",
            selected: false,
          },
        ],
      },
      {
        name: "¡Buen viaje! - Quarta edizione",
        id: "2000184931",
        category: "¡Buen viaje! - Quarta edizione",
        selected: false,
        children: [
          {
            name: "¡Buen viaje! - Quarta edizione",
            id: "2000184932",
            selected: false,
          },
        ],
      },
      {
        name: "¡Trato hecho!",
        id: "2000045832",
        category: "¡Trato hecho!",
        selected: false,
        children: [
          {
            name: "¡Trato hecho!",
            id: "2000045833",
            selected: false,
          },
        ],
      },
      {
        name: "¡Trato hecho! – Segunda edición",
        id: "2000062389",
        category: "¡Trato hecho! – Segunda edición",
        selected: false,
        children: [
          {
            name: "¡Trato hecho! – Segunda edición",
            id: "2000062390",
            selected: false,
          },
        ],
      },
      {
        name: "@d litteram. Corso di lingua e cultura latina, ed. arancione",
        id: "2000047506",
        category: "@d litteram. Corso di lingua e cultura latina, ed. arancione",
        selected: false,
        children: [
          {
            name: "Volume 1",
            id: "2000047507",
            selected: false,
          },
          {
            name: "Volume 2",
            id: "2000047508",
            selected: false,
          },
        ],
      },
      {
        name: "@d litteram. Corso di lingua e cultura latina.",
        id: "2000045215",
        category: "@d litteram. Corso di lingua e cultura latina.",
        selected: false,
        children: [
          {
            name: "Esercizi 1",
            id: "2000045216",
            selected: false,
          },
          {
            name: "Esercizi 2",
            id: "2000045217",
            selected: false,
          },
        ],
      },
      {
        name: "#Terra - Edizione azzurra",
        id: "2000049753",
        category: "#Terra - Edizione azzurra",
        selected: false,
        children: [
          {
            name: "Volume 1",
            id: "2000049754",
            selected: false,
          },
          {
            name: "Volume 2",
            id: "2000049755",
            selected: false,
          },
        ],
      },
      {
        name: "#Terra - Edizione azzurra (2 ed.)",
        id: "2000096902",
        category: "#Terra - Edizione azzurra (2 ed.)",
        selected: false,
        children: [
          {
            name: "Volume 1",
            id: "2000096903",
            selected: false,
          },
          {
            name: "Volume 1 con Chimica",
            id: "2000096904",
            selected: false,
          },
          {
            name: "Volume 2",
            id: "2000096905",
            selected: false,
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
      htmlid=${args.htmlid}
      htmltitle=${args.htmltitle}
      reset-item=${args.resetItem}
      .hasTreeItems=${args.hasTreeItems}
    ></z-select>
  `,
} satisfies Story;
