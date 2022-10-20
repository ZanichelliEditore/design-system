import { StatusTagStatus, ThemeVariant } from "../../beans";
import { HostElement } from "../../stencil-public-runtime";
export declare class ZStatusTag {
  /** [optional] Status tag icon */
  icon?: string;
  /** [optional] Status tag text */
  text?: string;
  /** [optional] Hide the text and show it on hover*/
  expandable?: boolean;
  /** [optional] Status tag color */
  status?: StatusTagStatus;
  /** [optional] Status tag style */
  variant?: ThemeVariant;
  constructor();
  render(): HostElement;
}
