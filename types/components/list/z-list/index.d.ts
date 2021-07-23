import { ListSize } from "../../../beans";
export declare class ZList {
  host: HTMLElement;
  /**
   * [optional] Sets size of inside elements.
   */
  size?: ListSize;
  setChildrenSizeType(): void;
  componentDidLoad(): void;
  render(): any;
}
