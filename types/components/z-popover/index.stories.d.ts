import { type ZPopover } from ".";
import { PopoverPosition } from "../../beans";
import "../z-button/index";
import "../z-icon/index";
import "./index";
import "./index.stories.css";
/**
 * To be sure the AUTO algorithm finds the right container when calculating the position, set its container's position to `position: relative;`
 */
declare const StoryMeta: {
    title: string;
    component: string;
    argTypes: {
        position: {
            options: PopoverPosition[];
            control: {
                type: "select";
            };
        };
        "--z-popover-theme--surface": import("@storybook/types").Args;
        "--z-popover-theme--text": import("@storybook/types").Args;
    };
    args: {
        "--z-popover-theme--surface": string;
        "--z-popover-theme--text": string;
    };
};
export default StoryMeta;
export declare const ContextualMenuLike: {
    args: {
        position: PopoverPosition.RIGHT_BOTTOM;
    };
    render: (args: ZPopover) => import("lit-html").TemplateResult<1>;
};
export declare const TooltipLike: {
    args: {
        position: PopoverPosition.RIGHT;
    };
    render: (args: ZPopover) => import("lit-html").TemplateResult<1>;
};
