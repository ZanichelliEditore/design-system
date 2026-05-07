import {h} from "@stencil/core";
import {ICONS} from "../../../constants/iconset";
import "./index.stories.css";

export default {
  title: "CSS Components/ZLink",
  argTypes: {
    "colorVariant": {
      options: ["z-link", "z-link-blue", "z-link-red", "z-link-inverse"],
      control: {
        type: "inline-radio",
      },
    },
    "icon": {
      options: [null, ...Object.keys(ICONS)],
      control: {
        type: "select",
        labels: {
          null: "No icon",
        },
      },
    },
    "z-link-icon": {
      if: {
        arg: "icon",
        truthy: true,
      },
    },
  },
  args: {
    "colorVariant": "z-link",
    "text": "Zanichelli.it",
    "icon": null,
    "z-link-active": false,
    "z-link-disabled": false,
    "z-link-underline": false,
    "z-link-icon": false,
    "z-link-sb": false,
  },
};

const getClasses = (args): {[key: string]: boolean} => ({
  "z-link": true,
  "z-link-blue": args.colorVariant === "z-link-blue",
  "z-link-red": args.colorVariant === "z-link-red",
  "z-link-inverse": args.colorVariant === "z-link-inverse",
  "z-link-active": args["z-link-active"],
  "z-link-disabled": args["z-link-disabled"],
  "z-link-underline": args["z-link-underline"],
  "z-link-icon": args.icon || args["z-link-icon"],
  "z-link-sb": args["z-link-sb"],
});

export const ZLink = {
  render: (args) => (
    <div class={{"z-link-story": true, "dark-bg": args.colorVariant === "z-link-inverse"}}>
      <a
        href="zanichelli.it"
        class={getClasses(args)}
      >
        {args.icon ? <z-icon name={args.icon}></z-icon> : ""} {args.text}
      </a>
    </div>
  ),
};

/**
 * `z-link` class can also be used on buttons, to make them look like links.
 */
export const ZLinkButton = {
  render: (args) => (
    <div class={{"z-link-story": true, "dark-bg": args.colorVariant === "z-link-inverse"}}>
      <button class={getClasses(args)}>
        {args.icon ? <z-icon name={args.icon}></z-icon> : ""} {args.text}
      </button>
    </div>
  ),
};
