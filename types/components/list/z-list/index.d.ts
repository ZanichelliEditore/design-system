import { ListItemBean } from "../../../beans/index.js";
export declare class ZList {
    /** json stringified list data (optional) */
    inputrawdata?: string;
    /** list item data (mutable, optional)*/
    list?: ListItemBean[];
    componentDidLoad(): void;
    parseinputrawdata(inputrawdata: string): void;
    oninputrawdataChange(newValue: string): void;
    render(): any;
}
