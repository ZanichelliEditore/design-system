import { EventEmitter } from "../../../stencil-public-runtime";
import { InputStatus } from "../../../beans";
/**
 * @slot username - username input
 * @slot password - password input
 * @slot login - login button
 * @slot signup - signup button
 * @slot provider - expternal providers login buttons
 */
export declare class ZModalLogin {
  hostElement: HTMLZModalLoginElement;
  /** Forgot Password Url */
  forgotPasswordUrl: string;
  /** Login modal title */
  heading?: string;
  /** Username/password input status */
  status?: InputStatus;
  /** Username helper message */
  message?: string;
  /** Password helper message */
  pwdmessage?: string;
  externalProviderCheck: boolean;
  componentDidLoad(): void;
  /** Emitted on login submit */
  loginSubmit: EventEmitter;
  private emitLoginSubmit;
  /** Emitted on status update */
  statusUpdate: EventEmitter;
  private emitStatusUpdate;
  /** Emitted on signup button click */
  signupClick: EventEmitter;
  private emitSignupClick;
  /** Emitted on zaino digitale button click */
  zainoDigitaleClick: EventEmitter;
  private emitZainoDigitaleClick;
  private handleInputKeyUp;
  private handleInputChange;
  private cleanUsername;
  private renderZainoDigitaleButton;
  render(): HTMLZModalElement;
}
