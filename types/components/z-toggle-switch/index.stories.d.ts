import { type ZToggleSwitch } from ".";
import { LabelPosition } from "../../beans";
import "./index";
declare const StoryMeta: {
    title: string;
    argTypes: {
        labelPosition: {
            options: LabelPosition[];
            control: {
                type: "radio";
            };
        };
    };
};
export default StoryMeta;
export declare const Default: {
    args: {
        labelPosition: LabelPosition.LEFT;
        disabled: false;
    };
    render: (args: ZToggleSwitch) => import("lit-html").TemplateResult<1>;
};
