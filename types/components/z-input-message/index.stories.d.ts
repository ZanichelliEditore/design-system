import { ZInputMessage } from ".";
import { ControlSize, InputStatus } from "../../beans";
import "./index";
type ZInputMessageStoriesArgs = ZInputMessage & {
    class: ControlSize;
};
declare const StoryMeta: {
    title: string;
    component: string;
    argTypes: {
        status: {
            control: {
                type: "inline-radio";
            };
            options: string[];
        };
        class: {
            control: {
                type: "inline-radio";
            };
            options: ControlSize[];
        };
    };
    args: {
        message: string;
        status: InputStatus.ERROR;
        class: ControlSize.BIG;
    };
};
export default StoryMeta;
export declare const Default: {
    render: (args: ZInputMessageStoriesArgs) => import("lit-html").TemplateResult<1>;
};
