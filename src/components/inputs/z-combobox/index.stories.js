import {html} from "lit";
import {ControlSize} from "../../../beans";

export default {
  title: "ZCombobox",
  component: "z-combobox",

  argTypes: {
    items: {
      control: {
        type: "object",
      },
    },

    checkalltext: {
      control: {
        type: "text",
      },
    },

    closesearchtext: {
      control: {
        type: "text",
      },
    },

    disabled: {
      control: {
        type: "boolean",
      },
    },

    hascheckall: {
      control: {
        type: "boolean",
      },
    },

    hassearch: {
      control: {
        type: "boolean",
      },
    },

    inputid: {
      control: {
        type: "text",
      },
    },

    isfixed: {
      control: {
        type: "boolean",
      },
    },

    isopen: {
      control: {
        type: "boolean",
      },
    },

    label: {
      control: {
        type: "text",
      },
    },

    maxcheckableitems: {
      control: {
        type: "number",
      },
    },

    hasgroupitems: {
      control: {
        type: "boolean",
      },
    },

    noresultslabel: {
      control: {
        type: "text",
      },
    },

    searchlabel: {
      control: {
        type: "text",
      },
    },

    searchplaceholder: {
      control: {
        type: "text",
      },
    },

    searchtitle: {
      control: {
        type: "text",
      },
    },

    uncheckalltext: {
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
  },

  args: {
    items: [
      {
        id: "item_1",
        name: "First item",
        checked: false,
        category: "Gruppo 1",
      },
      {
        id: "item_2",
        name: "Second item",
        checked: false,
        category: "Gruppo 1",
      },
      {
        id: "item_3",
        name: "Other item",
        checked: false,
        category: "Gruppo 2",
      },
      {
        id: "item_4",
        name: "Last item",
        checked: false,
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
    size: "big",
  },
};

export const ZCombobox = {
  render: (args) =>
    html` <z-combobox
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

  name: "z-combobox",
};

export const ZComboboxWithGroups = {
  render: (args) =>
    html` <z-combobox
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

  name: "z-combobox with groups",

  args: {
    items: [
      {
        id: "item_1",
        name: "First item",
        checked: false,
        category: "Gruppo 1",
      },
      {
        id: "item_2",
        name: "Second item",
        checked: false,
        category: "Gruppo 1",
      },
      {
        id: "item_3",
        name: "Other item",
        checked: false,
        category: "Gruppo 2",
      },
      {
        id: "item_5",
        name: "And another item",
        checked: false,
        category: "Gruppo 3",
      },
      {
        id: "item_6",
        name: "And another one",
        checked: false,
        category: "Gruppo 3",
      },
      {
        id: "item_7",
        name: "Last item",
        checked: false,
        category: "Gruppo 4",
      },
    ],

    hasgroupitems: true,
  },
};

export const ZComboboxDisabled = {
  render: (args) =>
    html` <z-combobox
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

  name: "z-combobox disabled",

  args: {
    disabled: true,
  },
};
