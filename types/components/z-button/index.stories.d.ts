import { type ZButton } from ".";
import { ButtonVariant, ControlSize } from "../../beans";
import "./index";
declare const StoryMeta: {
    title: string;
    component: string;
    args: {
        variant: ButtonVariant.PRIMARY;
        size: ControlSize.BIG;
        disabled: false;
        icon: string;
        ariaLabel: string;
        role: string;
    };
    argTypes: {
        variant: {
            options: ButtonVariant[];
            control: {
                type: "inline-radio";
            };
        };
        size: {
            options: ControlSize[];
            control: {
                type: "inline-radio";
            };
        };
    };
    render: (args: ZButton) => import("lit-html").TemplateResult<1>;
};
export default StoryMeta;
export declare const Primary: {};
export declare const SecondaryXSmall: {
    args: {
        variant: ButtonVariant.SECONDARY;
        size: ControlSize.X_SMALL;
    };
    parameters: {
        controls: {
            exclude: string[];
        };
    };
};
export declare const TertiarySmall: {
    args: {
        variant: ButtonVariant.TERTIARY;
        size: ControlSize.SMALL;
    };
    parameters: {
        controls: {
            exclude: string[];
        };
    };
};
export declare const IconOnly: {
    render: (args: ZButton) => import("lit-html").TemplateResult<1>;
};
export declare const LinkButton: {
    args: {
        icon: string;
        href: string;
        target: string;
        role: string;
    };
    render: (args: ZButton) => import("lit-html").TemplateResult<1>;
};
