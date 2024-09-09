import {html} from "lit";
import {classMap} from "lit/directives/class-map.js";
import {ICONS} from "../../../constants/iconset";
import "../../z-icon/index";
import "./index.stories.css";

/**
 * You can use the `.z-fab` class on a `<button>` or `<a>` with some additional configuration class:
 * - Sizes: `.z-fab-small`, `.z-fab-x-small`. Default with no size classes, is `big`
 * - Color variants: `.z-fab-primary03`, `.z-fab-surface01`, `.z-fab-surface02`, `.z-fab-surface04`. Default with no color classes, is `primary01`
 * - `.z-fab-extended`: show the label (if any) near the icon
 * - `.z-fab-extendable`: label will be shown only on mouse hover and only on desktop viewports (don't add the `.z-fab-extended` class in this case)
 *
 * Some css custom properties are also available to customize the component:
 * - `--z-fab-right-offset`: the right offset of the fab button (Default: `--grid-margin`)
 * - `--z-fab-bottom-offset`: the bottom offset of the fab button (Default: `--grid-margin`)
 * - `--z-fab-icon-size`: the size of the icon (Default: `20px`)
 * - `--z-fab-icon-fill`: the fill color of the icon (Default: `--color-inverse-icon`)
 *
 * > NB: for the `extended` and `extendable` versions, always wrap the text of the label with some element (e.g. a `<span>`).
 */
export default {
  title: "ZFab",
  argTypes: {
    icon: {
      options: Object.keys(ICONS),
      control: {type: "select"},
    },
    size: {
      options: ["default", "z-fab-small", "z-fab-x-small"],
      control: {type: "inline-radio"},
    },
    colorVariant: {
      options: ["default", "z-fab-primary03", "z-fab-surface01", "z-fab-surface02", "z-fab-surface04"],
      control: {type: "inline-radio"},
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
  tags: ["!autodocs"],
};

export const Default = {
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
      ${args.icon ? html`<z-icon name=${args.icon}></z-icon>` : ""}
      ${args.label ? html`<span>${args.label}</span>` : ""}
    </button>
  `,
};

/**
 * Multiple ZFab can be used in the same page (max 3), but only one can be "default". The other ones must have a smaller size and can't have the text.
 * You can space them by setting the `--z-fab-bottom-offset` CSS prop.
 */
export const Multiple = {
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
};
