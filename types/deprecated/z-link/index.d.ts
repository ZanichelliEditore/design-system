import { EventEmitter } from "../../stencil-public-runtime";
/**
 * @deprecated - use a native `<a>` with the `z-link` CSS class instead
 * @slot - link content
 */
export declare class ZLink {
    /** link id (optional) */
    htmlid?: string;
    /** link url (optional) */
    href?: string;
    /** link target (optional) */
    target?: string;
    /** tabindex link attribute (optional) */
    htmltabindex?: number;
    /** disable link flag (optional) */
    isdisabled?: boolean;
    /** active link flag (optional) */
    isactive?: boolean;
    /** white variant flag (optional) */
    iswhite?: boolean;
    /** link text variant (optional) */
    textcolor?: "primary" | "inverse" | "white" | "black";
    /** link icon name (optional) */
    icon?: string;
    /** big link version */
    big?: boolean;
    /** link icon position (optional) */
    iconposition?: "left" | "right";
    /** draw underline on text (optional) */
    underline?: boolean;
    /** emitted on link click, returns linkId */
    zLinkClick: EventEmitter;
    hostElement: HTMLZLinkElement;
    iconSize: number;
    constructor();
    componentWillLoad(): void;
    private emitZLinkClick;
    private emitZLinkInteraction;
    componentDidLoad(): void;
    render(): HTMLAnchorElement;
}
