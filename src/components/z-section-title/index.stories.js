import {html} from "lit";
import {ZSectionTitleDividerPosition} from "../../beans";
import {getColorVars, getColorVarsLabels} from "../../utils/storybook-utils";

export default {
  title: "ZSectionTitle",
  component: "z-section-title",

  argTypes: {
    "dividerPosition": {
      options: Object.values(ZSectionTitleDividerPosition),

      control: {
        type: "inline-radio",
      },
    },

    "uppercase": {
      control: {
        type: "boolean",
      },
    },

    "--z-section-title--divider-color": {
      options: getColorVars(),

      control: {
        type: "select",
        labels: getColorVarsLabels(),
      },
    },
  },

  args: {
    "uppercase": true,
    "--z-section-title--divider-color": "var(--red500)",
  },
};

export const PrimaryTitleOnly = {
  render: (args) => html`
    <z-section-title
      .dividerPosition=${args.dividerPosition}
      .uppercase=${args.uppercase}
      .style="--z-section-title--divider-color: ${args["--z-section-title--divider-color"]}"
    >
      <h4 slot="primary-title">Primary title</h4>
    </z-section-title>
  `,

  name: "Primary title only",

  args: {
    dividerPosition: ZSectionTitleDividerPosition.BEFORE,
  },
};

export const WithSecondaryTitle = {
  render: (args) => html`
    <z-section-title
      .uppercase=${args.uppercase}
      .style="--z-section-title--divider-color: ${args["--z-section-title--divider-color"]}"
    >
      <h5 slot="secondary-title">Secondary title</h5>
      <h4 slot="primary-title">Primary title</h4>
    </z-section-title>
  `,

  name: "With secondary title",

  parameters: {
    controls: {
      exclude: ["dividerPosition"],
    },
  },
};
