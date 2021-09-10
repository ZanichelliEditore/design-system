export declare class ZIcon {
  /** icon name (choice between available icons) */
  name: string;
  /** icon height (optional) */
  height?: number;
  /** icon width (optional) */
  width?: number;
  /** icon id (optional) */
  iconid?: string;
  /** icon fill (optional) */
  fill?: string;
  selectPathOrPolygon(iconName: string): HTMLElement;
  render(): any;
}
