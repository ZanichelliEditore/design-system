import { EventEmitter } from '../../../stencil-public-runtime';
/**
 * @slot - Menu label
 * @slot header - Header to display as the first entry of the open menu.
 * @slot item - Single entry of the section. Can be slotted multiple times to insert items onto the menu. Use `z-menu-section` for submenus.
 */
export declare class ZMenu {
  /** Flag to set the active status of the menu. */
  active?: boolean;
  /**
   * Flag to set the display mode of the list.
   * If true, the list will be absolutely positioned under the menu label,
   * stacked beneath it otherwise.
   * @default false
   */
  floating?: boolean;
  /**
   * The opening state of the menu.
   * @default false
   */
  open: boolean;
  hasHeader: boolean;
  hasContent: boolean;
  hostElement: HTMLElement;
  private content;
  private raf;
  /** The menu has been opened. */
  opened: EventEmitter;
  /** The menu has been closed. */
  closed: EventEmitter;
  toggle(): void;
  /** Close the floating list when a click is performed outside of this Element. */
  handleClick(ev: any): void;
  onOpenChanged(): void;
  /**
   * Correctly set position of the floating menu in order to prevent overflow.
   * @param live Should run the method on every refresh frame.
   */
  reflow(live?: boolean): void;
  /**
   * Check if some content slot is set.
   */
  checkContent(): void;
  componentWillLoad(): void;
  render(): any;
}
