import { EventEmitter } from "../../../stencil-public-runtime";
export declare class ZDragdropArea {
    /** drag & drop button label */
    dragAndDropLabel: string;
    /** Emitted when user drop one or more files */
    fileDropped: EventEmitter;
    private fileDroppedHandler;
    private dragDropContainer;
    private renderOnDragOverMessage;
    render(): HTMLDivElement;
}
