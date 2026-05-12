import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {CSSVarsArguments, extractCSSVars} from "../../../utils/storybook-utils";
import {ZBookCardApp} from "./index";

type ZBookCardAppStoriesArgs = ZBookCardApp &
  CSSVarsArguments<"z-book-card-app-padding-x" | "z-book-card-app-padding-y">;

const StoryMeta = {
  title: "ZBookCard/ZBookCardApp",
  component: ZBookCardApp,
  args: {
    "logo": "https://placehold.co/24",
    "name": "Esercizi",
    "laz": true,
    "info": "Cosa fa l'applicazione?",
    "link": "link-applicazione",
    "--z-book-card-app-padding-x": "",
    "--z-book-card-app-padding-y": "",
  },
} satisfies Meta<ZBookCardAppStoriesArgs>;

export default StoryMeta;

type Story = StoryObj<ZBookCardAppStoriesArgs>;

export const Default = {
  render: (args) => (
    <z-book-card-app
      {...args}
      style={extractCSSVars(args)}
    ></z-book-card-app>
  ),
} satisfies Story;
