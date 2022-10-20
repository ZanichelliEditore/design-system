import { EventEmitter } from "../../../stencil-public-runtime";
import { HostElement } from "../../../stencil-public-runtime";
/**
 * @slot title
 * @slot subtitle
 * @slot stucked-title - Title for the stucked header. By default it uses the text from the `title` slot.
 */
export declare class ZAppHeader {
  hostElement: HTMLZAppHeaderElement;
  /**
   * Stuck mode for the header.
   * You can programmatically set it using an IntersectionObserver.
   * **Optional**
   */
  stuck: boolean;
  /**
   * Set the hero image source for the header.
   * You can also use a slot="hero" node for advanced customisation.
   * **Optional**
   */
  hero: string;
  /**
   * Should place an overlay over the hero image.
   * Useful for legibility purpose.
   * **Optional**
   */
  overlay: boolean;
  /**
   * Control menu bar position in the header.
   * - auto: the menu bar is positioned near the title
   * - stack: the menu bar is positioned below the title
   * - offcanvas: the menu bar is not displayed and a burger icon appears to open the offcanvas menu
   *
   * **Optional**
   */
  flow: "auto" | "stack" | "offcanvas";
  /**
   * The opening state of the drawer.
   */
  drawerOpen: boolean;
  /**
   * The stucked state of the bar.
   */
  stucked: boolean;
  /**
   * Current count of menu items.
   */
  menuLength: number;
  /**
   * Emitted when the `stucked` state of the header changes
   */
  sticking: EventEmitter;
  private emitStickingEvent;
  private container?;
  private menuElements?;
  private observer?;
  constructor();
  componentDidLoad(): void;
  private get title();
  private get scrollParent();
  private collectMenuElements;
  onStuckMode(): void;
  private enableStuckObserver;
  private disableStuckMode;
  onStucked(): void;
  setMenuFloatingMode(): void;
  render(): HostElement;
  private openDrawer;
  private closeDrawer;
}
