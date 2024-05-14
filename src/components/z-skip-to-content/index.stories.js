import {html} from "lit";
import {ThemeVariant, linkItem} from "../../beans";

export default {
  title: "ZSkipToContent",
  component: "z-skip-to-content",

  argTypes: {
    variant: {
      options: ["default", "dark", "light"],

      control: {
        type: "radio",
      },
    },

    links: {
      control: "object",
    },
  },
};

export const ZSkipToContentSample = {
  render: (args) =>
    html`<z-skip-to-content
      variant=${args.variant}
      links=${JSON.stringify(args.links)}
    ></z-skip-to-content>`,

  name: "ZSkipToContent-sample",

  args: {
    variant: "default",

    links: [
      {
        ariaLabel: "prova",
        label: "vai al link1",
        href: "#link1",
      },
      {
        label: "vai al link2",
        href: "#link2",
      },
      {
        label: "vai al link3",
        href: "#link3",
      },
    ],
  },
};
