import { EventEmitter } from "../../../stencil-public-runtime";
import { InputStatusBean } from "../../../beans";
export declare class ZOtp {
  inputNum?: number;
  status?: InputStatusBean;
  message?: string;
  private otp;
  private otpRef;
  otpChange: EventEmitter;
  emitInputChange(value: string): void;
  componentWillLoad(): void;
  render(): any;
}
