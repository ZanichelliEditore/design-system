import { EventEmitter } from "../../../stencil-public-runtime";
import { HostElement } from "../../../stencil-public-runtime";
import { InputStatusBean } from "../../../beans";
/**
 * @slot username - username input
 * @slot password - password input
 * @slot login - login button
 * @slot signup - signup button
 * @slot provider - expternal providers login buttons
 */
export declare class zModalLogin {
  hostElement: HostElement;
  /** Forgot Password Url */
  forgotPasswordUrl: string;
  /** Login modal title */
  heading?: string;
  /** Username/password input status */
  status?: InputStatusBean;
  /** Username helper message */
  message?: string;
  /** Password helper message */
  pwdmessage?: string;
  externalProviderCheck: boolean;
  componentDidLoad(): void;
  /** Emitted on login submit */
  loginSubmit: EventEmitter;
  emitLoginSubmit(): void;
  /** Emitted on status update */
  statusUpdate: EventEmitter;
  emitStatusUpdate(status: InputStatusBean): void;
  /** Emitted on signup button click */
  signupClick: EventEmitter;
  emitSignupClick(): void;
  /** Emitted on zaino digitale button click */
  zainoDigitaleClick: EventEmitter;
  emitZainoDigitaleClick(): void;
  handleInputKeyUp(e: KeyboardEvent): void;
  handleInputChange(): void;
  cleanUsername(username: string): string;
  renderZainoDigitaleButton(): any;
  render(): any;
}
