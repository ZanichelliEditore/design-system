import {Meta, StoryObj} from "@storybook/web-components";
import {TemplateResult, html} from "lit";
import "./index";

const sampleItems = [
  {
    name: "Parent 1",
    icon: "folder",
    children: [
      {
        name: "Child 1.1",
        icon: "book",
      },
      {
        name: "Child 1.2",
        icon: "book",
      },
    ],
  },
  {
    name: "Parent 2",
    icon: "folder",
    children: [
      {
        name: "Child 2.1",
        icon: "book",
      },
    ],
  },
];

const clickableItems = [
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

const otherItemsVariants = [
  {
    name: "Parent 1",
    bold: true,
    children: [
      {
        name: "Child 1.1",
        bold: false,
      },
      {
        name: "Child 1.2",
        bold: false,
      },
    ],
  },
  {
    name: "Parent 2",
    url: "#",
    children: [
      {
        name: "Child 2.1",
        bold: true,
        url: "#",
      },
    ],
  },
];

const StoryMeta = {
  title: "ZList/ZTreeList",
  component: "z-tree-list",
  argTypes: {
    boldParents: {control: "boolean"},
    items: {control: "object"},
  },
  args: {
    boldParents: false,
    items: sampleItems,
  },
} satisfies Meta;

export default StoryMeta;

const Template = (args): TemplateResult => {
  const processedItems = args.boldParents
    ? args.items.map((item) => {
        const newItem = {...item, bold: true};
        if (newItem.children && Array.isArray(newItem.children)) {
          newItem.children = newItem.children.map((child) => ({
            ...child,
            bold: false,
          }));
        }

        return newItem;
      })
    : args.items;

  return html`<z-tree-list items=${JSON.stringify(processedItems)}></z-tree-list>`;
};

export const Base: StoryObj = {
  args: {
    boldParents: false,
  },
  render: Template,
};

export const BoldParents: StoryObj = {
  args: {
    boldParents: true,
  },
  render: Template,
};

export const Clickable: StoryObj = {
  args: {
    boldParents: false,
    items: clickableItems,
  },
  render: Template,
};

export const ClickableAndBoldParents: StoryObj = {
  args: {
    boldParents: true,
    items: clickableItems,
  },
  render: Template,
};

export const OtherVariants: StoryObj = {
  args: {
    items: otherItemsVariants,
  },
  render: Template,
};
