/**
 * @deprecated
 */
export declare class ZTableEmptyBox {
  hostElement: HTMLZTableEmptyBoxElement;
  /** Sets main title message*/
  message?: string;
  /** Sets message */
  subtitle?: string;
  /** Checks if cta1 or cta2 slots exist */
  private hasCta1Slot;
  private hasCta2Slot;
  componentWillLoad(): void;
  render(): HTMLZTableEmptyBoxElement;
}
