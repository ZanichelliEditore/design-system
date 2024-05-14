import {html} from "lit";
import {InputStatus, ControlSize} from "../../../beans";

export default {
  title: "ZInputMessage",
  component: "z-input-message",

  argTypes: {
    message: {
      control: {
        type: "text",
      },
    },

    status: {
      control: {
        type: "inline-radio",
      },

      options: ["default", ...Object.values(InputStatus)],
    },

    ariaLabel: {
      control: {
        type: "text",
      },
    },

    class: {
      control: {
        type: "inline-radio",
      },

      options: Object.values(ControlSize),
    },
  },

  args: {
    message: "messaggio",
    status: InputStatus.ERROR,
    ariaLabel: "",
    class: ControlSize.BIG,
  },
};

export const ZInputMessage = {
  render: (args) => html`
    <z-input-message
      message=${args.message}
      status=${args.status}
      aria-label=${args.ariaLabel}
      class=${args.class}
    ></z-input-message>
  `,

  name: "ZInputMessage",
};
