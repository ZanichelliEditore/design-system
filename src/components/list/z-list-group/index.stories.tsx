import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {DividerSize, ListDividerType, ListSize, ListType} from "../../../beans";
import {getColorTokenArgConfig} from "../../../utils/storybook-utils";
import type {ZListGroup} from "./index";

const StoryMeta = {
  title: "ZList/ZListGroup",
  component: "z-list-group",
  argTypes: {
    size: {
      control: {
        type: "inline-radio",
      },
      options: Object.values(ListSize),
    },
    dividerType: {
      control: {
        type: "inline-radio",
      },
      options: Object.values(ListDividerType),
    },
    dividerSize: {
      control: {
        type: "inline-radio",
      },
      options: Object.values(DividerSize),
    },
    dividerColor: getColorTokenArgConfig(),
    listType: {
      control: {
        type: "inline-radio",
      },
      options: Object.values(ListType),
    },
  },
  args: {
    size: ListSize.SMALL,
    dividerType: ListDividerType.HEADER,
    dividerSize: DividerSize.SMALL,
    dividerColor: "gray200",
    listType: ListType.NONE,
  },
} satisfies Meta<ZListGroup>;

export default StoryMeta;

type Story = StoryObj<ZListGroup>;

export const Default = {
  render: (args) => (
    <z-list>
      <z-list-group {...args}>
        <div slot="header-title">Gruppo 1</div>
        <z-list-element {...args}>Elemento 1</z-list-element>
        <z-list-element {...args}>Elemento 2</z-list-element>
        <z-list-element {...args}>Elemento 3</z-list-element>
      </z-list-group>
      <z-list-group {...args}>
        <div slot="header-title">Gruppo 2</div>
        <z-list-element {...args}>Elemento 1</z-list-element>
        <z-list-element {...args}>Elemento 2</z-list-element>
        <z-list-element {...args}>Elemento 3</z-list-element>
      </z-list-group>
    </z-list>
  ),
} satisfies Story;
