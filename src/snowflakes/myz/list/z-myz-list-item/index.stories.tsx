import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {ZMyzListItem} from "./index";

const StoryMeta = {
  title: "Snowflakes/List/ZMyzListItem",
  component: ZMyzListItem,
  args: {
    action: "10",
    icon: "cart",
    linktarget: "_blank",
    link: "www.zanichelli.it",
    underlined: true,
  },
} satisfies Meta<ZMyzListItem>;

export default StoryMeta;

export const Default = {
  render: (args) => (
    <z-myz-list-item
      action={args.action}
      icon={args.icon}
      linktarget={args.linktarget}
      link={args.link}
      underlined={args.underlined}
    >
      ITEM 1
    </z-myz-list-item>
  ),
} satisfies StoryObj<ZMyzListItem>;
