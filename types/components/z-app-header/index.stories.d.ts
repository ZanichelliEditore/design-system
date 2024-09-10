import { TemplateResult } from "lit";
import { ZAppHeader } from ".";
import { CSSVarsArguments } from "../../utils/storybook-utils";
import "../z-menu-section/index";
import "../z-menu/index";
import "./index";
import "./index.stories.css";
type ZAppHeaderStoriesArgs = ZAppHeader & CSSVarsArguments<"app-header-content-max-width">;
declare const StoryMeta: {
    title: string;
    component: string;
    parameters: {
        layout: string;
    };
    subcomponents: {
        ZMenu: string;
        ZMenuSection: string;
    };
    args: {
        "--app-header-content-max-width": string;
        enableSearch: false;
        searchPageUrl: string;
        enableZLogo: false;
        enableOffcanvas: false;
    };
};
export default StoryMeta;
export declare const Title: {
    parameters: {
        controls: {
            exclude: string[];
        };
    };
    render: (args: ZAppHeaderStoriesArgs) => TemplateResult<1>;
};
export declare const ProductLogo: {
    parameters: {
        controls: {
            exclude: string[];
        };
    };
    render: (args: ZAppHeaderStoriesArgs) => TemplateResult<1>;
};
export declare const TopTitle: {
    parameters: {
        controls: {
            exclude: string[];
        };
    };
    render: (args: ZAppHeaderStoriesArgs) => TemplateResult<1>;
};
export declare const MenuWithTopTitle: {
    parameters: {
        controls: {
            exclude: string[];
        };
    };
    args: {
        enableOffcanvas: true;
    };
    render: (args: ZAppHeaderStoriesArgs) => TemplateResult<1>;
};
export declare const LongTitle: {
    parameters: {
        controls: {
            exclude: string[];
        };
    };
    render: (args: ZAppHeaderStoriesArgs) => TemplateResult<1>;
};
export declare const OffcanvasMenu: {
    args: {
        enableOffcanvas: true;
    };
    render: (args: ZAppHeaderStoriesArgs) => TemplateResult<1>;
};
export declare const Stuck: {
    decorators: ((Story: import("@storybook/types").PartialStoryFn<import("@storybook/web-components").WebComponentsRenderer, ZAppHeaderStoriesArgs>) => TemplateResult<1>)[];
    parameters: {
        docs: {
            inlineStories: boolean;
            iframeHeight: string;
        };
        controls: {
            exclude: string[];
        };
    };
    render: (args: ZAppHeaderStoriesArgs) => TemplateResult<1>;
};
export declare const SearchPageButton: {
    parameters: {
        controls: {
            exclude: string[];
        };
    };
    decorators: ((Story: import("@storybook/types").PartialStoryFn<import("@storybook/web-components").WebComponentsRenderer, ZAppHeaderStoriesArgs>) => TemplateResult<1>)[];
    render: (args: ZAppHeaderStoriesArgs) => TemplateResult<1>;
};
