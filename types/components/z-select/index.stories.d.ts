import { type ZSelect } from ".";
import { ControlSize, InputStatus, SelectItem } from "../../beans";
import "./index";
declare const StoryMeta: {
    title: string;
    component: string;
    argTypes: {
        status: {
            control: {
                type: "select";
                labels: {
                    null: string;
                };
            };
            options: InputStatus[];
        };
        size: {
            control: {
                type: "inline-radio";
            };
            options: ControlSize[];
        };
    };
    args: {
        items: SelectItem[];
        label: string;
        ariaLabel: string;
        placeholder: string;
        status: any;
        message: string;
        size: ControlSize.BIG;
        disabled: false;
        readonly: false;
        htmlid: string;
        htmltitle: string;
        autocomplete: false;
        noresultslabel: string;
        hasGroupItems: false;
        resetItem: string;
        isfixed: false;
    };
};
export default StoryMeta;
export declare const Default: {
    render: (args: ZSelect) => import("lit-html").TemplateResult<1>;
};
export declare const Groups: {
    args: {
        hasGroupItems: true;
        items: SelectItem[];
    };
    render: (args: ZSelect) => import("lit-html").TemplateResult<1>;
};
export declare const ZSelectWithIcons: {
    args: {
        hasGroupItems: true;
        items: SelectItem[];
    };
    render: (args: ZSelect) => import("lit-html").TemplateResult<1>;
};
