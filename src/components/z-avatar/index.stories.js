import {html} from "lit";

import {AvatarSize} from "../../beans";
import {getColorTokens} from "../../utils/storybook-utils";

export default {
  title: "ZAvatar",
  component: "z-avatar",

  argTypes: {
    size: {
      control: {
        type: "select",
      },

      options: Object.values(AvatarSize),
    },

    textColor: {
      control: {
        type: "select",
      },

      options: getColorTokens().map((token) => token.replace("--", "")),
    },

    backgroundColor: {
      control: {
        type: "select",
      },

      options: getColorTokens().map((token) => token.replace("--", "")),
    },
  },

  args: {
    size: AvatarSize.MEDIUM,
    text: "Avatar",
    textColor: "color-white",
    backgroundColor: "gray700",
    image: "https://www.cinematographe.it/wp-content/uploads/2019/04/Avatar.jpg",
  },
};

export const ZAvatar = {
  render: (args) =>
    html`<z-avatar
      size="${args.size}"
      text="${args.text}"
      text-color="${args.textColor}"
      background-color="${args.backgroundColor}"
      image="${args.image}"
    ></z-avatar>`,

  name: "ZAvatar",
};
