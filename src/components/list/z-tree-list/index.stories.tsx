import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {ZTreeList} from "./index";

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
  component: ZTreeList,
  argTypes: {
    items: {control: "object"},
  },
  args: {
    items: sampleItems,
  },
  render: (args) => <z-tree-list items={args.items}></z-tree-list>,
} satisfies Meta;

export default StoryMeta;

export const Base: StoryObj = {
  args: {
    items: sampleItems,
  },
};

export const Bold: StoryObj = {
  args: {
    items: boldItems,
  },
};

export const Clickable: StoryObj = {
  args: {
    items: clickableItems,
  },
};
