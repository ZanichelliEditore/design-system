import { EventEmitter } from "../../../stencil-public-runtime";
import { InputStatus } from "../../../beans";
export declare class ZOtp {
  /** Input number */
  inputNum?: number;
  /** Input status */
  status?: InputStatus;
  /** Input message */
  message?: string;
  private otp;
  private otpRef;
  /** Otp change event */
  otpChange: EventEmitter;
  private emitInputChange;
  componentWillLoad(): void;
  render(): HTMLDivElement;
}
