import {h} from "@stencil/core";
import {Fragment} from "@stencil/core/internal";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {ListSize, ListType} from "../../../beans";
import {ZListElement} from "../z-list-element/index";
import {ZListGroup} from "../z-list-group/index";
import {ZList} from "./index";

const renderListElements = (args, clickable = false) => {
  return (
    <Fragment>
      {[1, 2, 3].map((i) => (
        <z-list-element
          {...args}
          clickable={clickable}
        >
          Elemento {i}
        </z-list-element>
      ))}
    </Fragment>
  );
};

const StoryMeta = {
  title: "ZList/ZList",
  component: ZList,
  subcomponents: {
    ZListElement,
    ZListGroup,
  },
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
  render: (args) => <z-list {...args}>{renderListElements(args)}</z-list>,
} satisfies Meta<ZList>;

export default StoryMeta;

type Story = StoryObj<ZList>;

export const Default = {} satisfies Story;

export const HeaderDivider = {
  render: (args) => (
    <z-list>
      <z-list-group divider-type="header">
        <div slot="header-title">Gruppo 1</div>
        {renderListElements(args)}
      </z-list-group>
      <z-list-group divider-type="header">
        <div slot="header-title">Gruppo 2</div>
        {renderListElements(args)}
      </z-list-group>
    </z-list>
  ),
} satisfies Story;

export const ElementDivider = {
  render: (args) => (
    <z-list>
      <z-list-group divider-type="element">
        <div slot="header-title">Gruppo 1</div>
        {renderListElements(args)}
      </z-list-group>
      <z-list-group divider-type="element">
        <div slot="header-title">Gruppo 2</div>
        {renderListElements(args)}
      </z-list-group>
    </z-list>
  ),
} satisfies Story;

export const ClickableElements = {
  render: () => (
    <z-list>
      <z-list-group>{renderListElements({}, true)}</z-list-group>
    </z-list>
  ),
} satisfies Story;

export const ExpandableElements = {
  render: () => (
    <z-list size={ListSize.LARGE}>
      <z-list-group divider-type="element">
        <z-list-element
          expandable
          align-button="left"
          expandable-style="accordion"
        >
          <span>Elemento 1</span>
          <span slot="inner-content">INNER CONTENT 1 BUTTON LEFT</span>
        </z-list-element>
        <z-list-element
          expandable
          align-button="right"
          expandable-style="menu"
        >
          <span>Elemento 2</span>
          <span slot="inner-content">INNER CONTENT 2</span>
        </z-list-element>
        <z-list-element
          expandable
          align-button="right"
          expandable-style="menu"
        >
          <span>Elemento 3</span>
          <span slot="inner-content">INNER CONTENT 3</span>
        </z-list-element>
      </z-list-group>
    </z-list>
  ),
} satisfies Story;

export const UnorderedIndex = {
  parameters: {
    controls: {
      exclude: ["size", "list-type"],
    },
  },
  args: {
    listType: ListType.UNORDERED,
  },
} satisfies Story;

export const OrderedIndex = {
  parameters: {
    controls: {
      exclude: ["size", "list-type"],
    },
  },
  args: {
    listType: ListType.ORDERED,
  },
} satisfies Story;
