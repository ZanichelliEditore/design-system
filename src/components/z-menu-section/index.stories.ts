import {Meta, StoryObj} from "@storybook/web-components";
import {html} from "lit";
import {type ZMenuSection} from ".";
import "./index";

const StoryMeta = {
  title: "ZMenu/ZMenuSection",
  component: "z-menu-section",
  args: {
    active: false,
  },
} satisfies Meta<ZMenuSection>;

export default StoryMeta;

type Story = StoryObj<ZMenuSection>;

export const WithItems = {
  render: (args) => html`
    <z-menu-section .active=${args.active}>
      <h3>Label</h3>
      <a
        href=""
        slot="item"
        >Item 1</a
      >
      <a
        href=""
        slot="item"
        >Item 2</a
      >
      <a
        href=""
        slot="item"
        active
        >Item 3 - active</a
      >
    </z-menu-section>
  `,
} satisfies Story;

export const WithoutItems = {
  render: (args) => html`
    <z-menu-section .active=${args.active}>
      <h3>Label</h3>
    </z-menu-section>
  `,
} satisfies Story;
