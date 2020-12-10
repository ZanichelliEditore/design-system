import { EventEmitter } from "../../../stencil-public-runtime";
export declare class ZToggleButton {
    /** label text */
    label: string;
    /** disabled status flag (optional) */
    isdisabled?: boolean;
    /** avoidclick status flag */
    avoidclick: boolean;
    isOpen: boolean;
    /** emitted on toggle button click, returns isOpen */
    toggleClick: EventEmitter;
    emitToggleClick(): void;
    retrieveButtonClass(): string;
    render(): any;
}
