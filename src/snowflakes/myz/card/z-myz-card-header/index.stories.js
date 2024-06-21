import {html} from "lit";
import "./index";

export default {
  title: "Snowflakes/MyzCard/ZMyzCardHeader",
  component: "z-myz-card-header",

  args: {
    cardtype: "reale",
    faded: false,
    titolo: "Card Header",
  },
};

export const ZMyzCardHeader = {
  render: (args) =>
    html` <z-myz-card-header
      cardtype="${args.cardtype}"
      faded="${args.faded}"
      titolo="${args.titolo}"
    />`,
};
