import {html} from "lit";
import {ICONS} from "../../icons/icons";
import {classMap} from "lit/directives/class-map.js";
import "./index.stories.css";

export default {
  title: "ZFab",

  argTypes: {
    icon: {
      options: Object.keys(ICONS),

      control: {
        type: "select",
      },
    },

    size: {
      options: ["default", "z-fab-small", "z-fab-x-small"],

      control: {
        type: "inline-radio",
      },
    },

    colorVariant: {
      options: ["default", "z-fab-primary03", "z-fab-surface01", "z-fab-surface02", "z-fab-surface04"],

      control: {
        type: "inline-radio",
      },
    },
  },

  args: {
    "colorVariant": "default",
    "icon": "question-mark-circle",
    "label": "Info",
    "size": "default",
    "z-fab-extendable": false,
    "z-fab-extended": true,
  },

  parameters: {
    layout: "fullscreen",
  },
};

export const ZFab = {
  render: (args) => html`
    <button
      class=${classMap({
        "z-fab": true,
        "z-fab-small": args.size === "z-fab-small",
        "z-fab-x-small": args.size === "z-fab-x-small",
        "z-fab-primary03": args.colorVariant === "z-fab-primary03",
        "z-fab-surface01": args.colorVariant === "z-fab-surface01",
        "z-fab-surface02": args.colorVariant === "z-fab-surface02",
        "z-fab-surface04": args.colorVariant === "z-fab-surface04",
        "z-fab-extended": args["z-fab-extended"],
        "z-fab-extendable": args["z-fab-extendable"],
      })}
    >
      <z-icon name=${args.icon}></z-icon>
      <span>${args.label}</span>
    </button>
  `,

  name: "ZFab",
};

export const ZFabMultiple = {
  render: (args) => html`
    <button
      class=${classMap({
        "z-fab": true,
        "z-fab-small": args.size === "z-fab-small",
        "z-fab-x-small": args.size === "z-fab-x-small",
        "z-fab-primary03": args.colorVariant === "z-fab-primary03",
        "z-fab-surface01": args.colorVariant === "z-fab-surface01",
        "z-fab-surface02": args.colorVariant === "z-fab-surface02",
        "z-fab-surface04": args.colorVariant === "z-fab-surface04",
        "z-fab-extended": args["z-fab-extended"],
        "z-fab-extendable": args["z-fab-extendable"],
      })}
    >
      <z-icon name=${args.icon}></z-icon>
      <span>${args.label}</span>
    </button>
    <button
      class=${classMap({
        "z-fab": true,
        "fab2": true,
        "z-fab-small": true,
        "z-fab-surface01": true,
      })}
    >
      <z-icon name="support"></z-icon>
    </button>
  `,

  name: "ZFab multiple",
};
