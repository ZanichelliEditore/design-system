import {html} from "lit";
import {ControlSize, InfoRevealPosition} from "../../beans";
import {ICONS} from "../icons/icons";
import "./index.stories.css";

export default {
  title: "ZInfoReveal",
  component: "z-info-reveal",

  argTypes: {
    icon: {
      control: {
        type: "select",
      },

      options: Object.keys(ICONS).sort(),
    },

    label: {
      control: {
        type: "text",
      },
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
};

export const ZInfoReveal = {
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

  name: "ZInfoReveal",

  args: {
    label: "",
    icon: "informationsource",
    size: ControlSize.BIG,
    position: InfoRevealPosition.TOP_RIGHT,
  },
};
