/**
 * @slot `descrSlotName` - description content
 */
export declare class ZPanelElem {
    /** html element id (optional) */
    elemid?: string;
    /** image url source (optional) */
    imgurl?: string;
    /** alternative image text (optional) */
    imgalt?: string;
    /** icon link name (optional) */
    linkicon?: string;
    /** link label text*/
    linklabel: string;
    /** link url */
    url: string;
    /** link target (optional) */
    target?: string;
    /** disabled status flag (optional) */
    isdisabled?: boolean;
    /** name of slot container (optional) */
    descrSlotName?: string;
    render(): HTMLDivElement;
}
