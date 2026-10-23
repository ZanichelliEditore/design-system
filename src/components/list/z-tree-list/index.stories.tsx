import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import type {TreeListItem} from "../../../beans";
import type {ZTreeList} from "./index";

const sampleItems: TreeListItem[] = [
  {
    name: "Parent 1",
    icon: "folder",
    id: "parent-1",
    url: "#",
    children: [
      {
        name: "Child 1.1",
        icon: "book",
        url: "#",
        id: "child-1-1",
      },
      {
        name: "Child 1.2",
        icon: "book",
        url: "#",
        id: "child-1-2",
      },
    ],
  },
  {
    name: "Parent 2",
    icon: "folder",
    id: "parent-2",
    url: "#",
    children: [
      {
        name: "Child 2.1",
        icon: "book",
        url: "#",
        id: "child-2-1",
      },
    ],
  },
];

const clickableItems: TreeListItem[] = [
  {
    name: "Parent 1",
    icon: "folder",
    id: "parent-1",
    url: "#",
    children: [
      {
        name: "Child 1.1",
        icon: "book",
        id: "child-1-1",
        url: "#",
      },
      {
        name: "Child 1.2",
        icon: "book",
        id: "child-1-2",
        url: "#",
      },
    ],
  },
  {
    name: "Parent 2",
    icon: "folder",
    id: "parent-2",
    url: "#",
    children: [
      {
        name: "Child 2.1",
        icon: "book",
        id: "child-2-1",
        url: "#",
      },
    ],
  },
];

const boldItems: TreeListItem[] = [
  {
    name: "Parent 1",
    icon: "folder",
    bold: true,
    id: "parent-1",
    url: "#",
    children: [
      {
        name: "Child 1.1",
        icon: "book",
        id: "child-1-1",
        url: "#",
      },
      {
        name: "Child 1.2",
        icon: "book",
        id: "child-1-2",
        url: "#",
      },
    ],
  },
  {
    name: "Parent 2",
    icon: "folder",
    id: "parent-2",
    url: "#",
    bold: true,
    children: [
      {
        name: "Child 2.1",
        icon: "book",
        id: "child-2-1",
        url: "#",
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
  render: (args) => <z-tree-list items={args.items}></z-tree-list>,
} satisfies Meta<ZTreeList>;

export default StoryMeta;

type Story = StoryObj<ZTreeList>;

export const Base = {
  args: {
    items: sampleItems,
  },
} satisfies Story;

export const Bold = {
  args: {
    items: boldItems,
  },
} satisfies Story;

export const Clickable = {
  args: {
    items: clickableItems,
  },
} satisfies Story;
