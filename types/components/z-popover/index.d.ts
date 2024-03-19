import { EventEmitter } from "../../stencil-public-runtime";
import { PopoverPosition } from "../../beans";
/**
 * Popover component.
 *
 * @cssprop --z-popover-theme--surface - background color of the popover.
 * @cssprop --z-popover-theme--text - foreground color of the popover.
 * @cssprop --z-popover-padding - padding of the popover.
 * @cssprop --z-popover-shadow-filter - drop-shadow filter of the popover. Defaults to `drop-shadow(0 1px 2px var(--shadow-color-base))`.
 */
export declare class ZPopover {
    /** Popover position. */
    position: PopoverPosition;
    /**
     * The open state of the popover.
     */
    open: boolean;
    /**
     * The selector or the element bound with the popover.
     */
    bindTo?: string | HTMLElement;
    /**
     * Whether to show popover's arrow.
     */
    showArrow: boolean;
    /**
     * Whether to center the popup on the main side (according to "position").
     */
    center: boolean;
    /**
     * If true, the popover can be closed by clicking outside of it or pressing the escape key.
     * Otherwise, it will be closed only programmatically (by setting `open` to `false`).
     */
    closable: boolean;
    /**
     * The current position of the popover.
     */
    currentPosition?: PopoverPosition;
    /**
     * Position change event.
     */
    positionChange: EventEmitter;
    /**
     * Open change event.
     */
    openChange: EventEmitter;
    host: HTMLZPopoverElement;
    private animationFrameRequestId?;
    closePopoverWithKeyboard(e: KeyboardEvent): void;
    /**
     * Close the popover when clicking outside of its content.
     * Stop event propagation if the click was fired by popover's trigger element,
     * to prevent close and reopen glitches.
     * @param {MouseEvent} e
     */
    handleOutsideClick(e: MouseEvent): void;
    validatePosition(newValue: PopoverPosition): void;
    /**
     * Setup popover behaviors on opening.
     */
    onOpen(): void;
    disconnectedCallback(): void;
    /**
     * Set the position of the popover.
     */
    private setPosition;
    componentWillLoad(): void;
    render(): HTMLSlotElement;
}
