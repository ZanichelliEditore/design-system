import {Meta} from "@storybook/web-components";
import {html} from "lit";
import {styleMap} from "lit/directives/style-map.js";
import {type ZTag} from ".";
import {ICONS} from "../../constants/iconset";
import {CSSVarsArguments, getColorTokenArgConfig} from "../../utils/storybook-utils";
import "./index";

type ZTagStoriesArgs = ZTag & CSSVarsArguments<"z-tag-text-color" | "z-tag-bg"> & {text: string};

const StoryMeta = {
  title: "ZTag",
  component: "z-tag",
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
} satisfies Meta<ZTagStoriesArgs>;

export default StoryMeta;

export const Default = {
  render: (args) =>
    html`<z-tag
      icon=${args.icon}
      expandable=${args.expandable}
      >${args.text}
    </z-tag>`,
};

export const ColorTokens = {
  args: {
    "--z-tag-text-color": null,
    "--z-tag-bg": null,
  },
  render: (args) =>
    html`<z-tag
      style=${styleMap({
        "--z-tag-text-color": args["--z-tag-text-color"],
        "--z-tag-bg": args["--z-tag-bg"],
      })}
      .icon=${args.icon}
      .expandable=${args.expandable}
      >${args.text}
    </z-tag>`,
};

export const LongText = {
  args: {
    "text": "In progress testo lungo molto lungo lungo lungo lungo lungolungo lungolungo",
    "--z-tag-text-color": null,
    "--z-tag-bg": null,
  },
  render: (args) =>
    html`<z-tag
      style=${styleMap({
        "--z-tag-text-color": args["--z-tag-text-color"],
        "--z-tag-bg": args["--z-tag-bg"],
      })}
      .icon=${args.icon}
      .expandable=${args.expandable}
      >${args.text}
    </z-tag>`,
};
