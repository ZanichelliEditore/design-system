import { EventEmitter } from "../../../stencil-public-runtime";
import { LabelPosition } from "../../../beans";
export declare class ZToggleSwitch {
  disabled?: boolean;
  labelPosition?: LabelPosition;
  checked?: boolean;
  htmlid: string;
  toggleClick: EventEmitter;
  emitToggleClick(): void;
  handleClick(ev: any): void;
  render(): any[];
}
