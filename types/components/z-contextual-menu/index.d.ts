import { EventEmitter } from "../../stencil-public-runtime";
import { PopoverPositions } from "../../beans";
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
  popoverPosition?: PopoverPositions;
  private triggerButton?;
  private popover?;
  /** remove filter click event, returns filterid */
  clickContextualMenu: EventEmitter;
  private jsonElements;
  componentWillRender(): void;
  componentDidLoad(): void;
  showIcon(): boolean;
  togglePopover(): void;
  render(): any[];
}
