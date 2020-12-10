import { EventEmitter } from "../../../stencil-public-runtime";
export declare class ZListItem {
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
    emitZListItemLinkClick(e: MouseEvent, linkId: any): void;
    /** emitted on list item click, returns listitemid */
    zListItemClick: EventEmitter;
    emitZListItemClick(e: MouseEvent, listitemid: any): void;
    constructor();
    render(): any;
}
