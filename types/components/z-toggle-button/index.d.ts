import { EventEmitter } from "../../stencil-public-runtime";
export declare class ZToggleButton {
    /** label text */
    label: string;
    /** disabled status flag (optional) */
    isdisabled?: boolean;
    /** avoidclick status flag */
    avoidclick: boolean;
    /** open by default (optional) */
    opened?: boolean;
    /**  aria-label for the button */
    ariaLabel: string;
    /** emitted on toggle button click, returns isOpen */
    toggleClick: EventEmitter;
    private emitToggleClick;
    render(): HTMLButtonElement;
}
