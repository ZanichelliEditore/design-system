import { html } from "lit";
import "./index";
const StoryMeta = {
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
export default StoryMeta;
export const Default = {
    render: (args) => html `<z-logo
      image-alt="${args.imageAlt}"
      height="${args.height}"
      width="${args.width}"
      link="${args.link}"
      target-blank="${args.targetBlank}"
      mobile-logo="${args.mobileLogo}"
    ></z-logo>`,
};
//# sourceMappingURL=index.stories.js.map
