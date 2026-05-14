import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {ZMyzCardFooterSections} from "./index";

const StoryMeta = {
  title: "Snowflakes/MyzCard/ZMyzCardFooterSections",
  component: ZMyzCardFooterSections,
} satisfies Meta<ZMyzCardFooterSections>;

export default StoryMeta;

export const Default = {
  render: () => (
    <z-myz-card-footer-sections>
      <span slot="top">Top footer content</span>
      <span slot="bottom">Bottom footer content</span>
    </z-myz-card-footer-sections>
  ),
} satisfies StoryObj<ZMyzCardFooterSections>;
