import { EventEmitter } from "../../stencil-public-runtime";
import { HostElement } from "../../stencil-public-runtime";
import { PopoverPosition, PopoverBorderRadius, PopoverShadow } from "../../beans";
export declare class ZPopoverDeprecated {
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
  private emitTriggerClick;
  private popoverElem;
  /**
   * Constructor.
   */
  constructor();
  private openPopover;
  closePopover(): void;
  closePopoverWithKeyboard(e: KeyboardEvent): void;
  private handleClick;
  private handleKeyDown;
  handleOutsideClick(e: MouseEvent): void;
  render(): HostElement;
}
