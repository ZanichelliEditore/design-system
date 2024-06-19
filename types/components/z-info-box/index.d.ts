import { EventEmitter } from "../../stencil-public-runtime";
/**
 * @slot content - set the info box content
 */
export declare class ZInfoBox {
    /** info box unique id */
    boxid: string;
    /** render close icon flag */
    isclosable: boolean;
    /** emitted on close icon click */
    infoBoxClose: EventEmitter;
    private emitInfoBoxClose;
    render(): HTMLDivElement;
}
