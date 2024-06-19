import { EventEmitter } from "../../stencil-public-runtime";
import { ZChipType } from "../../beans";
export declare class ZChip {
    el: HTMLZChipElement;
    /** Non interactive icon */
    icon?: string;
    /** z-chip size type, can be default, medium or small */
    type?: ZChipType;
    /** z-chip interactive icon */
    interactiveIcon?: string;
    /** set z-chip as disabled */
    disabled?: boolean;
    /** z-chip aria-label string */
    ariaLabel: string;
    /** click on interactive icon */
    interactiveIconClick: EventEmitter;
    render(): HTMLDivElement;
}
