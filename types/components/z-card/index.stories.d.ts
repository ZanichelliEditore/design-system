import { ZCard } from ".";
import { CardVariant } from "../../beans";
import { CSSVarsArguments } from "../../utils/storybook-utils";
import "../z-icon/index";
import "./index";
import "./index.stories.css";
type ZCardStoriesArgs = ZCard & CSSVarsArguments<"z-card--color-cover-background" | "z-card--color-cover-background" | "z-card--text-border" | "z-card--text-border-radius" | "z-card--text-padding">;
declare const StoryMeta: {
    title: string;
    component: string;
    argTypes: {
        variant: {
            control: {
                type: "inline-radio";
                labels: {
                    null: string;
                };
            };
            options: CardVariant[];
        };
    };
    args: {
        variant: any;
        showShadow: false;
        clickable: false;
    };
};
export default StoryMeta;
export declare const WithImage: {
    render: (args: ZCardStoriesArgs) => import("lit-html").TemplateResult<1>;
};
export declare const WithImageAndIcon: {
    args: {
        coverIcon: string;
    };
    render: (args: ZCardStoriesArgs) => import("lit-html").TemplateResult<1>;
};
export declare const ColorCover: {
    args: {
        "--z-card--color-cover-background": string;
    };
    render: (args: ZCardStoriesArgs) => import("lit-html").TemplateResult<1>;
};
export declare const TextVariantPrimaryBackground: {
    args: {
        "--z-card--text-border-radius": string;
    };
    parameters: {
        controls: {
            exclude: string[];
        };
    };
    render: (args: ZCardStoriesArgs) => import("lit-html").TemplateResult<1>;
};
export declare const TextVariantWhiteBackgroundAndBordered: {
    args: {
        "--z-card--text-border": string;
        "--z-card--text-border-radius": string;
        "--z-card--text-padding": string;
    };
    parameters: {
        controls: {
            exclude: string[];
        };
    };
    render: (args: ZCardStoriesArgs) => import("lit-html").TemplateResult<1>;
};
export declare const WithImageAndClickListener: {
    parameters: {
        controls: {
            exclude: string[];
        };
    };
    render: (args: ZCardStoriesArgs) => import("lit-html").TemplateResult<1>;
};
