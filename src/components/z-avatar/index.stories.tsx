import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {AvatarSize} from "../../beans";
import {getColorTokens} from "../../utils/storybook-utils";
import {ZAvatar} from "./index";

const colorTokens = getColorTokens().map((token) => token.replace("--", ""));

/**
 * Pass at least one prop between `text` and `image`.
 * If prop `image` contains a broken URL, the component will show `text` prop, if given.
 */
const StoryMeta = {
  title: "ZAvatar",
  component: ZAvatar,
  argTypes: {
    size: {
      options: Object.values(AvatarSize),
      control: {
        type: "inline-radio",
      },
    },
    textColor: {
      options: colorTokens,
      control: {
        type: "select",
      },
    },
    backgroundColor: {
      options: colorTokens,
      control: {
        type: "select",
      },
    },
  },
  args: {
    size: AvatarSize.MEDIUM,
    text: "Avatar",
    textColor: "color-white",
    backgroundColor: "gray700",
    image: "https://www.cinematographe.it/wp-content/uploads/2019/04/Avatar.jpg",
  },
} satisfies Meta<ZAvatar>;

export default StoryMeta;

export const Default = {
  render: (args) => (
    <z-avatar
      size={args.size}
      text={args.text}
      textColor={args.textColor}
      backgroundColor={args.backgroundColor}
      image={args.image}
    ></z-avatar>
  ),
} satisfies StoryObj<ZAvatar>;
