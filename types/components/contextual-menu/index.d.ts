import { EventEmitter } from "../../stencil-public-runtime";
export declare class ContextualMenu {
  /**
   *  elements of ContextualMenu
   */
  elements?: string;
  /**
   * [optional] Sets text color of ContextualMenu's content
   */
  color?: string;
  /** remove filter click event, returns filterid */
  clickContextualMenu: EventEmitter;
  private jsonElements;
  componentWillLoad(): void;
  showIcon(): boolean;
  render(): any;
}
