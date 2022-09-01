import { InfoRevealPositionBean } from "../../beans";
export declare class ZInfoReveal {
  el: HTMLElement;
  /** Name of the icon for the open button */
  icon?: string;
  position?: InfoRevealPositionBean;
  /** Text that appears on closed panel next to the open button. */
  label?: string;
  /** Whether the info panel is open. */
  open: boolean;
  /** Current index for the info queue. */
  currentIndex: number;
  watchItems(): void;
  /**
   * Open the info box.
   */
  openInfoBox(): void;
  /**
   * Close the info box.
   */
  closeInfoBox(): void;
  /**
   * Navigate slotted info.
   * It closes the info box after the last info has been navigated.
   */
  next(): void;
  render(): any;
}
