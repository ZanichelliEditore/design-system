import { html } from "lit";
import "./index";
const StoryMeta = {
    title: "ZMenu/ZMenuSection",
    component: "z-menu-section",
    args: {
        active: false,
    },
};
export default StoryMeta;
export const WithItems = {
    render: (args) => html `
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
};
export const WithoutItems = {
    render: (args) => html `
    <z-menu-section .active=${args.active}>
      <h3>Label</h3>
    </z-menu-section>
  `,
};
//# sourceMappingURL=index.stories.js.map
