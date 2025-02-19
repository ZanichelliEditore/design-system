import {Meta, StoryObj} from "@storybook/web-components";
import {TemplateResult, html} from "lit";
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
    clickable: false,
    boldParents: false,
    items: sampleItems,
  },
} satisfies Meta;

export default StoryMeta;

const Template = (args): TemplateResult =>
  html`<z-tree-list
    .items=${args.items}
    clickable=${args.clickable}
    bold-parents=${args.boldParents}
  ></z-tree-list>`;

export const Base: StoryObj = {
  args: {
    clickable: false,
    boldParents: false,
  },
  render: Template,
};

export const BoldParents: StoryObj = {
  args: {
    clickable: false,
    boldParents: true,
  },
  render: Template,
};

export const Clickable: StoryObj = {
  args: {
    clickable: true,
    boldParents: false,
  },
  render: Template,
};

export const ClickableAndBold: StoryObj = {
  args: {
    clickable: true,
    boldParents: true,
  },
  render: Template,
};
