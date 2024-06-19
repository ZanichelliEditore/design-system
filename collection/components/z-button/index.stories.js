import { html } from "lit";
import { ButtonVariant, ControlSize } from "../../beans";
import "./index";
const StoryMeta = {
    title: "ZButton",
    component: "z-button",
    args: {
        variant: ButtonVariant.PRIMARY,
        size: ControlSize.BIG,
        disabled: false,
        icon: "download",
        ariaLabel: "Clicca sul bottone",
        role: "button",
    },
    argTypes: {
        variant: {
            options: Object.values(ButtonVariant),
            control: { type: "inline-radio" },
        },
        size: {
            options: Object.values(ControlSize),
            control: { type: "inline-radio" },
        },
    },
    render: (args) => html `<z-button
      variant=${args.variant}
      size=${args.size}
      disabled=${args.disabled}
      icon=${args.icon}
      .ariaLabel=${args.ariaLabel}
      role=${args.role}
    >
      Click me
    </z-button>`,
};
export default StoryMeta;
export const Primary = {};
export const SecondaryXSmall = {
    args: {
        variant: ButtonVariant.SECONDARY,
        size: ControlSize.X_SMALL,
    },
    parameters: {
        controls: {
            exclude: ["variant", "icon"],
        },
    },
};
export const TertiarySmall = {
    args: {
        variant: ButtonVariant.TERTIARY,
        size: ControlSize.SMALL,
    },
    parameters: {
        controls: {
            exclude: ["variant", "icon"],
        },
    },
};
export const IconOnly = {
    render: (args) => html `<z-button
      variant=${args.variant}
      size=${args.size}
      disabled=${args.disabled}
      icon=${args.icon}
      .ariaLabel=${args.ariaLabel}
      role=${args.role}
    />`,
};
export const LinkButton = {
    args: {
        icon: "arrow-quad-north-east",
        href: "https://wikipedia.com",
        target: "_blank",
        role: "link",
    },
    render: (args) => html `<z-button
      variant=${args.variant}
      size=${args.size}
      disabled=${args.disabled}
      icon=${args.icon}
      .ariaLabel=${args.ariaLabel}
      role=${args.role}
      href=${args.href}
      target=${args.target}
    >
      Go to wikipedia
    </z-button>`,
};
//# sourceMappingURL=index.stories.js.map
