import {h} from "@stencil/core";
import type {Meta} from "@stencil/storybook-plugin";
import {ZInfoBox} from "./index";

const StoryMeta = {
  title: "ZInfoBox",
  component: ZInfoBox,
  args: {
    isclosable: true,
  },
} satisfies Meta<ZInfoBox>;
export default StoryMeta;

export const Default = {
  render: (args) => (
    <z-info-box isclosable={args.isclosable}>
      <span slot="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum convallis ex, eu faucibus velit
        dignissim in. Quisque at risus accumsan, auctor enim a, varius tortor. Donec egestas sodales mi at imperdiet.
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </span>
    </z-info-box>
  ),
};
