import {html} from "lit";

export default {
  title: "Snowflakes/ZOtp",
  component: "z-otp",

  argTypes: {
    status: {
      control: {
        type: "select",
      },

      options: ["", "error"],
    },
  },

  args: {
    inputNum: 6,
    status: "",
    message: "",
  },
};

export const ZOtpSample = {
  render: (args) =>
    html`<z-otp
      .inputNum=${args.inputNum}
      .status=${args.status}
      .message=${args.message}
    ></z-otp>`,

  name: "ZOtp-sample",
};
