import { DividerSize, ListDividerType, ListSize, ListType } from "../../../beans";
import "../z-list-element/index";
import "../z-list/index";
import "./index";
declare const StoryMeta: {
    title: string;
    component: string;
    argTypes: {
        size: {
            control: {
                type: "inline-radio";
            };
            options: ListSize[];
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
        dividerColor: import("@storybook/types").Args;
        listType: {
            control: {
                type: "inline-radio";
            };
            options: ListType[];
        };
    };
    args: {
        size: ListSize.SMALL;
        dividerType: ListDividerType.HEADER;
        dividerSize: DividerSize.SMALL;
        dividerColor: string;
        listType: ListType.NONE;
    };
};
export default StoryMeta;
export declare const Default: {
    render: (args: any) => import("lit-html").TemplateResult<1>;
};
