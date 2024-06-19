/**
 * Ztag component.
 * @slot - The text of the z-tag.
 * @cssprop --z-tag-text-color - text and icon color using tokens.
 * @cssprop --z-tag-bg - background color of the z-tag.
 */
export declare class ZTag {
    /** [optional] Tag icon */
    icon?: string;
    /** [optional] Hide the text and show it on hover*/
    expandable?: boolean;
    render(): HTMLZTagElement;
}
