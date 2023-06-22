import { EventEmitter } from "../../stencil-public-runtime";
import { PopoverPosition } from "../../beans";
export declare class ZContextualMenu {
  /**
   * Elements of ZContextualMenu
   */
  elements?: string;
  /**
   * [optional] Sets text color of ZContextualMenu's content
   */
  color?: string;
  /**
   * [optional] Sets the position of the popover
   */
  popoverPosition?: PopoverPosition;
  private triggerButton?;
  private popoverEl?;
  /** remove filter click event, returns filterid */
  clickContextualMenu: EventEmitter;
  private jsonElements;
  componentWillRender(): void;
  componentDidLoad(): void;
  private showIcon;
  private togglePopover;
  render(): HTMLZContextualMenuElement;
}
