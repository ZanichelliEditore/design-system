import { PopoverPosition } from "../../beans";
/**
 * Tooltip component.
 * It is basically a wrapper for the `<z-popover>` component with custom configuration.
 *
 * @cssprop --z-tooltip-theme--surface - background color of the popover.
 * @cssprop --z-tooltip-theme--text - foreground color of the popover.
 * @cssprop --z-tooltip-shadow-filter - drop-shadow filter of the popover.
 */
export declare class ZTooltip {
    /** Tooltip position. */
    position: PopoverPosition;
    /** Enable tooltip dark mode. */
    dark: boolean;
    /**
     * The open state of the tooltip.
     */
    open: boolean;
    /**
     * The selector or the element bound with the tooltip.
     */
    bindTo?: string | HTMLElement;
    /**
     * Reflects `closable` prop of the popover.
     * "If true, the popover can be closed by clicking outside of it or pressing the escape key.
     * Otherwise, it will be closed only programmatically (by setting `open` to `false`)."
     */
    closable: boolean;
    private popoverEl;
    onPopoverOpenChange(): void;
    render(): HTMLZPopoverElement;
}
