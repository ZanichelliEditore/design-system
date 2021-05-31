import { LicenseTypeEnum } from "../../../../beans/index";
/**
 * @slot icon - card header icon slot
 */
export declare class ZMyzCardHeader {
  /** volume title */
  titolo: string;
  /** faded status */
  faded: boolean;
  /** card graphic variant (optional) */
  cardtype?: LicenseTypeEnum;
  allowTooltip: boolean;
  private ellipsis?;
  getTitle(): string;
  componentDidLoad(): void;
  elementHasEllipsis(): boolean;
  retrieveClass(): {
    real: boolean;
    trial: boolean;
    faded: boolean;
  };
  render(): any;
}
