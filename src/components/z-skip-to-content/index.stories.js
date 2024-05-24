import {html} from "lit";
import {ThemeVariant} from "../../beans";

export default {
  title: "ZSkipToContent",
  component: "z-skip-to-content",
  argTypes: {
    variant: {
      options: Object.values(ThemeVariant),
      control: {
        type: "inline-radio",
      },
    },
    links: {
      control: "object",
    },
  },
};

export const ZSkipToContent = {
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
  render: (args) =>
    html`<z-skip-to-content
      variant=${args.variant}
      links=${JSON.stringify(args.links)}
    ></z-skip-to-content>`,
};
