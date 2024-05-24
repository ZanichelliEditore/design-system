import {html} from "lit";
import {ListSize, ListType} from "../../../beans";
import {Meta, StoryObj} from "@storybook/web-components";
import {ZList} from ".";
import "./index";
import "../z-list-element/index";

const StoryMeta = {
  title: "ZList/ZList",
  component: "z-list",
  argTypes: {
    size: {
      control: {
        type: "select",
      },
      options: Object.values(ListSize),
    },
    listType: {
      control: {
        type: "select",
      },
      options: Object.values(ListType),
    },
  },
  args: {
    size: ListSize.MEDIUM,
    listType: ListType.NONE,
  },
  render: (args) => html`
    <z-list
      .listType=${args.listType}
      size=${args.size}
    >
      <z-list-element
        .listType=${args.listType}
        size=${args.size}
        >Elemento 1</z-list-element
      >
      <z-list-element
        .listType=${args.listType}
        size=${args.size}
        >Elemento 2</z-list-element
      >
      <z-list-element
        .listType=${args.listType}
        size=${args.size}
        >Elemento 3</z-list-element
      >
    </z-list>
  `,
} satisfies Meta<ZList>;

export default StoryMeta;

type Story = StoryObj<ZList>;

export const Default = {} satisfies Story;

export const HeaderDivider = {
  render: (args) =>
    html`<z-list>
      <z-list-group divider-type="header">
        <div slot="header-title">Gruppo 1</div>
        <z-list-element
          .listType=${args.listType}
          size=${args.size}
          >Elemento 1</z-list-element
        >
        <z-list-element
          .listType=${args.listType}
          size=${args.size}
          >Elemento 2</z-list-element
        >
        <z-list-element
          .listType=${args.listType}
          size=${args.size}
          >Elemento 3</z-list-element
        >
      </z-list-group>
      <z-list-group divider-type="header">
        <div slot="header-title">Gruppo 2</div>
        <z-list-element
          .listType=${args.listType}
          size=${args.size}
          >Elemento 1</z-list-element
        >
        <z-list-element
          .listType=${args.listType}
          size=${args.size}
          >Elemento 2</z-list-element
        >
        <z-list-element
          .listType=${args.listType}
          size=${args.size}
          >Elemento 3</z-list-element
        >
      </z-list-group>
    </z-list> `,
} satisfies Story;

export const ElementDivider = {
  render: (args) =>
    html`<z-list>
      <z-list-group divider-type="element">
        <div slot="header-title">Gruppo 1</div>
        <z-list-element
          .listType=${args.listType}
          size=${args.size}
          >Elemento 1</z-list-element
        >
        <z-list-element
          .listType=${args.listType}
          size=${args.size}
          >Elemento 2</z-list-element
        >
        <z-list-element
          .listType=${args.listType}
          size=${args.size}
          >Elemento 3</z-list-element
        >
      </z-list-group>
      <z-list-group divider-type="element">
        <div slot="header-title">Gruppo 2</div>
        <z-list-element
          .listType=${args.listType}
          size=${args.size}
          >Elemento 1</z-list-element
        >
        <z-list-element
          .listType=${args.listType}
          size=${args.size}
          >Elemento 2</z-list-element
        >
        <z-list-element
          .listType=${args.listType}
          size=${args.size}
          >Elemento 3</z-list-element
        >
      </z-list-group>
    </z-list>`,
} satisfies Story;

export const ClickableElements = {
  render: () =>
    html`<z-list>
      <z-list-group>
        <z-list-element clickable>Elemento 1</z-list-element>
        <z-list-element clickable>Elemento 2</z-list-element>
        <z-list-element clickable>Elemento 3</z-list-element>
      </z-list-group>
    </z-list>`,
} satisfies Story;

export const ExpandableElements = {
  render: () =>
    html`<z-list size="large">
      <z-list-group divider-type="element">
        <z-list-element
          expandable
          align-button="left"
          expandable-style="accordion"
          ><span>Elemento 1</span><span slot="inner-content">INNER CONTENT 1 BUTTON LEFT</span></z-list-element
        >
        <z-list-element
          expandable
          align-button="right"
          expandable-style="menu"
          ><span>Elemento 2</span><span slot="inner-content">INNER CONTENT 2</span></z-list-element
        >
        <z-list-element
          expandable
          align-button="right"
          expandable-style="menu"
          ><span>Elemento 3</span><span slot="inner-content">INNER CONTENT 3</span></z-list-element
        >
      </z-list-group>
    </z-list>`,
} satisfies Story;

export const UnorderedIndex = {
  parameters: {
    controls: {
      exclude: ["size", "listType"],
    },
  },
  args: {
    listType: ListType.UNORDERED,
  },
} satisfies Story;

export const OrderedIndex = {
  parameters: {
    controls: {
      exclude: ["size", "listType"],
    },
  },
  args: {
    listType: ListType.ORDERED,
  },
} satisfies Story;
