import {html} from "lit";

export default {
  title: "ZMenu/ZMenuSection",
  component: "z-menu-section",

  argTypes: {
    active: {
      type: "boolean",
    },
  },

  args: {
    active: false,
  },
};

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

  name: "With items",
};

export const WithoutItems = {
  render: (args) => html`
    <z-menu-section .active=${args.active}>
      <h3>Label</h3>
    </z-menu-section>
  `,

  name: "Without items",
};
