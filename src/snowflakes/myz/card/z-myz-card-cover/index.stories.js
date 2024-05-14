import {html} from "lit";

export default {
  title: "Snowflakes/MyzCard/ZMyzCardCover",
  component: "z-myz-card-cover",

  args: {
    defaultimg: "https://staticmy.zanichelli.it/catalogo/assets/m40001.9788808720740.jpg",
    faded: false,
    img: "https://staticmy.zanichelli.it/catalogo/assets/m40001.9788808720740.jpg",
    titolo: "Title",
  },
};

export const ZMyzCardCover = {
  render: (args) =>
    html`<z-myz-card-cover
      defaultimg=${args.defaultimg}
      faded=${args.faded}
      img=${args.img}
      titolo=${args.titolo}
    />`,

  name: "ZMyzCardCover",
};
