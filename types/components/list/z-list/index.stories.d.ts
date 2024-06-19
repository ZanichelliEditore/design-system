import { ZList } from ".";
import { ListSize, ListType } from "../../../beans";
import "../z-list-element/index";
import "../z-list-group/index";
import "./index";
declare const StoryMeta: {
    title: string;
    component: string;
    argTypes: {
        size: {
            control: {
                type: "select";
            };
            options: ListSize[];
        };
        listType: {
            control: {
                type: "select";
            };
            options: ListType[];
        };
    };
    args: {
        size: ListSize.MEDIUM;
        listType: ListType.NONE;
    };
    render: (args: ZList) => import("lit-html").TemplateResult<1>;
};
export default StoryMeta;
export declare const Default: {};
export declare const HeaderDivider: {
    render: (args: ZList) => import("lit-html").TemplateResult<1>;
};
export declare const ElementDivider: {
    render: (args: ZList) => import("lit-html").TemplateResult<1>;
};
export declare const ClickableElements: {
    render: () => import("lit-html").TemplateResult<1>;
};
export declare const ExpandableElements: {
    render: () => import("lit-html").TemplateResult<1>;
};
export declare const UnorderedIndex: {
    parameters: {
        controls: {
            exclude: string[];
        };
    };
    args: {
        listType: ListType.UNORDERED;
    };
};
export declare const OrderedIndex: {
    parameters: {
        controls: {
            exclude: string[];
        };
    };
    args: {
        listType: ListType.ORDERED;
    };
};
