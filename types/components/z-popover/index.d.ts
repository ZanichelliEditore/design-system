import { EventEmitter } from "../../stencil-public-runtime";
import { PopoverPosition, PopoverBorderRadius, PopoverShadow } from "../../beans";
export declare class ZPopover {
  /** [optional] Popover position */
  position?: PopoverPosition;
  /** [optional] Background color token for popover */
  backgroundColor?: string;
  /** [optional] Border radius token for popover */
  borderRadius?: PopoverBorderRadius;
  /** [optional] Box shadow token for popover */
  boxShadow?: PopoverShadow;
  /** [optional] Show or hide arrow */
  showArrow?: boolean;
  /** [optional] Sets padding for Popover container */
  padding?: string;
  isVisible: boolean;
  popoverPosition: PopoverPosition;
  /** Emitted on popover click, returns isVisible state */
  triggerClick: EventEmitter;
  emitTriggerClick(): void;
  private popoverElem;
  /**
   * Constructor.
   */
  constructor();
  openPopover(): void;
  closePopover(): void;
  closePopoverWithKeyboard(e: any): void;
  handleClick(event: any): void;
  handleKeyDown(event: any): void;
  handleOutsideClick(e: any): void;
  render(): any;
}
