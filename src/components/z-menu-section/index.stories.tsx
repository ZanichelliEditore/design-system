import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {ZMenuSection} from "./index";

const StoryMeta = {
  title: "ZMenu/ZMenuSection",
  component: ZMenuSection,
  args: {
    active: false,
  },
} satisfies Meta<ZMenuSection>;

export default StoryMeta;

type Story = StoryObj<ZMenuSection>;

export const WithItems = {
  render: (args) => (
    <z-menu-section {...args}>
      <h3>Label</h3>
      <a
        href=""
        slot="section"
      >
        Item 1
      </a>
      <a
        href=""
        slot="section"
      >
        Item 2
      </a>
      <a
        href=""
        slot="section"
        //@ts-expect-error - active is not typed as a valid prop for the anchor element, but it is supported by the component
        active={true}
      >
        Item 3 - active
      </a>
    </z-menu-section>
  ),
} satisfies Story;

export const WithoutItems = {
  render: (args) => (
    <z-menu-section {...args}>
      <h3>Label</h3>
    </z-menu-section>
  ),
} satisfies Story;
