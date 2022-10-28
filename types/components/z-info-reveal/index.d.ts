import { InfoRevealPosition } from "../../beans";
export declare class ZInfoReveal {
  el: HTMLZInfoRevealElement;
  /** Name of the icon for the open button */
  icon?: string;
  /** Info reveal's position */
  position?: InfoRevealPosition;
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
  private openInfoBox;
  /**
   * Close the info box.
   */
  private closeInfoBox;
  /**
   * Navigate slotted info.
   * It closes the info box after the last info has been navigated.
   */
  private next;
  render(): HTMLZInfoRevealElement;
}
