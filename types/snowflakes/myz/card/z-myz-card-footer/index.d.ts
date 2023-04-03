import { LicenseType } from "../../../../beans/index";
/**
 * @slot toggle - toggle button slot
 * @slot list - card resources list slot
 */
export declare class ZMyzCardFooter {
  host: HTMLZMyzCardFooterElement;
  /** volume title */
  titolo: string;
  /** authors name text */
  autori: string;
  /** volume isbn */
  isbn: string;
  /** faded status */
  faded: boolean;
  /** card graphic variant (optional) */
  cardtype?: LicenseType;
  /** footer opened by default (optional) */
  opened?: boolean;
  /** display footer custom slotted content */
  customContent: boolean;
  isOpen: boolean;
  allowTooltipAuthors: boolean;
  private ellipsisAuthors?;
  handleToggle(): void;
  private getTitleAuthors;
  componentWillLoad(): void;
  private elementsEllipsis;
  private elementAuthorsHasEllipsis;
  private retrieveClass;
  private footerTransitionHandler;
  private getFirstListItem;
  render(): HTMLDivElement;
}
