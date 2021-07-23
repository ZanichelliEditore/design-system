import { DividerSize, ExpandableListStyle, ExpandableListButtonAlign, ListDividerType, ListSize } from "../../../beans";
export declare class ZListElement {
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
  /**
   * [optional] Sets size of inside elements.
   */
  size?: ListSize;
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
