import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {
  DividerSize,
  ExpandableListButtonAlign,
  ExpandableListStyle,
  ListDividerType,
  ListSize,
  ListType,
} from "../../../beans";
import {getColorTokens} from "../../../utils/storybook-utils";
import {ZListElement} from "./index";

const StoryMeta = {
  title: "ZList/ZListElement",
  component: ZListElement,
  argTypes: {
    alignButton: {
      control: {
        type: "inline-radio",
      },
      options: Object.values(ExpandableListButtonAlign),
    },
    dividerColor: {
      control: {
        type: "select",
      },
      options: getColorTokens().map((token) => token.replace("--", "")),
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
    expandableStyle: {
      control: {
        type: "inline-radio",
      },
      options: Object.values(ExpandableListStyle),
    },
    size: {
      control: {
        type: "inline-radio",
      },
      options: Object.values(ListSize),
    },
    color: {
      control: {
        type: "select",
      },
      options: getColorTokens().map((token) => token.replace("--", "")),
    },
    listType: {
      control: {
        type: "inline-radio",
      },
      options: Object.values(ListType),
    },
  },
  args: {
    alignButton: ExpandableListButtonAlign.LEFT,
    clickable: false,
    dividerColor: "color-surface03",
    dividerType: ListDividerType.NONE,
    dividerSize: DividerSize.SMALL,
    expandable: false,
    expandableStyle: ExpandableListStyle.ACCORDION,
    listElementId: 0,
    size: ListSize.MEDIUM,
    color: "color-default-text",
    disabled: true,
    listElementPosition: "0",
    listType: ListType.NONE,
  },
} satisfies Meta<ZListElement>;

export default StoryMeta;

export const Default = {
  render: (args) => (
    <z-list>
      <z-list-element
        alignButton={args.alignButton}
        clickable={args.clickable}
        dividerColor={args.dividerColor}
        dividerType={args.dividerType}
        dividerSize={args.dividerSize}
        expandable={args.expandable}
        expandableStyle={args.expandableStyle}
        listElementId={args.listElementId}
        size={args.size}
        color={args.color}
        disabled={args.disabled}
        listElementPosition={args.listElementPosition}
        listType={args.listType}
      >
        <span>Elemento 1</span>
        <span slot="inner-content">Inner content</span>
      </z-list-element>
      <z-list-element
        alignButton={args.alignButton}
        clickable={args.clickable}
        dividerColor={args.dividerColor}
        dividerType={args.dividerType}
        dividerSize={args.dividerSize}
        expandable={args.expandable}
        expandableStyle={args.expandableStyle}
        listElementId={args.listElementId}
        size={args.size}
        color={args.color}
        disabled={args.disabled}
        listElementPosition={args.listElementPosition}
        listType={args.listType}
      >
        Elemento 2
      </z-list-element>
      <z-list-element
        alignButton={args.alignButton}
        clickable={args.clickable}
        dividerColor={args.dividerColor}
        dividerType={args.dividerType}
        dividerSize={args.dividerSize}
        expandable={args.expandable}
        expandableStyle={args.expandableStyle}
        listElementId={args.listElementId}
        size={args.size}
        color={args.color}
        disabled={args.disabled}
        listElementPosition={args.listElementPosition}
        listType={args.listType}
      >
        Elemento 3
      </z-list-element>
    </z-list>
  ),
} satisfies StoryObj<ZListElement>;
