import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {ZSectionTitleDividerPosition} from "../../../beans";
import {CSSVarsArguments, getColorTokenArgConfig} from "../../../utils/storybook-utils";
import {ZSectionTitle} from "./index";

type ZSectionTitleStoriesArgs = ZSectionTitle & CSSVarsArguments<"z-section-title--divider-color">;

/**
 * ⚠️ This component is **deprecated** and will be removed soon.
 * Use the typography tokens or classes instead (see `Typography/Typography classes` section).
 */
const StoryMeta = {
  title: "Deprecated/ZSectionTitle",
  component: ZSectionTitle,
  argTypes: {
    "dividerPosition": {
      options: Object.values(ZSectionTitleDividerPosition),
      control: {
        type: "inline-radio",
      },
    },
    "--z-section-title--divider-color": getColorTokenArgConfig(),
  },
  args: {
    "uppercase": true,
    "--z-section-title--divider-color": "var(--red500)",
  },
} satisfies Meta<ZSectionTitleStoriesArgs>;

export default StoryMeta;

type Story = StoryObj<ZSectionTitleStoriesArgs>;

export const PrimaryTitleOnly = {
  args: {
    dividerPosition: ZSectionTitleDividerPosition.BEFORE,
  },
  render: (args) => (
    <z-section-title
      dividerPosition={args.dividerPosition}
      uppercase={args.uppercase}
      style={{"--z-section-title--divider-color": args["--z-section-title--divider-color"]}}
    >
      <h4 slot="primary-title">Primary title</h4>
    </z-section-title>
  ),
} satisfies Story;

export const SecondaryTitle = {
  parameters: {
    controls: {
      exclude: ["dividerPosition"],
    },
  },
  render: (args) => (
    <z-section-title
      uppercase={args.uppercase}
      style={{"--z-section-title--divider-color": args["--z-section-title--divider-color"]}}
    >
      <h5 slot="secondary-title">Secondary title</h5>
      <h4 slot="primary-title">Primary title</h4>
    </z-section-title>
  ),
} satisfies Story;
