import { EventEmitter } from "../../../../stencil-public-runtime";
/**
 * @slot  - pocket header content
 */
export declare class ZPocketHeader {
    /** pocket id */
    pocketid: string;
    private swipeWrap;
    /** Emitted on pocket header click */
    pocketHeaderClick: EventEmitter;
    private emitPocketHeaderClick;
    /** Emitted on pocket header pan */
    pocketHeaderPan: EventEmitter;
    private emitPocketHeaderPan;
    constructor();
    componentDidLoad(): void;
    render(): HTMLElement;
}
