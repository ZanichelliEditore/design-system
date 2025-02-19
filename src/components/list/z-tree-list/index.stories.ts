import {Meta, StoryObj} from "@storybook/web-components";
import {html} from "lit";
import "./index";

const sampleItems = [
  {
    name: "Parent 1",
    icon: "folder",
    url: "#",
    children: [
      {
        name: "Child 1.1",
        icon: "book",
        url: "#",
      },
      {
        name: "Child 1.2",
        icon: "book",
        url: "#",
      },
    ],
  },
  {
    name: "Parent 2",
    icon: "folder",
    url: "#",
    children: [
      {
        name: "Child 2.1",
        icon: "book",
        url: "#",
      },
    ],
  },
];

const StoryMeta = {
  title: "ZList/ZTreeList",
  component: "z-tree-list",
  argTypes: {
    clickable: {control: "boolean"},
    boldParents: {control: "boolean"},
    items: {control: "object"},
  },
  args: {
    clickable: true,
    boldParents: false,
    items: sampleItems,
  },
} satisfies Meta;

export default StoryMeta;

export const Default: StoryObj = {
  render: (args) =>
    html`<z-tree-list
      .items=${args.items}
      clickable=${args.clickable}
      bold-parents=${args.boldParents}
      @itemClicked=${(event: CustomEvent) => console.log("Item clicked:", event.detail)}
    ></z-tree-list>`,
};
