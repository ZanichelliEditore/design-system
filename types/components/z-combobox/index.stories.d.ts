import { ZCombobox } from ".";
import { ControlSize } from "../../beans";
import "./index";
declare const StoryMeta: {
    title: string;
    component: string;
    argTypes: {
        items: {
            control: {
                type: "object";
            };
        };
        size: {
            control: {
                type: "inline-radio";
            };
            options: ControlSize[];
        };
    };
    args: {
        items: {
            id: string;
            name: string;
            checked: false;
            category: string;
        }[];
        checkalltext: string;
        closesearchtext: string;
        disabled: false;
        hascheckall: true;
        hassearch: true;
        inputid: string;
        isfixed: true;
        isopen: true;
        label: string;
        maxcheckableitems: number;
        hasgroupitems: false;
        noresultslabel: string;
        searchlabel: string;
        searchplaceholder: string;
        searchtitle: string;
        uncheckalltext: string;
        size: ControlSize.BIG;
    };
    render: (args: ZCombobox) => import("lit-html").TemplateResult<1>;
};
export default StoryMeta;
export declare const Default: {};
export declare const Groups: {
    args: {
        hasgroupitems: true;
    };
};
export declare const Disabled: {
    args: {
        disabled: true;
    };
};
