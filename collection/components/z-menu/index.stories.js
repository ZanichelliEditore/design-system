import { html } from "lit";
import "../z-menu-section/index";
import "./index";
const StoryMeta = {
    title: "Zmenu/ZMenu",
    component: "z-menu",
    args: {
        active: false,
        floating: true,
        verticalContext: false,
    },
};
export default StoryMeta;
export const FloatingContentLayout = {
    render: (args) => html `
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
          slot="section"
          >Item 3.1</a
        >
        <a
          href=""
          slot="section"
          >Item 3.2</a
        >
      </z-menu-section>
      <z-menu-section slot="item">
        <h3>Item 4</h3>
        <a
          href=""
          slot="section"
          >Item 4.1</a
        >
        <a
          href=""
          slot="section"
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
};
export const WithHeader = {
    render: (args) => html `
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
          slot="section"
          >Item 3.1</a
        >
        <a
          href=""
          slot="section"
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
};
export const ActiveWithoutItems = {
    parameters: {
        controls: {
            exclude: ["floating"],
        },
    },
    render: (args) => html `
    <z-menu
      .active=${true}
      .verticalContext=${args.verticalContext}
    >
      <a
        href="https://cataas.com/cat/gif"
        target="_blank"
        >Click me</a
      >
    </z-menu>
  `,
};
//# sourceMappingURL=index.stories.js.map
