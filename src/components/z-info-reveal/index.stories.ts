import {Meta, StoryObj} from "@storybook/web-components";
import {html} from "lit";
import {type ZInfoReveal} from ".";
import {ControlSize, InfoRevealPosition} from "../../beans";
import {ICONS} from "../../constants/iconset";
import "../z-button/index";
import "./index";
import "./index.stories.css";

const StoryMeta = {
  title: "ZInfoReveal",
  component: "z-info-reveal",
  argTypes: {
    icon: {
      control: {
        type: "select",
      },
      options: Object.keys(ICONS).sort(),
    },
    size: {
      control: {
        type: "inline-radio",
      },
      options: Object.values(ControlSize),
    },
    position: {
      options: Object.values(InfoRevealPosition),
      control: {
        type: "inline-radio",
      },
    },
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<ZInfoReveal>;

export default StoryMeta;

export const Default = {
  args: {
    label: "",
    icon: "informationsource",
    size: ControlSize.BIG,
    position: InfoRevealPosition.TOP_RIGHT,
  },
  render: (args) => html`
    <div class="z-info-reveal-story-wrapper">
      <z-button .size=${args.size}>Button</z-button>
      <z-info-reveal
        .label=${args.label}
        .icon=${args.icon}
        .size=${args.size}
        .position=${args.position}
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in
          Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit?
        </div>
      </z-info-reveal>
    </div>
  `,
} satisfies StoryObj<ZInfoReveal>;
