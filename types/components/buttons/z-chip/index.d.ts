import { EventEmitter } from "../../../stencil-public-runtime";
import { ZChipType } from "../../../beans";
export declare class ZChip {
  el: HTMLElement;
  icon?: string;
  type?: ZChipType;
  interactiveIcon?: string;
  disabled?: boolean;
  interactiveIconClick: EventEmitter;
  emitinteractiveIconClick(): void;
  getIconSize(): 22 | 14;
  render(): any;
}
