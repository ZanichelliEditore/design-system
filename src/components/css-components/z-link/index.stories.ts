import {html} from "lit";
import {classMap, type ClassInfo} from "lit/directives/class-map.js";
import {ICONS} from "../../../constants/iconset";
import "../../z-icon/index";
import "./index.stories.css";

export default {
  title: "ZLink",
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

const getClasses = (args): ClassInfo => ({
  "z-link": true,
  "z-link-blue": args.colorVariant === "z-link-blue",
  "z-link-red": args.colorVariant === "z-link-red",
  "z-link-inverse": args.colorVariant === "z-link-inverse",
  "z-link-active": args["z-link-active"],
  "z-link-disabled": args["z-link-disabled"],
  "z-link-underline": args["z-link-underline"],
  "z-link-icon": args["z-link-icon"],
  "z-link-sb": args["z-link-sb"],
});

export const ZLink = {
  render: (args) => html`
    <div class="z-link-story">
      <a
        href="zanichelli.it"
        class=${classMap(getClasses(args))}
      >
        ${args.icon ? html`<z-icon name=${args.icon}></z-icon>` : ""} ${args.text}
      </a>
    </div>
  `,
};

export const ZLinkButton = {
  render: (args) => html`
    <div class="z-link-story">
      <button class=${classMap(getClasses(args))}>
        ${args.icon ? html`<z-icon name=${args.icon}></z-icon>` : ""} ${args.text}
      </button>
    </div>
  `,
};
