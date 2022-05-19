export declare class ZTableEmptyBox {
  hostElement: HTMLElement;
  /** Sets main title message*/
  message?: string;
  /** Sets message */
  subtitle?: string;
  /** Checks if cta1 or cta2 slots exist */
  hasCta1Slot: boolean;
  hasCta2Slot: boolean;
  componentWillLoad(): void;
  render(): any;
}
