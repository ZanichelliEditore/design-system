import { type TemplateResult } from "lit";
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
    argTypes: {
        flow: {
            control: {
                type: "inline-radio";
            };
            options: string[];
        };
    };
    args: {
        "--app-header-content-max-width": string;
        enableSearch: false;
        searchPageUrl: string;
        flow: "auto";
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
export declare const Subtitle: {
    parameters: {
        controls: {
            exclude: string[];
        };
    };
    render: (args: ZAppHeaderStoriesArgs) => TemplateResult<1>;
};
export declare const TopSubtitle: {
    parameters: {
        controls: {
            exclude: string[];
        };
    };
    render: (args: ZAppHeaderStoriesArgs) => TemplateResult<1>;
};
export declare const Menu: {
    render: (args: ZAppHeaderStoriesArgs) => TemplateResult<1>;
};
export declare const LongTitle: {
    render: (args: ZAppHeaderStoriesArgs) => TemplateResult<1>;
};
export declare const VeryLongMenu: {
    render: (args: ZAppHeaderStoriesArgs) => TemplateResult<1>;
};
export declare const OffcanvasMenu: {
    parameters: {
        controls: {
            exclude: string[];
        };
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
    };
    render: (args: ZAppHeaderStoriesArgs) => TemplateResult<1>;
};
export declare const MaxWidth: {
    args: {
        "--app-header-content-max-width": string;
    };
    decorators: ((Story: import("@storybook/types").PartialStoryFn<import("@storybook/web-components").WebComponentsRenderer, ZAppHeaderStoriesArgs>) => TemplateResult<1>)[];
    parameters: {
        docs: {
            inlineStories: boolean;
            iframeHeight: string;
        };
    };
    render: (args: ZAppHeaderStoriesArgs) => TemplateResult<1>;
};
export declare const CoverHeroWithSlottedImage: {
    args: {
        overlay: true;
        hero: string;
    };
    render: (args: ZAppHeaderStoriesArgs) => TemplateResult<1>;
};
export declare const Searchbar: {
    parameters: {
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