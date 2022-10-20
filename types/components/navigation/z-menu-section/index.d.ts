import { EventEmitter } from "../../../stencil-public-runtime";
import { HostElement } from "../../../stencil-public-runtime";
/**
 * @slot - Menu section label
 * @slot item - Single entry of the section. Can be slotted multiple times to insert items.
 */
export declare class ZMenuSection {
  /** Active state */
  active?: boolean;
  open: boolean;
  hasContent: boolean;
  hostElement: HTMLZMenuSectionElement;
  /** The section has been opened. */
  opened: EventEmitter;
  /** The section has been closed. */
  closed: EventEmitter;
  private toggle;
  /** Close the list when a click is performed outside of this Element. */
  handleClick(ev: MouseEvent): void;
  /**
   * Check if some content slot is set.
   */
  private checkContent;
  componentWillLoad(): void;
  render(): HostElement;
}
