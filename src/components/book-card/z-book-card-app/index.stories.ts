import {Meta, StoryObj} from "@storybook/web-components";
import {html} from "lit";
import {ZBookCardApp} from ".";
import "../../z-button/index";
import "../../z-icon/index";
import "../../z-tag/index";
import "../z-book-card-app/index";
import "./index";

type ZBookCardAppStoriesArgs = ZBookCardApp;

const StoryMeta = {
  title: "ZBookCardApp",
  component: "z-book-card-app",
  argTypes: {},
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
  render: (args) =>
    html`<z-book-card-app
      logo=${args.logo}
      name=${args.name}
      laz=${args.laz}
      info=${args.info}
      link=${args.link}
    ></z-book-card-app>`,
} satisfies Story;
