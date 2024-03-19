import { EventEmitter } from "../../../../stencil-public-runtime";
export declare class ZMyzCardAlert {
    /** icon name */
    iconname: string;
    /** content text */
    contenttext: string;
    /** action button text */
    actiontext?: string;
    /** alert variant type */
    type: string;
    /** undo action click/keyboard event, returns actionType */
    undoAction: EventEmitter;
    private emitUndoAction;
    private handleSpaceKeyPress;
    private handleActionButtonClick;
    private retrieveClass;
    private getAlertType;
    render(): HTMLDivElement;
}
