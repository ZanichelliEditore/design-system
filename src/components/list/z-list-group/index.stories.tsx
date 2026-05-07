import {h} from "@stencil/core";
import type {Meta} from "@stencil/storybook-plugin";
import {DividerSize, ListDividerType, ListSize, ListType} from "../../../beans";
import {getColorTokenArgConfig} from "../../../utils/storybook-utils";
import {ZListGroup} from "./index";

const StoryMeta = {
  title: "ZList/ZListGroup",
  component: ZListGroup,
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
    role: "group",
  },
} satisfies Meta<ZListGroup>;
export default StoryMeta;

export const Default = {
  render: (args) => (
    <z-list>
      <z-list-group
        size={args.size}
        dividerType={args.dividerType}
        dividerSize={args.dividerSize}
        dividerColor={args.dividerColor}
        listType={args.listType}
        role={args.role}
      >
        <div slot="header-title">Gruppo 1</div>
        <z-list-element
          size={args.size}
          listType={args.listType}
          dividerType={args.dividerType}
          dividerSize={args.dividerSize}
          dividerColor={args.dividerColor}
        >
          Elemento 1
        </z-list-element>
        <z-list-element
          size={args.size}
          listType={args.listType}
          dividerType={args.dividerType}
          dividerSize={args.dividerSize}
          dividerColor={args.dividerColor}
        >
          Elemento 2
        </z-list-element>
        <z-list-element
          size={args.size}
          listType={args.listType}
          dividerType={args.dividerType}
          dividerSize={args.dividerSize}
          dividerColor={args.dividerColor}
        >
          Elemento 3
        </z-list-element>
      </z-list-group>
      <z-list-group
        size={args.size}
        dividerType={args.dividerType}
        dividerSize={args.dividerSize}
        dividerColor={args.dividerColor}
        listType={args.listType}
        role={args.role}
      >
        <div slot="header-title">Gruppo 1</div>
        <z-list-element
          size={args.size}
          listType={args.listType}
          dividerType={args.dividerType}
          dividerSize={args.dividerSize}
          dividerColor={args.dividerColor}
        >
          Elemento 1
        </z-list-element>
        <z-list-element
          size={args.size}
          listType={args.listType}
          dividerType={args.dividerType}
          dividerSize={args.dividerSize}
          dividerColor={args.dividerColor}
        >
          Elemento 2
        </z-list-element>
        <z-list-element
          size={args.size}
          listType={args.listType}
          dividerType={args.dividerType}
          dividerSize={args.dividerSize}
          dividerColor={args.dividerColor}
        >
          Elemento 3
        </z-list-element>
      </z-list-group>
    </z-list>
  ),
};
