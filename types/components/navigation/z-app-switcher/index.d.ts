import { EventEmitter } from "../../../stencil-public-runtime";
import { ThemeVariantBean } from "../../../beans";
export declare class ZAppSwitcher {
  /** theme variant, default 'dark' */
  theme?: ThemeVariantBean;
  isopen: boolean;
  constructor();
  /** emitted on app button icon click, returns open/closed state */
  appButtonClick: EventEmitter;
  emitAppButtonClick(): void;
  render(): any;
}
