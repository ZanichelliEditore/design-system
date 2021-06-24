/**
 * @slot - tab label
 */
export declare class ZNavigationTab {
  hostElement: HTMLElement;
  selected?: boolean;
  disabled?: boolean;
  private emitSelected;
  onFocus(): void;
  onClick(): void;
  onSelected(): void;
  render(): any[];
}
