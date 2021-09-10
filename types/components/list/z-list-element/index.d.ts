import { EventEmitter } from "../../../stencil-public-runtime";
import { DividerSize, ExpandableListButtonAlign, ExpandableListStyle, ListDividerType, ListSize } from "../../../beans";
export declare class ZListElement {
  host: HTMLElement;
  /** remove filter click event, returns filterid */
  accessibleFocus: EventEmitter<number>;
  /** remove filter click event, returns filterid */
  clickItem: EventEmitter;
  accessibleFocusHandler(e: CustomEvent): void;
  /**
   * [optional] Align expandable button left or right.
   */
  alignButton?: ExpandableListButtonAlign;
  /**
   * [optional] Sets element clickable.
   */
  clickable?: boolean;
  /**
   * [optional] Sets the divider color.
   */
  dividerColor?: string;
  /**
   * [optional] Sets the position where to insert the divider.
   */
  dividerType?: ListDividerType;
  /**
   * [optional] Sets the divider size.
   */
  dividerSize?: DividerSize;
  /**
   * [optional] Sets element as expandable.
   */
  expandable?: boolean;
  /**
   * [optional] Sets expandable style to element.
   */
  expandableStyle?: ExpandableListStyle;
  listElementId?: number;
  /**
   * [optional] Sets size of inside elements.
   */
  size?: ListSize;
  /**
   * [optional] Sets text color of the element.
   */
  color?: string;
  /**
   * [optional] Sets disabled style of the element.
   */
  disabled?: boolean;
  /**
   * [optional] If is used in ContextualMenu component
   */
  isContextualMenu?: boolean;
  showInnerContent: boolean;
  private openElementConfig;
  /**
   * Constructor.
   */
  constructor();
  /**
   * Handler for click on element. If element is expandable, change state.
   * @returns void
   */
  handleClick(): void;
  calculateClass(): "container-contextual-menu" | "container";
  handleKeyDown(event: any): void;
  /**
   * Renders button to expand element.
   * @returns expadable button
   */
  renderExpandableButton(): any;
  /**
   * Renders expanded content if element is expandable.
   * @returns expanded content
   */
  renderExpandedContent(): any;
  render(): any;
}
