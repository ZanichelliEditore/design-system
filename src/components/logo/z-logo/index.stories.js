import {html} from "lit";
import "./index";

export default {
  title: "ZLogo",
  component: "z-logo",
  args: {
    imageAlt: "logo",
    height: 50,
    width: 200,
    link: "",
    targetBlank: false,
    mobileLogo: false,
  },
};

export const ZLogo = {
  render: (args) =>
    html`<z-logo
      image-alt="${args.imageAlt}"
      height="${args.height}"
      width="${args.width}"
      link="${args.link}"
      target-blank="${args.targetBlank}"
      mobile-logo="${args.mobileLogo}"
    ></z-logo>`,
};
