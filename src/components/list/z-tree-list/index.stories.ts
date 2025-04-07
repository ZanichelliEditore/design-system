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

const boldItems = [
  {
    name: "Parent 1",
    icon: "folder",
    bold: true,
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
    bold: true,
    children: [
      {
        name: "Child 2.1",
        icon: "book",
      },
    ],
  },
];

const StoryMeta = {
  title: "ZList/ZTreeList",
  component: "z-tree-list",
  argTypes: {
    items: {control: "object"},
  },
  args: {
    items: sampleItems,
  },
} satisfies Meta;

export default StoryMeta;

const Template = (args): TemplateResult => {
  return html`<z-tree-list items=${JSON.stringify(args.items)}></z-tree-list>`;
};

export const Base: StoryObj = {
  args: {
    items: sampleItems,
  },
  render: Template,
};

export const Bold: StoryObj = {
  args: {
    items: boldItems,
  },
  render: Template,
};

export const Clickable: StoryObj = {
  args: {
    items: clickableItems,
  },
  render: Template,
};
