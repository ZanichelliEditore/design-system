import { EventEmitter } from "../../stencil-public-runtime";
export declare class ZButtonSort {
    /** id, should be unique */
    buttonid: string;
    /** label content (ascending) */
    label: string;
    /** label content (descending) */
    desclabel?: string;
    /** occurrences counter (optional) */
    counter?: number;
    /** sort label content (ascending) (optional) */
    sortlabelasc?: string;
    /** sort label content (descending) (optional) */
    sortlabeldesc?: string;
    /** selected flag (optional) */
    isselected?: boolean;
    /** sortable flag (optional) */
    sortasc?: boolean;
    allowTooltip: boolean;
    private ellipsis?;
    /** sorting direction click event, returns `buttonid` and `sortAsc` */
    buttonSortClick: EventEmitter;
    private emitButtonSortClick;
    componentDidLoad(): void;
    private setButtonTitle;
    private elementHasEllipsis;
    render(): HTMLButtonElement;
}
