import { EventEmitter } from "../../../stencil-public-runtime";
import { ThemeVariant } from "../../../beans";
export declare class ZAppSwitcher {
  /** theme variant, default 'dark' */
  theme?: ThemeVariant;
  isopen: boolean;
  constructor();
  /** emitted on app button icon click, returns open/closed state */
  appButtonClick: EventEmitter;
  private emitAppButtonClick;
  render(): HTMLButtonElement;
}
