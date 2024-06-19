import { type ZCoverHero } from ".";
import { CoverHeroContentPosition, CoverHeroVariant } from "../../beans";
import { CSSVarsArguments } from "../../utils/storybook-utils";
import "../z-button/index";
import "../z-info-reveal/index";
import "./index";
import "./index.stories.css";
type ZCoverHeroStoriesArgs = ZCoverHero & CSSVarsArguments<"cover-hero-text-color" | "cover-hero-overlay" | "cover-hero-aspect-ratio">;
declare const StoryMeta: {
    title: string;
    component: string;
    argTypes: {
        variant: {
            control: {
                type: "inline-radio";
            };
            options: CoverHeroVariant[];
        };
        contentPosition: {
            if: {
                arg: string;
                eq: CoverHeroVariant;
            };
            control: {
                type: "inline-radio";
            };
            options: CoverHeroContentPosition[];
        };
        "--cover-hero-text-color": import("@storybook/types").Args;
        "--cover-hero-overlay": {
            if: {
                arg: string;
                eq: CoverHeroVariant;
            };
        };
        "--cover-hero-aspect-ratio": {
            if: {
                arg: string;
            };
            control: {
                type: "text";
            };
        };
    };
    args: {
        variant: CoverHeroVariant.OVERLAY;
        contentPosition: CoverHeroContentPosition.TOP;
        preserveAspectRatio: true;
        "--cover-hero-aspect-ratio": any;
        "--cover-hero-overlay": string;
        "--cover-hero-text-color": string;
    };
};
export default StoryMeta;
export declare const Default: {
    render: (args: ZCoverHeroStoriesArgs) => import("lit-html").TemplateResult<1>;
};
export declare const CustomAspectRatio: {
    parameters: {
        controls: {
            exclude: string[];
        };
    };
    args: {
        "--cover-hero-aspect-ratio": string;
    };
    render: (args: any) => import("lit-html").TemplateResult<1>;
};
export declare const AutoAspectRatio: {
    parameters: {
        controls: {
            exclude: string[];
        };
    };
    args: {
        "--cover-hero-aspect-ratio": string;
    };
    render: (args: any) => import("lit-html").TemplateResult<1>;
};
export declare const WithoutPreservingAspectRatio: {
    argTypes: {
        variant: {
            table: {
                disable: boolean;
            };
        };
        preserveAspectRatio: {
            table: {
                disable: boolean;
            };
        };
        "--cover-hero-aspect-ratio": {
            table: {
                disable: boolean;
            };
        };
    };
    args: {
        textContent: string;
    };
    render: (args: any) => import("lit-html").TemplateResult<1>;
};
export declare const StackedVariant: {
    parameters: {
        controls: {
            exclude: string[];
        };
    };
    args: {
        variant: CoverHeroVariant;
    };
    render: (args: any) => import("lit-html").TemplateResult<1>;
};
