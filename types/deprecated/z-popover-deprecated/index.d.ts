import { EventEmitter } from "../../stencil-public-runtime";
import { PopoverPositions } from "../../beans";
/**
 * Popover component.
 *
 * @cssprop --z-popover-theme--surface - background color of the popover.
 * @cssprop --z-popover-theme--text - foreground color of the popover.
 * @cssprop --z-popover-shadow - shadow of the popover.
 */
export declare class ZPopoverDeprecated {
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
   * Whether center the popup on the main side - according to "position".
   */
  center: boolean;
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
  host: HTMLElement;
  private animationFrameRequestId?;
  closePopoverWithKeyboard(e: any): void;
  handleOutsideClick(e: any): void;
  validatePosition(newValue: any): void;
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
  render(): any;
}
