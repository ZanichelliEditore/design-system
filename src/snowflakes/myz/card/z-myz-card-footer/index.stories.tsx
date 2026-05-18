import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {LicenseType} from "../../../../beans";
import {ZMyzCardFooter} from "./index";

const StoryMeta = {
  title: "Snowflakes/MyzCard/ZMyzCardFooter",
  component: ZMyzCardFooter,
  args: {
    autori: "Authors",
    cardtype: LicenseType.REAL,
    faded: false,
    isbn: "97-88-80-8620-710",
    titolo: "title",
    opened: false,
  },
} satisfies Meta<ZMyzCardFooter>;

export default StoryMeta;

export const Default = {
  render: (args) => (
    <z-myz-card-footer
      autori={args.autori}
      cardtype={args.cardtype}
      faded={args.faded}
      isbn={args.isbn}
      titolo={args.titolo}
      opened={args.opened}
    />
  ),
} satisfies StoryObj<ZMyzCardFooter>;
