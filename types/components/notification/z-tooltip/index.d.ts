import { PopoverPositions } from "../../../beans";
/**
 * Tooltip component.
 * It is basically a wrapper for the `<z-popover>` component with custom configuration.
 *
 * @cssprop --z-popover-theme--surface - background color of the popover.
 * @cssprop --z-popover-theme--text - foreground color of the popover.
 * @cssprop --z-popover-shadow-filter - drop-shadow filter of the popover.
 */
export declare class ZTooltip {
  /** Tooltip position. */
  position: PopoverPositions;
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
  private popover;
  onPopoverOpenChange(): void;
  render(): HTMLZPopoverElement;
}
