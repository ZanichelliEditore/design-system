import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {CSSVarsArguments} from "../../../utils/storybook-utils";
import {ZBookCardApp} from "./index";

type ZBookCardAppStoriesArgs = ZBookCardApp &
  CSSVarsArguments<"z-book-card-app-padding-x" | "z-book-card-app-padding-y">;

const StoryMeta = {
  title: "ZBookCard/ZBookCardApp",
  component: ZBookCardApp,
  argTypes: {
    "--z-book-card-app-padding-x": {control: {type: "text"}},
    "--z-book-card-app-padding-y": {control: {type: "text"}},
  },
  args: {
    logo: "https://placehold.co/24",
    name: "Esercizi",
    laz: true,
    info: "Cosa fa l'applicazione?",
    link: "link-applicazione",
  },
} satisfies Meta<ZBookCardAppStoriesArgs>;

export default StoryMeta;

type Story = StoryObj<ZBookCardAppStoriesArgs>;

export const CardApp = {
  args: {
    "--z-book-card-app-padding-x": null,
    "--z-book-card-app-padding-y": null,
  },
  render: (args) => (
    <z-book-card-app
      logo={args.logo}
      name={args.name}
      laz={args.laz}
      info={args.info}
      link={args.link}
      style={{
        "--z-book-card-app-padding-x": args["--z-book-card-app-padding-x"],
        "--z-book-card-app-padding-y": args["--z-book-card-app-padding-y"],
      }}
    ></z-book-card-app>
  ),
} satisfies Story;
