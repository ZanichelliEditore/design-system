import {Meta, StoryObj} from "@storybook/web-components";
import {html} from "lit";
import {ZCombobox} from ".";
import {ComboItem, ControlSize} from "../../beans";
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
      {id: "ite_m_1", name: "First item", checked: false, category: "Gruppo 1"},
      {id: "ite_m_2", name: "Second item", checked: false, category: "Gruppo 1"},
      {id: "it_em_3", name: "Other item", checked: false, category: "Gruppo 2"},
      {id: "it_e_m_5", name: "Last item", checked: false, category: "Gruppo 3"},
    ] satisfies ComboItem[],
    checkalltext: "Select all",
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
      disabled=${args.disabled}
      hascheckall=${args.hascheckall}
      hassearch=${args.hassearch}
      inputid=${args.inputid}
      isfixed=${args.isfixed}
      isopen=${args.isopen}
      .items=${args.items}
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
    hasgroupitems: true,
  },
} satisfies Story;

export const Disabled = {
  args: {
    disabled: true,
  },
} satisfies Story;
