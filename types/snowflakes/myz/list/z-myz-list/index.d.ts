import { ListItem } from "../../../../beans/index.js";
export declare class ZMyzList {
    /** json stringified list data (mutable, optional) */
    inputrawdata?: string;
    /** list item data (mutable, optional)*/
    list?: ListItem[];
    componentWillLoad(): void;
    private parseinputrawdata;
    oninputrawdataChange(newValue: string): void;
    render(): HTMLUListElement;
}
