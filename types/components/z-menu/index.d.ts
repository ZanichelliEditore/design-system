import { EventEmitter } from "../../stencil-public-runtime";
/**
 * @slot - Menu label
 * @slot header - Header to display as the first entry of the open menu.
 * @slot item - Single entry of the section. Can be slotted multiple times to insert items onto the menu. Use `z-menu-section` for submenus.
 * @cssprop --z-menu-label-color - Color of the label's text.
 */
export declare class ZMenu {
    hostElement: HTMLZMenuElement;
    /** Flag to set the active status of the menu. */
    active?: boolean;
    /**
     * Flag to set the display mode of the list.
     * If true, the list will be absolutely positioned under the menu label,
     * stacked beneath it otherwise.
     */
    floating?: boolean;
    /** The opening state of the menu. */
    open: boolean;
    /**
     * Tells the component that it's placed in a vertical context with other `ZMenu`s (e.g. in the ZAppHeader's offcanvas).
     * A small border is placed under it as a separator from other elements.
     */
    verticalContext: boolean;
    hasHeader: boolean;
    hasContent: boolean;
    private content;
    /** Animation frame request id. */
    private raf;
    /** The menu has been opened. */
    opened: EventEmitter;
    /** The menu has been closed. */
    closed: EventEmitter;
    private currentIndex;
    private currentCanvasOpenStatus;
    private firstElMenu;
    private lastElMenu;
    private toggle;
    /** Close the floating list when a click is performed outside of this Element. */
    handleClick(ev: MouseEvent): void;
    canvasOpenStatusChanged(e: CustomEvent): void;
    handleKeyDown(e: KeyboardEvent): void;
    private handleNavigationSideArrow;
    private handleArrowsNav;
    private getNextItem;
    private focusToParentAndCloseMenu;
    onOpenChanged(): void;
    constructor();
    componentWillLoad(): void;
    /**
     * Sets slotted item text as `data-text` attribute value, to let CSS use it through `attr()`.
     * @param ev Slotchange event
     */
    private onLabelSlotChange;
    /**
     * Correctly set position of the floating menu in order to prevent overflow.
     * @param live Should run the method on every refresh frame.
     */
    private reflow;
    /**
     * Check if some content slot is set.
     */
    private checkContent;
    /**
     * Set `menuitem` role to all menu items.
     * Set the item's inner text to the `data-text` attribute (this is for using bold text avoiding layout shifts).
     */
    private onItemsChange;
    private focusFirstItemOnKeyUp;
    private renderMenuLabel;
    render(): HTMLZMenuElement;
}
