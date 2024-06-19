import { type ZSearchbar } from ".";
import { ButtonVariant, ControlSize } from "../../beans";
import { CSSVarsArguments } from "../../utils/storybook-utils";
import "./index";
type ZSearchbarStoriesArgs = ZSearchbar & CSSVarsArguments<"--z-searchbar-results-height" | "--z-searchbar-tag-text-color" | "--z-searchbar-tag-bg">;
declare const StoryMeta: {
    title: string;
    component: string;
    argTypes: {
        size: {
            control: {
                type: "inline-radio";
            };
            options: ControlSize[];
        };
        variant: {
            control: {
                type: "inline-radio";
            };
            options: ButtonVariant[];
        };
    };
    args: {
        preventSubmit: false;
        showSearchButton: false;
        searchButtonIconOnly: false;
        autocomplete: false;
        autocompleteMinChars: number;
        resultsCount: any;
        resultsEllipsis: true;
        searchHelperLabel: string;
        resultsItems: {
            label: string;
        }[];
        sortResultsItems: false;
        htmlid: string;
        placeholder: string;
        value: string;
        "--z-searchbar-results-height": string;
        "--z-searchbar-tag-text-color": string;
        "--z-searchbar-tag-bg": string;
        size: ControlSize.BIG;
        variant: ButtonVariant.PRIMARY;
    };
};
export default StoryMeta;
export declare const Default: {
    render: (args: ZSearchbarStoriesArgs) => import("lit-html").TemplateResult<1>;
};
export declare const SimpleSearch: {
    parameters: {
        controls: {
            include: string[];
        };
    };
    args: {
        htmlid: string;
    };
    render: (args: ZSearchbarStoriesArgs) => import("lit-html").TemplateResult<1>;
};
export declare const Autocomplete: {
    args: {
        autocomplete: true;
        htmlid: string;
        showSearchButton: false;
        searchButtonIconOnly: false;
    };
    render: (args: ZSearchbarStoriesArgs) => import("lit-html").TemplateResult<1>;
};
export declare const AutocompleteWithComplexItems: {
    args: {
        autocomplete: true;
        htmlid: string;
        showSearchButton: false;
        searchButtonIconOnly: false;
        resultsItems: ({
            label: string;
            icon: string;
            tag: {
                text: string;
                icon: string;
            };
            category: string;
            subcategory: string;
        } | {
            label: string;
            icon: string;
            category: string;
            subcategory: string;
            tag?: undefined;
        })[];
    };
    render: (args: ZSearchbarStoriesArgs) => import("lit-html").TemplateResult<1>;
};
