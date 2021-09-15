import { EventEmitter } from "../../stencil-public-runtime";
export declare class ZContextualMenu {
  /**
   *  elements of ZContextualMenu
   */
  elements?: string;
  /**
   * [optional] Sets text color of ZContextualMenu's content
   */
  color?: string;
  /** remove filter click event, returns filterid */
  clickContextualMenu: EventEmitter;
  private jsonElements;
  componentWillRender(): void;
  showIcon(): boolean;
  render(): any;
}
