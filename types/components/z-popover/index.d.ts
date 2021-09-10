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
  private popoverElem;
  private defaultPosition;
  /**
   * Constructor.
   */
  constructor();
  closePopover(): void;
  closePopoverWithKeyboard(e: any): void;
  handleClick(event: any): void;
  handleKeyDown(event: any): void;
  handleOutsideClick(e: any): void;
  checkSpaceAvailable(): void;
  render(): any;
}
