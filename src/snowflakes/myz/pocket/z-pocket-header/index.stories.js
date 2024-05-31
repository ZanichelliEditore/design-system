import {html} from "lit";
import "./index";

export default {
  title: "Snowflakes/Pocket/ZPocketHeader",
  component: "z-pocket-header",

  args: {
    pocketid: "my-pocket",
  },
};

export const ZPocketHeader = {
  render: (args) => html`<z-pocket-header pocketid="${args.pocketid}"> ZPocketHeader Content </z-pocket-header>`,
};
