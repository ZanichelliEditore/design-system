import {html} from "lit";

export default {
  title: "ZMenu/ZMenu",
  component: "z-menu",

  argTypes: {
    active: {
      type: "boolean",
    },

    floating: {
      type: "boolean",
    },

    verticalContext: {
      type: "boolean",
    },
  },

  args: {
    active: false,
    floating: true,
    verticalContext: false,
  },
};

export const ZMenuFloatingContentLayout = {
  render: (args) => html`
    <z-menu
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
      <z-menu-section slot="item">
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
      </z-menu-section>
      <z-menu-section slot="item">
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
      </z-menu-section>
      <a
        href=""
        slot="item"
        >Item 5</a
      >
    </z-menu>
  `,

  name: "ZMenu - floating content layout",
};

export const ZMenuWithHeader = {
  render: (args) => html`
    <z-menu
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
      <z-menu-section slot="item">
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
      </z-menu-section>
      <a
        href=""
        slot="item"
        >Item 4</a
      >
    </z-menu>
  `,

  name: "ZMenu with header",
};

export const ZMenuActiveWithoutItems = {
  render: (args) => html`
    <z-menu
      .active=${args.active}
      .verticalContext=${args.verticalContext}
    >
      <a
        href="https://cataas.com/cat/gif"
        target="_blank"
        >Click me</a
      >
    </z-menu>
  `,

  name: "ZMenu active without items",

  argTypes: {
    floating: {
      control: false,
    },
  },

  args: {
    active: true,
  },
};
