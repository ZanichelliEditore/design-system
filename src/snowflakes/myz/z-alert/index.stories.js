import {html} from "lit";
import "./index";

export default {
  title: "Snowflakes/ZAlert",
  component: "z-alert",

  argTypes: {
    type: {
      control: {
        type: "select",
      },

      options: ["success", "warning", "error"],
    },
  },

  args: {
    type: "success",
  },
};

export const ZAlert = {
  render: (args) => html`
    <z-alert type="${args.type}">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.
    </z-alert>
  `,
};
