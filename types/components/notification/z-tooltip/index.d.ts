import { TooltipPosition } from "../../../beans/index";
export declare class ZTooltip {
    /** content text */
    content: string;
    /** tooltip position variant */
    type: TooltipPosition;
    private direction;
    constructor();
    getArrowClass(): "tooltip tooltip-bottom-arrow" | "tooltip tooltip-top-arrow" | "tooltip tooltip-right-arrow" | "tooltip tooltip-left-arrow";
    render(): any;
}
