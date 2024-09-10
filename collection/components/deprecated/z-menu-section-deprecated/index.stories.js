import { html } from "lit";
import "./index";
const StoryMeta = {
    title: "Deprecated/ZMenuSection",
    component: "z-menu-section-deprecated",
    args: {
        active: false,
    },
};
export default StoryMeta;
export const WithItems = {
    render: (args) => html `
    <z-menu-section-deprecated .active=${args.active}>
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
    </z-menu-section-deprecated>
  `,
};
export const WithoutItems = {
    render: (args) => html `
    <z-menu-section-deprecated .active=${args.active}>
      <h3>Label</h3>
    </z-menu-section-deprecated>
  `,
};
//# sourceMappingURL=index.stories.js.map
