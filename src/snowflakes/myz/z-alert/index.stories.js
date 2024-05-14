import {html} from "lit";

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

export const ZAlertSample = {
  render: (args) => html`
    <z-alert type="${args.type}">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.
    </z-alert>
  `,

  name: "ZAlert-sample",
};
