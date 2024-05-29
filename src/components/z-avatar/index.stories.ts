import {html} from "lit";
import {AvatarSize} from "../../beans";
import {getColorTokens} from "../../utils/storybook-utils";
import {Meta, StoryObj} from "@storybook/web-components";
import {ZAvatar} from ".";
import "./index";

const colorTokens = getColorTokens().map((token) => token.replace("--", ""));

/**
 * Pass at least one prop between `text` and `image`.
 * If prop `image` contains a broken URL, the component will show `text` prop, if given.
 */
const StoryMeta = {
  title: "ZAvatar",
  component: "z-avatar",
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
  render: (args) =>
    html`<z-avatar
      size="${args.size}"
      text="${args.text}"
      text-color="${args.textColor}"
      background-color="${args.backgroundColor}"
      image="${args.image}"
    ></z-avatar>`,
} satisfies StoryObj<ZAvatar>;
