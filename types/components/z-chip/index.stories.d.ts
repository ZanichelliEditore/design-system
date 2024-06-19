import { type ZChip } from ".";
import { ZChipType } from "../../beans";
import "./index";
declare const StoryMeta: {
    title: string;
    argTypes: {
        type: {
            options: ZChipType[];
            control: {
                type: "radio";
            };
        };
    };
    args: {
        type: ZChipType.DEFAULT;
        icon: string;
    };
};
export default StoryMeta;
export declare const Default: {
    render: (args: ZChip) => import("lit-html").TemplateResult<1>;
};
export declare const DifferentFontWeight: {
    render: (args: ZChip) => import("lit-html").TemplateResult<1>;
};
export declare const InteractiveIcon: {
    argTypes: {
        icon: {
            options: string[];
            control: {
                type: "select";
            };
        };
        interactiveIcon: {
            options: string[];
            control: {
                type: "select";
            };
        };
    };
    args: {
        interactiveIcon: string;
        disabled: false;
    };
    render: (args: ZChip) => import("lit-html").TemplateResult<1>;
};
