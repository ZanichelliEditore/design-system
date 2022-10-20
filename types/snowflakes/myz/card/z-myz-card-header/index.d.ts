import { LicenseType } from "../../../../beans/index";
/**
 * @slot icon - card header icon slot
 */
export declare class ZMyzCardHeader {
  /** volume title */
  titolo: string;
  /** faded status */
  faded: boolean;
  /** card graphic variant (optional) */
  cardtype?: LicenseType;
  allowTooltip: boolean;
  private ellipsis?;
  private getTitle;
  componentDidLoad(): void;
  private elementHasEllipsis;
  private retrieveClass;
  render(): HTMLElement;
}
