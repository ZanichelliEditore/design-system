import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {ThemeVariant} from "../../beans";
import {ZSkipToContent} from "./index";

const StoryMeta = {
  title: "ZSkipToContent",
  component: ZSkipToContent,
  argTypes: {
    variant: {
      options: Object.values(ThemeVariant),
      control: {
        type: "inline-radio",
      },
    },
  },
} satisfies Meta<ZSkipToContent>;

export default StoryMeta;

export const Default = {
  args: {
    variant: ThemeVariant.LIGHT,
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
  render: (args) => (
    <z-skip-to-content
      variant={args.variant}
      links={args.links}
    ></z-skip-to-content>
  ),
} satisfies StoryObj<ZSkipToContent>;
