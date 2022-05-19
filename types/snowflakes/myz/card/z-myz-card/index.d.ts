import { LicenseTypeEnum } from "../../../../beans/index";
/**
 * @slot  - generic card slot
 */
export declare class ZMyzCardComponent {
  /** faded status */
  faded: boolean;
  /** graphic variant (optional) */
  cardtype?: LicenseTypeEnum;
  /** pressed status */
  ispressed: boolean;
  /** highlighted status */
  ishighlighted: boolean;
  retrieveClass(): string;
  render(): any;
}
