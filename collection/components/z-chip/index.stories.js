import { html } from "lit";
import { ZChipType } from "../../beans";
import { ICONS } from "../../constants/iconset";
import "./index";
const StoryMeta = {
    title: "ZChip",
    argTypes: {
        type: {
            options: Object.values(ZChipType),
            control: {
                type: "radio",
            },
        },
    },
    args: {
        type: ZChipType.DEFAULT,
        icon: "pdf",
    },
};
export default StoryMeta;
export const Default = {
    render: (args) => html `
    <z-chip
      type=${args.type}
      icon=${args.icon}
      >my custom element</z-chip
    >
  `,
};
export const DifferentFontWeight = {
    render: (args) => html `
    <z-chip
      type=${args.type}
      icon=${args.icon}
    >
      <strong>my</strong>
      <span style="margin-left: 4px">custom element</span>
    </z-chip>
  `,
};
export const InteractiveIcon = {
    argTypes: {
        icon: {
            options: Object.keys(ICONS),
            control: {
                type: "select",
            },
        },
        interactiveIcon: {
            options: Object.keys(ICONS),
            control: {
                type: "select",
            },
        },
    },
    args: {
        interactiveIcon: "multiply-circled",
        disabled: false,
    },
    render: (args) => html `
    <z-chip
      type=${args.type}
      icon=${args.icon}
      disabled=${args.disabled}
      .interactiveIcon=${args.interactiveIcon}
      >my custom element</z-chip
    >
  `,
};
//# sourceMappingURL=index.stories.js.map
