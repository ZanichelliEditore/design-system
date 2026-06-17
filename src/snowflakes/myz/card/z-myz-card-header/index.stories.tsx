import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {SfLicenseType} from "../../../../beans";
import {ZMyzCardHeader} from "./index";

const StoryMeta = {
  title: "Snowflakes/MyzCard/ZMyzCardHeader",
  component: ZMyzCardHeader,

  args: {
    cardtype: SfLicenseType.REAL,
    faded: false,
    titolo: "Card Header",
  },
} satisfies Meta<ZMyzCardHeader>;

export default StoryMeta;

export const Default = {
  render: (args) => (
    <z-myz-card-header
      cardtype={args.cardtype}
      faded={args.faded}
      titolo={args.titolo}
    />
  ),
} satisfies StoryObj<ZMyzCardHeader>;
