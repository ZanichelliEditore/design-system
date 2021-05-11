import { EventEmitter } from '../../../stencil-public-runtime';
/**
 * @slot - Menu section label
 * @slot item - Single entry of the section. Can be slotted multiple times to insert items.
 */
export declare class ZMenuSection {
  active?: boolean;
  open: boolean;
  hasContent: boolean;
  hostElement: HTMLElement;
  /** The section has been opened. */
  opened: EventEmitter;
  /** The section has been closed. */
  closed: EventEmitter;
  toggle(): void;
  /** Close the list when a click is performed outside of this Element. */
  handleClick(ev: any): void;
  /**
   * Check if some content slot is set.
   */
  checkContent(): void;
  componentWillLoad(): void;
  render(): any;
}
