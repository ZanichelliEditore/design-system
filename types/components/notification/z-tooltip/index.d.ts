import { TooltipPosition } from "../../../beans/index";
export declare class ZTooltip {
  /** content text */
  content: string;
  /** tooltip position variant */
  type: TooltipPosition;
  getArrowClass(): "tooltip tooltip-bottom-arrow" | "tooltip tooltip-top-arrow" | "tooltip tooltip-right-arrow" | "tooltip tooltip-left-arrow" | "tooltip tooltip-bottom-right-arrow" | "tooltip tooltip-bottom-left-arrow" | "tooltip tooltip-top-right-arrow" | "tooltip tooltip-top-left-arrow";
  render(): any;
}
