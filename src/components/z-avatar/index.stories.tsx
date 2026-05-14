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
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/16627900db04b76fae3b64266ca161511422059cd24062fb5d900971003a0b70._SX1080_FMjpg_.jpg",
  },
} satisfies Meta<ZAvatar>;

export default StoryMeta;

export const Default = {
  render: (args) => <z-avatar {...args}></z-avatar>,
} satisfies StoryObj<ZAvatar>;
