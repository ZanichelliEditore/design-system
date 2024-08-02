import {Meta, StoryObj} from "@storybook/web-components";
import {html} from "lit";
import {type ZMenuDeprecated} from ".";
import "../z-menu-section-deprecated/index";
import "./index";

const StoryMeta = {
  title: "Deprecated/ZMenuDeprecated",
  component: "z-menu",
  args: {
    active: false,
    floating: true,
    verticalContext: false,
  },
} satisfies Meta<ZMenuDeprecated>;

export default StoryMeta;

type Story = StoryObj<ZMenuDeprecated>;

export const FloatingContentLayout = {
  render: (args) => html`
    <z-menu-deprecated
      .active=${args.active}
      .floating=${args.floating}
      .verticalContext=${args.verticalContext}
    >
      <h3>Menu label</h3>
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
      <z-menu-section-deprecated slot="item">
        <h3>Item 3</h3>
        <a
          href=""
          slot="item"
          >Item 3.1</a
        >
        <a
          href=""
          slot="item"
          >Item 3.2</a
        >
      </z-menu-section-deprecated>
      <z-menu-section-deprecated slot="item">
        <h3>Item 4</h3>
        <a
          href=""
          slot="item"
          >Item 4.1</a
        >
        <a
          href=""
          slot="item"
          >Item 4.2</a
        >
      </z-menu-section-deprecated>
      <a
        href=""
        slot="item"
        >Item 5</a
      >
    </z-menu-deprecated>
  `,
} satisfies Story;

export const WithHeader = {
  render: (args) => html`
    <z-menu-deprecated
      .active=${args.active}
      .floating=${args.floating}
      .verticalContext=${args.verticalContext}
    >
      <img
        slot="header"
        src="https://i.pinimg.com/originals/b9/fc/7e/b9fc7e6b2dd2ca128bcc3412e68994f0.jpg"
      />
      <h4 slot="header">Menu header</h4>
      <h3>Menu label</h3>
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
      <z-menu-section-deprecated slot="item">
        <h3>Item 3</h3>
        <a
          href=""
          slot="item"
          >Item 3.1</a
        >
        <a
          href=""
          slot="item"
          >Item 3.2</a
        >
      </z-menu-section-deprecated>
      <a
        href=""
        slot="item"
        >Item 4</a
      >
    </z-menu-deprecated>
  `,
} satisfies Story;

export const ActiveWithoutItems = {
  parameters: {
    controls: {
      exclude: ["floating"],
    },
  },
  render: (args) => html`
    <z-menu-deprecated
      .active=${true}
      .verticalContext=${args.verticalContext}
    >
      <a
        href="https://cataas.com/cat/gif"
        target="_blank"
        >Click me</a
      >
    </z-menu-deprecated>
  `,
} satisfies Story;
