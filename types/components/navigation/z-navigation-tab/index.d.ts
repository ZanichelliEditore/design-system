/**
 * @slot icon - tab icon
 * @slot label - tab label
 */
export declare class ZNavigationTab {
  host: HTMLElement;
  selected?: boolean;
  disabled?: boolean;
  orientation: string;
  size: string;
  private emitSelected;
  onFocus(): void;
  onClick(): void;
  onSelected(): void;
  render(): any;
}
