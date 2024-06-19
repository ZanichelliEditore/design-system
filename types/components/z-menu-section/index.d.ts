import { EventEmitter } from "../../stencil-public-runtime";
/**
 * A component to create submenus inside the ZMenu.
 * @slot - Label of the menu section.
 * @slot item - Single entry of the section. Set the same slot name to different items to put many of them. Add the `active` attribute to a slotted item to highlight it.
 */
export declare class ZMenuSection {
    hostElement: HTMLZMenuSectionElement;
    /** Active state */
    active?: boolean;
    open: boolean;
    hasContent: boolean;
    /** The section has been opened. */
    opened: EventEmitter;
    /** The section has been closed. */
    closed: EventEmitter;
    private toggle;
    /** Close the list when a click is performed outside of this Element. */
    handleClick(ev: MouseEvent): void;
    /**
     * Check if some content slot is set.
     */
    private checkContent;
    /**
     * Sets slotted item text as `data-text` attribute value, to let CSS use it through `attr()`.
     * @param ev Slotchange event
     */
    private onLabelSlotChange;
    componentWillLoad(): void;
    render(): HTMLZMenuSectionElement;
}
