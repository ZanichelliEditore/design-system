import { EventEmitter } from "../../../stencil-public-runtime";
import { ZtoggleSwitchPositionEnum } from "../../../beans";
export declare class ZToggleSwitch {
  disabled?: boolean;
  labelPosition?: ZtoggleSwitchPositionEnum;
  checked?: boolean;
  htmlid: string;
  toggleClick: EventEmitter;
  emitToggleClick(): void;
  handleClick(ev: any): void;
  render(): any[];
}
