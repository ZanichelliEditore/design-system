import {Meta, StoryObj} from "@storybook/web-components";
import {html} from "lit";
import {styleMap} from "lit/directives/style-map.js";
import {ZBookCardApp} from ".";
import {CSSVarsArguments} from "../../../utils/storybook-utils";
import "../../z-button/index";
import "../../z-icon/index";
import "../../z-tag/index";
import "../z-book-card-app/index";
import "./index";

type ZBookCardAppStoriesArgs = ZBookCardApp &
  CSSVarsArguments<"z-book-card-app-padding-x" | "z-book-card-app-padding-y">;

const StoryMeta = {
  title: "ZBookCard/ZBookCardApp",
  component: "z-book-card-app",
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
  render: (args) =>
    html`<z-book-card-app
      logo=${args.logo}
      name=${args.name}
      laz=${args.laz}
      info=${args.info}
      link=${args.link}
      style=${styleMap({
        "--z-book-card-app-padding-x": args["--z-book-card-app-padding-x"],
        "--z-book-card-app-padding-y": args["--z-book-card-app-padding-y"],
      })}
    ></z-book-card-app>`,
} satisfies Story;
