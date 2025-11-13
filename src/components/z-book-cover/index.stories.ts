import type {Meta, StoryObj} from "@storybook/web-components";
import {html} from "lit";
import {styleMap} from "lit/directives/style-map.js";
import {type ZBookCover} from ".";
import {CSSVarsArguments} from "../../utils/storybook-utils";
import "./index";

type ZBookCoverStoriesArgs = ZBookCover &
  CSSVarsArguments<
    | "--z-book-cover-width"
    | "--z-book-cover-height"
    | "--z-book-cover-border-radius"
    | "--z-book-cover-stack-offset-x"
    | "--z-book-cover-stack-offset-y"
    | "--z-book-cover-vertical-alignment"
    | "--z-book-cover-horizontal-alignment"
  >;

const StoryMeta = {
  title: "ZBookCover",
  component: "z-book-cover",
  args: {
    "cover": "https://staticmy.zanichelli.it/catalogo/assets/m40001.9788808490056.jpg",
    "bordered": false,
    "multiple": false,
    "--z-book-cover-width": "288px",
    "--z-book-cover-height": "378px",
    "--z-book-cover-border-radius": "var(--border-radius)",
    "--z-book-cover-stack-offset-x": "8px",
    "--z-book-cover-stack-offset-y": "12px",
    "--z-book-cover-vertical-alignment": "start",
    "--z-book-cover-horizontal-alignment": "start",
  },
} satisfies Meta<ZBookCoverStoriesArgs>;

export default StoryMeta;

type Story = StoryObj<ZBookCoverStoriesArgs>;

export const Default = {
  render: (args) =>
    html`<z-book-cover
      cover=${args.cover}
      .bordered=${args.bordered}
      .multiple=${args.multiple}
      style=${styleMap({
        "--z-book-cover-width": args["--z-book-cover-width"],
        "--z-book-cover-height": args["--z-book-cover-height"],
        "--z-book-cover-border-radius": args["--z-book-cover-border-radius"],
        "--z-book-cover-stack-offset-x": args["--z-book-cover-stack-offset-x"],
        "--z-book-cover-stack-offset-y": args["--z-book-cover-stack-offset-y"],
        "--z-book-cover-vertical-alignment": args["--z-book-cover-vertical-alignment"],
        "--z-book-cover-horizontal-alignment": args["--z-book-cover-horizontal-alignment"],
      })}
    ></z-book-cover>`,
} satisfies Story;
