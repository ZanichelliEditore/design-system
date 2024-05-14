import {html} from "lit";

export default {
  title: "Snowflakes/MyzCard/ZMyzCardFooter",
  component: "z-myz-card-footer",

  args: {
    autori: "Authors",
    cardtype: "reale",
    faded: false,
    isbn: "97-88-80-8620-710",
    titolo: "title",
    opened: false,
  },
};

export const ZMyzCardFooter = {
  render: (args) =>
    html`<z-myz-card-footer
      autori="${args.autori}"
      cardtype="${args.cardtype}"
      faded="${args.faded}"
      isbn="${args.isbn}"
      titolo="${args.titolo}"
      opened="${args.opened}"
    />`,

  name: "ZMyzCardFooter",
};
