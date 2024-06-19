import { EventEmitter } from "../../stencil-public-runtime";
import { LabelPosition } from "../../beans";
export declare class ZToggleSwitch {
    /** Disabled flag */
    disabled?: boolean;
    /** Label position */
    labelPosition?: LabelPosition;
    /** Checked state */
    checked?: boolean;
    /** HTML id attribute to set to the internal checkbox */
    htmlid: string;
    /** Toggle click event */
    toggleClick: EventEmitter;
    private emitToggleClick;
    private handleClick;
    render(): HTMLZToggleSwitchElement;
}
