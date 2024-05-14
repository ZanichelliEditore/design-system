import {html} from "lit";
import {getColorVars, getColorVarsLabels} from "../../utils/storybook-utils";
import {ICONS} from "../icons/icons";

export default {
  title: "ZTag",
  component: "z-tag",

  argTypes: {
    "icon": {
      control: {
        type: "select",
      },

      options: Object.keys(ICONS).sort(),
    },

    "text": {
      control: {
        type: "text",
      },
    },

    "expandable": {
      control: {
        type: "boolean",
      },
    },

    "--z-tag-text-color": {
      options: getColorVars(),

      control: {
        type: "select",
        labels: getColorVarsLabels(),
      },
    },

    "--z-tag-bg": {
      options: getColorVars(),

      control: {
        type: "select",
        labels: getColorVarsLabels(),
      },
    },
  },

  args: {
    text: "In progress",
    expandable: false,
  },
};

export const ZTagSample = {
  render: (args) =>
    html`<z-tag
      icon="gear"
      expandable=${args.expandable}
      >${args.text}
    </z-tag>`,

  name: "ZTag-sample",
};

export const ZTagToken = {
  render: (args) =>
    html`<z-tag
      style="--z-tag-text-color: ${args["--z-tag-text-color"]}; --z-tag-bg: ${args["--z-tag-bg"]}"
      .icon=${args.icon}
      .expandable=${args.expandable}
      >${args.text}
    </z-tag>`,

  name: "ZTag-token",

  args: {
    "icon": "gear",
    "--z-tag-text-color": "",
    "--z-tag-bg": "",
  },
};

export const ZTagWithLongText = {
  render: (args) =>
    html`<z-tag
      style="--z-tag-text-color: ${args["--z-tag-text-color"]}; --z-tag-bg: ${args["--z-tag-bg"]}; max-width: 500px;"
      .icon=${args.icon}
      .expandable=${args.expandable}
      >${args.text}
    </z-tag>`,

  name: "ZTag-with-long-text",

  args: {
    "icon": "gear",
    "text": "In progress testo lungo molto lungo lungo lungo lungo lungolungo lungolungo",
    "expandable": false,
    "--z-tag-text-color": "",
    "--z-tag-bg": "",
  },
};
