import { html } from "lit";
import { ZSectionTitleDividerPosition } from "../../beans";
import { getColorTokenArgConfig } from "../../utils/storybook-utils";
import "./index";
const StoryMeta = {
    title: "ZSectionTitle",
    component: "z-section-title",
    argTypes: {
        "dividerPosition": {
            options: Object.values(ZSectionTitleDividerPosition),
            control: {
                type: "inline-radio",
            },
        },
        "--z-section-title--divider-color": getColorTokenArgConfig(),
    },
    args: {
        "uppercase": true,
        "--z-section-title--divider-color": "var(--red500)",
    },
};
export default StoryMeta;
export const PrimaryTitleOnly = {
    args: {
        dividerPosition: ZSectionTitleDividerPosition.BEFORE,
    },
    render: (args) => html `
    <z-section-title
      .dividerPosition=${args.dividerPosition}
      .uppercase=${args.uppercase}
      .style="--z-section-title--divider-color: ${args["--z-section-title--divider-color"]}"
    >
      <h4 slot="primary-title">Primary title</h4>
    </z-section-title>
  `,
};
export const SecondaryTitle = {
    parameters: {
        controls: {
            exclude: ["dividerPosition"],
        },
    },
    render: (args) => html `
    <z-section-title
      .uppercase=${args.uppercase}
      .style="--z-section-title--divider-color: ${args["--z-section-title--divider-color"]}"
    >
      <h5 slot="secondary-title">Secondary title</h5>
      <h4 slot="primary-title">Primary title</h4>
    </z-section-title>
  `,
};
//# sourceMappingURL=index.stories.js.map
