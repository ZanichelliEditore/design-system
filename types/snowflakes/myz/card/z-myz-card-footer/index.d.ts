import { LicenseTypeEnum } from "../../../../beans/index";
/**
 * @slot toggle - toggle button slot
 * @slot list - card resources list slot
 */
export declare class ZMyzCardFooter {
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
  /** footer opened by default (optional) */
  opened?: boolean;
  /** display footer custom slotted content */
  customContent: boolean;
  isOpen: boolean;
  allowTooltipAuthors: boolean;
  private ellipsisAuthors?;
  handleToggle(): void;
  getTitleAuthors(): string;
  componentWillLoad(): void;
  elementsEllipsis(): void;
  elementAuthorsHasEllipsis(): boolean;
  retrieveClass(): {
    isopen: boolean;
    real: boolean;
    trial: boolean;
    temp: boolean;
    customContent: boolean;
  };
  footerTransitionHandler(e: TransitionEvent): void;
  render(): any;
}
