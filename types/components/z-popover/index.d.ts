import { EventEmitter } from "../../stencil-public-runtime";
import { PopoverPositions } from "../../beans";
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
  position: PopoverPositions;
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
   * Whether the popover should be closed when the user clicks outside of it or hit "ESC".
   */
  closable: boolean;
  /**
   * The current position of the popover.
   */
  currentPosition?: PopoverPositions;
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
  handleOutsideClick(e: MouseEvent): void;
  validatePosition(newValue: PopoverPositions): void;
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