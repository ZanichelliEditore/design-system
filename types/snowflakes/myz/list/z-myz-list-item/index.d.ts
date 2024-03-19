import { EventEmitter } from "../../../../stencil-public-runtime";
export declare class ZMyzListItem {
    /** content text */
    text: string;
    /** link url (optional) */
    link?: string;
    /** link target (optional) */
    linktarget?: string;
    /** icon name (optional) */
    icon?: string;
    /** id (optional) */
    listitemid?: string;
    /** data-action attribute (optional) */
    action?: string;
    /** underlined style flag */
    underlined: boolean;
    /** emitted on list item link click, returns linkId */
    zListItemLinkClick: EventEmitter;
    private emitZListItemLinkClick;
    /** emitted on list item click, returns listitemid */
    zListItemClick: EventEmitter;
    private emitZListItemClick;
    constructor();
    render(): HTMLLIElement;
}
