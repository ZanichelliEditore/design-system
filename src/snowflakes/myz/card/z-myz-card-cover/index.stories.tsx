import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {ZMyzCardCover} from "./index";

const StoryMeta = {
  title: "Snowflakes/MyzCard/ZMyzCardCover",
  component: ZMyzCardCover,

  args: {
    defaultimg: "https://staticmy.zanichelli.it/catalogo/assets/m40001.9788808720740.jpg",
    faded: false,
    img: "https://staticmy.zanichelli.it/catalogo/assets/m40001.9788808720740.jpg",
    titolo: "Title",
  },
} satisfies Meta<ZMyzCardCover>;

export default StoryMeta;

export const Default = {
  render: (args) => (
    <z-myz-card-cover
      defaultimg={args.defaultimg}
      faded={args.faded}
      img={args.img}
      titolo={args.titolo}
    />
  ),
} satisfies StoryObj<ZMyzCardCover>;
