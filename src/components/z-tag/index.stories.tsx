import {h} from "@stencil/core";
import type {Meta} from "@stencil/storybook-plugin";
import {ICONS} from "../../constants/iconset";
import {CSSVarsArguments, extractCSSVars, getColorTokenArgConfig} from "../../utils/storybook-utils";
import {ZTag} from "./index";

type ZTagStoriesArgs = ZTag & CSSVarsArguments<"z-tag-text-color" | "z-tag-bg"> & {text: string};

const StoryMeta = {
  title: "ZTag",
  component: ZTag,
  argTypes: {
    "icon": {
      control: {
        type: "select",
      },
      options: Object.keys(ICONS).sort(),
    },
    "--z-tag-text-color": getColorTokenArgConfig(),
    "--z-tag-bg": getColorTokenArgConfig(),
  },
  args: {
    text: "In progress",
    expandable: false,
    icon: "gear",
  },
  render: (args) => (
    <z-tag
      {...args}
      style={extractCSSVars(args)}
    >
      {args.text}
    </z-tag>
  ),
} satisfies Meta<ZTagStoriesArgs>;

export default StoryMeta;

export const Default = {};

export const ColorTokens = {
  args: {
    "--z-tag-text-color": "var(--color-text-inverse)",
    "--z-tag-bg": "var(--avatar-C17)",
  },
};

export const LongText = {
  args: {
    "text": "In progress testo lungo molto lungo lungo lungo lungo lungolungo lungolungo",
    "--z-tag-text-color": null,
    "--z-tag-bg": null,
  },
};
