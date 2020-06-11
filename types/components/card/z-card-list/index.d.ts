import { ActionBean } from "../../../beans";
export declare class ZCardList {
    /** list data stringified array */
    listdata: string;
    constructor();
    handleSpaceKeyPress(e: KeyboardEvent, url: string): void;
    formatListContent(data: ActionBean): HTMLAnchorElement;
    renderList(dataArray: ActionBean[]): HTMLLIElement[];
    render(): any;
}
