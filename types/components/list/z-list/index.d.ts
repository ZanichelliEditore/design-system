import { HostElement } from "../../../stencil-public-runtime";
import { ListSize } from "../../../beans";
export declare class ZList {
  host: HTMLZListElement;
  /**
   * [optional] Sets size of inside elements.
   */
  size?: ListSize;
  private setChildrenSizeType;
  componentDidLoad(): void;
  render(): HostElement;
}
