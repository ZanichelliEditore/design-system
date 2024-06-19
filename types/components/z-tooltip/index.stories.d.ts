import { type ZTooltip } from ".";
import { PopoverPosition } from "../../beans";
import { CSSVarsArguments } from "../../utils/storybook-utils";
import "../z-button/index";
import "./index";
import "./index.stories.css";
type ZTooltipStoriesArgs = ZTooltip & CSSVarsArguments<"z-tooltip-theme--surface">;
/**
 * To be sure the algorithm finds the right container, when calculating the position, set its position to `position: relative;`
 * On the following Story, the "position" prop can be set only for the original positions of the `z-tooltip` by design.
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
        "--z-tooltip-theme--surface": import("@storybook/types").Args;
    };
    args: {
        dark: false;
        "--z-tooltip-theme--surface": string;
        position: PopoverPosition.LEFT;
    };
};
export default StoryMeta;
export declare const Default: {
    render: (args: ZTooltipStoriesArgs) => import("lit-html").TemplateResult<1>;
};
/**
 * When `closable` property is set to `false`, you can open the tooltip on hover and still click things outside without closing it.
 * In the Story below, the tooltip is opened hovering the button.
 */
export declare const AutocloseOff: {
    render: (args: ZTooltipStoriesArgs) => import("lit-html").TemplateResult<1>;
};
