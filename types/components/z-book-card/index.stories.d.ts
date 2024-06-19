import { ZBookCard } from ".";
import { BookCardVariant } from "../../beans";
import { CSSVarsArguments } from "../../utils/storybook-utils";
import "../z-button/index";
import "../z-icon/index";
import "../z-tag/index";
import "./index";
type ZBookCardStoriesArgs = ZBookCard & {
    theme: "theme-default" | "theme-dark" | "theme-black-yellow";
} & CSSVarsArguments<"z-book-card-ribbon-background-color" | "z-book-card-ribbon-shadow-color" | "z-book-card-compact-width" | "z-book-card-compact-height">;
declare const StoryMeta: {
    title: string;
    component: string;
    argTypes: {
        variant: {
            control: {
                type: "inline-radio";
            };
            options: BookCardVariant[];
        };
        theme: {
            control: {
                type: "inline-radio";
            };
            options: string[];
        };
        "--z-book-card-ribbon-background-color": import("@storybook/types").Args;
        "--z-book-card-ribbon-shadow-color": import("@storybook/types").Args;
    };
    args: {
        variant: BookCardVariant.EXPANDED;
        cover: string;
        operaTitle: string;
        volumeTitle: string;
        authors: string;
        isbn: string;
        isbnLabel: string;
        ribbon: string;
        ribbonIcon: string;
        ribbonInteractive: false;
        borderless: false;
        fallbackCover: string;
        operaTitleTag: string;
        theme: "theme-default";
        "--z-book-card-ribbon-background-color": string;
        "--z-book-card-ribbon-shadow-color": string;
        "--z-book-card-compact-width": string;
        "--z-book-card-compact-height": string;
    };
};
export default StoryMeta;
export declare const AllProps: {
    parameters: {
        controls: {
            exclude: string[];
        };
    };
    render: (args: ZBookCardStoriesArgs) => import("lit-html").TemplateResult<1>;
};
export declare const SlottedTags: {
    parameters: {
        controls: {
            exclude: string[];
        };
    };
    render: (args: ZBookCardStoriesArgs) => import("lit-html").TemplateResult<1>;
};
export declare const SlottedResources: {
    parameters: {
        controls: {
            exclude: string[];
        };
    };
    render: (args: ZBookCardStoriesArgs) => import("lit-html").TemplateResult<1>;
};
export declare const SlottedHeaderCta: {
    parameters: {
        controls: {
            exclude: string[];
        };
    };
    render: (args: ZBookCardStoriesArgs) => import("lit-html").TemplateResult<1>;
};
export declare const SlottedFooterCta: {
    parameters: {
        controls: {
            exclude: string[];
        };
    };
    render: (args: ZBookCardStoriesArgs) => import("lit-html").TemplateResult<1>;
};
export declare const ExpandedVariant: {
    parameters: {
        controls: {
            exclude: string[];
        };
    };
    render: (args: ZBookCardStoriesArgs) => import("lit-html").TemplateResult<1>;
};
export declare const SearchVariant: {
    parameters: {
        controls: {
            exclude: string[];
        };
    };
    render: (args: ZBookCardStoriesArgs) => import("lit-html").TemplateResult<1>;
};
export declare const CompactVariant: {
    parameters: {
        controls: {
            exclude: string[];
        };
    };
    render: (args: ZBookCardStoriesArgs) => import("lit-html").TemplateResult<1>;
};
