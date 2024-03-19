import { EventEmitter } from "../../../stencil-public-runtime";
/**
 * @deprecated
 */
export declare class ZTableHeader {
    host: HTMLZTableHeaderElement;
    /** Column ID */
    columnId: string;
    /** Set padding size of cell, if special 0px padding will be set */
    padding: "x-small" | "small" | "medium" | "large" | "special";
    /** [Optional] Make the header sortable */
    sortable?: boolean;
    /** [Optional] Show contextual menu button */
    showButton?: boolean;
    /** [Optional] Default sort order */
    defaultSortDirection?: "asc" | "desc" | "none";
    /** Sort direction */
    sortDirection: "asc" | "desc" | "none";
    private popover?;
    private triggerButton?;
    constructor();
    /** [Optional] callback for sorting */
    sort: EventEmitter;
    private emitOnSort;
    private handleSort;
    private handleMenuClick;
    handleOutsideClick(e: MouseEvent): void;
    handleClickHeaders(e: MouseEvent): void;
    componentWillRender(): void;
    render(): HTMLZTableHeaderElement;
}
