import { EventEmitter } from "../../stencil-public-runtime";
import { PopoverPosition } from "../../beans";
export declare class ZContextualMenu {
  /**
   *  elements of ZContextualMenu
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
  /** remove filter click event, returns filterid */
  clickContextualMenu: EventEmitter;
  private jsonElements;
  componentWillRender(): void;
  showIcon(): boolean;
  render(): any;
}
