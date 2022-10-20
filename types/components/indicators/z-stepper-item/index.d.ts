export declare class ZStepperItem {
  /**
   * The number of the step item.
   */
  index: number;
  /**
   * The href to navigate on click.
   */
  href: string;
  /**
   * The pressed state of the item.
   */
  pressed: boolean;
  /**
   * The disabled state of the item.
   */
  disabled: boolean;
  render(): HTMLAnchorElement | HTMLButtonElement;
}
