import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {ComboItem, ControlSize} from "../../beans";
import {ZCombobox} from "./index";

const StoryMeta = {
  title: "ZCombobox",
  component: ZCombobox,
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
    htmlAriaLabel: "",
  },
  render: (args) => <z-combobox {...args} />,
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
