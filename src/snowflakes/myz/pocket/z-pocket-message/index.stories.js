import {html} from "lit";
import "../../../../components/z-button/index";
import "./index";

export default {
  title: "Snowflakes/Pocket/ZPocketMessage",
  component: "z-message",
};

export const ZPocketMessage = {
  render: () =>
    html`<z-pocket-message>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </z-pocket-message>`,
};

export const ZPocketMessageCta = {
  render: () =>
    html`<z-pocket-message>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.
      <z-button
        variant="tertiary"
        slot="cta"
        >First slotted CTA</z-button
      >
      <z-button
        variant="tertiary"
        slot="cta"
        >Second slotted CTA</z-button
      >
    </z-pocket-message>`,
};
