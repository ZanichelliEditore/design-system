import {Meta, StoryObj} from "@storybook/web-components";
import {html} from "lit";
import {ZCombobox} from ".";
import {ControlSize} from "../../beans";
import "./index";

const StoryMeta = {
  title: "ZCombobox",
  component: "z-combobox",
  argTypes: {
    items: {
      control: {
        type: "object",
      },
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
        checked: false,
        name: "",
        category: "Gruppo 1",
      },
      {
        id: "item_2",
        checked: false,
        name: "",
        category: "Gruppo 1",
      },
      {
        id: "item_3",
        checked: false,
        name: "",
        category: "Gruppo 2",
      },
      {
        id: "item_4",
        checked: false,
        name: "",
        category: "Gruppo 3",
      },
    ],
    checkalltext: "Select all",
    closesearchtext: "Close",
    disabled: false,
    hascheckall: true,
    hassearch: true,
    inputid: "combo_1",
    isfixed: true,
    isopen: true,
    label: "Combobox Label",
    maxcheckableitems: 4,
    hasgroupitems: false,
    noresultslabel: "No items",
    searchlabel: "Search Label",
    searchplaceholder: "Search Placeholder",
    searchtitle: "Search Title",
    uncheckalltext: "Uncheck All",
    size: ControlSize.BIG,
  },
  render: (args) =>
    html`<z-combobox
      checkalltext=${args.checkalltext}
      closesearchtext=${args.closesearchtext}
      disabled=${args.disabled}
      hascheckall=${args.hascheckall}
      hassearch=${args.hassearch}
      inputid=${args.inputid}
      isfixed=${args.isfixed}
      isopen=${args.isopen}
      items=${JSON.stringify(args.items)}
      label=${args.label}
      maxcheckableitems=${args.maxcheckableitems}
      hasgroupitems=${args.hasgroupitems}
      noresultslabel=${args.noresultslabel}
      searchlabel=${args.searchlabel}
      searchplaceholder=${args.searchplaceholder}
      searchtitle=${args.searchtitle}
      uncheckalltext=${args.uncheckalltext}
      size=${args.size}
    />`,
} satisfies Meta<ZCombobox>;

export default StoryMeta;
type Story = StoryObj<ZCombobox>;
export const Default = {};

export const Groups = {
  args: {
    items: [
      {
        id: "item_1",
        checked: false,
        name: "",
        category: "Gruppo 1",
      },
      {
        id: "item_2",
        checked: false,
        name: "",
        category: "Gruppo 1",
      },
      {
        id: "item_3",
        checked: false,
        name: "",
        category: "Gruppo 2",
      },
      {
        id: "item_5",
        checked: false,
        name: "",
        category: "Gruppo 3",
      },
      {
        id: "item_6",
        checked: false,
        name: "",
        category: "Gruppo 3",
      },
      {
        id: "item_7",
        checked: false,
        name: "",
        category: "Gruppo 4",
      },
    ],
    hasgroupitems: true,
  },
} satisfies Story;

export const Disabled = {
  args: {
    disabled: true,
  },
} satisfies Story;
