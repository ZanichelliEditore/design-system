import { LicenseTypeEnum } from "../../../beans/index";
/**
 * @slot toggle - toggle button slot
 * @slot list - card resources list slot
 */
export declare class ZCardFooter {
  /** volume title */
  titolo: string;
  /** authors name text */
  autori: string;
  /** volume isbn */
  isbn: string;
  /** faded status */
  faded: boolean;
  /** card graphic variant (optional) */
  cardtype?: LicenseTypeEnum;
  isOpen: boolean;
  allowTooltipAuthors: boolean;
  private ellipsisAuthors?;
  handleToggle(): void;
  getTitleAuthors(): string;
  elementsEllipsis(): void;
  elementAuthorsHasEllipsis(): boolean;
  retrieveClass(): {
    isopen: boolean;
    real: boolean;
    trial: boolean;
  };
  footerTransitionHandler(e: TransitionEvent): void;
  render(): any;
}
