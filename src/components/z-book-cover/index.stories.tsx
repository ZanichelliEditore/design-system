import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {CSSVarsArguments} from "../../utils/storybook-utils";
import {ZBookCover} from "./index";

type ZBookCoverStoriesArgs = ZBookCover &
  CSSVarsArguments<
    | "--z-book-cover-height"
    | "--z-book-cover-border-radius"
    | "--z-book-cover-stack-shift-x"
    | "--z-book-cover-stack-shift-y"
  >;

const StoryMeta = {
  title: "ZBookCover",
  component: ZBookCover,
  args: {
    "cover": "https://staticmy.zanichelli.it/copertine/dashboard/m40002.9788808999825.jpg",
    "bordered": false,
    "multiple": false,
    "--z-book-cover-height": "378px",
    "--z-book-cover-border-radius": "var(--border-radius)",
    "--z-book-cover-stack-shift-x": "8px",
    "--z-book-cover-stack-shift-y": "12px",
  },
} satisfies Meta<ZBookCoverStoriesArgs>;

export default StoryMeta;

type Story = StoryObj<ZBookCoverStoriesArgs>;

export const Default = {
  render: (args) => (
    <z-book-cover
      cover={args.cover}
      bordered={args.bordered}
      multiple={args.multiple}
      style={{
        "--z-book-cover-height": args["--z-book-cover-height"],
        "--z-book-cover-border-radius": args["--z-book-cover-border-radius"],
        "--z-book-cover-stack-shift-x": args["--z-book-cover-stack-shift-x"],
        "--z-book-cover-stack-shift-y": args["--z-book-cover-stack-shift-y"],
      }}
    ></z-book-cover>
  ),
} satisfies Story;
