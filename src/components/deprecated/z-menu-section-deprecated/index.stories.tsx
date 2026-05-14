import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {ZMenuSectionDeprecated} from "./index";

const StoryMeta = {
  title: "Deprecated/ZMenuSection",
  component: ZMenuSectionDeprecated,
  args: {
    active: false,
  },
} satisfies Meta<ZMenuSectionDeprecated>;

export default StoryMeta;

type Story = StoryObj<ZMenuSectionDeprecated>;

export const WithItems = {
  render: (args) => (
    <z-menu-section-deprecated active={args.active}>
      <h3>Label</h3>
      <a
        href=""
        slot="item"
      >
        Item 1
      </a>
      <a
        href=""
        slot="item"
      >
        Item 2
      </a>
      <a
        href=""
        slot="item"
        //@ts-expect-error - active is not typed as a valid prop for the anchor element, but it is supported by the component
        active={true}
      >
        Item 3 - active
      </a>
    </z-menu-section-deprecated>
  ),
} satisfies Story;

export const WithoutItems = {
  render: (args) => (
    <z-menu-section-deprecated active={args.active}>
      <h3>Label</h3>
    </z-menu-section-deprecated>
  ),
} satisfies Story;
