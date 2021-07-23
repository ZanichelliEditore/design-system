import { DividerSize, ListSize, ListDividerType } from "../../../beans";
export declare class ZListGroup {
  host: HTMLElement;
  /**
   * [optional] Sets size of inside elements.
   */
  size?: ListSize;
  /**
   * [optional] Sets the position where to insert the divider.
   */
  dividerType?: ListDividerType;
  /**
   * [optional] Sets the divider size.
   */
  dividerSize?: DividerSize;
  /**
   * [optional] Sets the divider color.
   */
  dividerColor?: string;
  hasHeader: boolean;
  componentDidLoad(): void;
  componentWillLoad(): void;
  render(): any;
}
