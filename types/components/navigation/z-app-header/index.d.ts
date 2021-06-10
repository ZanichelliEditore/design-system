export declare class ZAppHeader {
  hostElement: HTMLElement;
  /**
   * Stuck mode for the header.
   * You can programmatically set it using an IntersectionObserver.
   * **Optional**
   */
  stuck: boolean;
  /**
   * Collapse the menu container into a side drawer, for a better experience on mobile devices.
   * **Optional**
   */
  drawer: boolean;
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
   * **Optional**
   */
  flow: 'auto' | 'stack';
  /**
   * The opening state of the drawer.
   */
  drawerOpen: boolean;
  /**
   * The stucked state of the bar.
   */
  stucked: boolean;
  private container?;
  private menuElements?;
  private observer?;
  constructor();
  componentDidLoad(): void;
  private get title();
  private get scrollParent();
  private collectMenuElements;
  private setStuckPosition;
  onStuckMode(): void;
  enableStuckObserver(): void;
  disableStuckMode(): void;
  onStucked(): void;
  setMenuFloatingMode(): void;
  render(): any;
  openDrawer(): void;
  closeDrawer(): void;
}
