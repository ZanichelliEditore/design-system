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
import type {Components} from "../../../components";
import {getColorTokens} from "../../../utils/storybook-utils";
import {ZListElement} from "./index";

// Spread on <z-list-element {...args}> must match `LocalJSX.IntrinsicElements["z-list-element"] & HTMLAttributes`: when using `Meta<ZListElement>` (like for other stories),
// `args` includes class fields like `ariaDescendantFocus: EventEmitter<number>`, but HTML/aria attributes must be `string|boolean` values, so TS would reject the object.
type ZListElementMeta = Meta<Components.ZListElement>;

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
    disabled: false,
    listElementPosition: "0",
    listType: ListType.NONE,
  },
} satisfies ZListElementMeta;
export default StoryMeta;

export const Default = {
  render: (args) => (
    <z-list>
      <z-list-element {...args}>
        <span>Elemento 1</span>
        <span slot="inner-content">Inner content</span>
      </z-list-element>
      <z-list-element {...args}>Elemento 2</z-list-element>
      <z-list-element {...args}>Elemento 3</z-list-element>
    </z-list>
  ),
} satisfies StoryObj<Components.ZListElement>;
