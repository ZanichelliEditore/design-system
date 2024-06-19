import { ZListElement } from ".";
import { DividerSize, ExpandableListButtonAlign, ExpandableListStyle, ListDividerType, ListSize, ListType } from "../../../beans";
import "../z-list/index";
import "./index";
declare const StoryMeta: {
    title: string;
    component: string;
    argTypes: {
        alignButton: {
            control: {
                type: "inline-radio";
            };
            options: ExpandableListButtonAlign[];
        };
        dividerColor: {
            control: {
                type: "select";
            };
            options: string[];
        };
        dividerType: {
            control: {
                type: "inline-radio";
            };
            options: ListDividerType[];
        };
        dividerSize: {
            control: {
                type: "inline-radio";
            };
            options: DividerSize[];
        };
        expandableStyle: {
            control: {
                type: "inline-radio";
            };
            options: ExpandableListStyle[];
        };
        size: {
            control: {
                type: "inline-radio";
            };
            options: ListSize[];
        };
        color: {
            control: {
                type: "select";
            };
            options: string[];
        };
        listType: {
            control: {
                type: "inline-radio";
            };
            options: ListType[];
        };
    };
    args: {
        alignButton: ExpandableListButtonAlign.LEFT;
        clickable: false;
        dividerColor: string;
        dividerType: ListDividerType.NONE;
        dividerSize: DividerSize.SMALL;
        expandable: false;
        expandableStyle: ExpandableListStyle.ACCORDION;
        listElementId: number;
        size: ListSize.MEDIUM;
        color: string;
        disabled: true;
        listElementPosition: string;
        listType: ListType.NONE;
    };
};
export default StoryMeta;
export declare const Default: {
    render: (args: ZListElement) => import("lit-html").TemplateResult<1>;
};
