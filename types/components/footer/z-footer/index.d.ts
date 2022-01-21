import { EventEmitter } from "../../../stencil-public-runtime";
/**
 * @slot - main navigation
 * @slot links - bottom navigation
 * @slot social - social links
 */
export declare class ZFooter {
  /** deprecated - JSON stringified data to fill the footer */
  data?: string;
  /** The product name to be displayed on the top panel of the footer */
  productName?: string;
  /** The product version to be displayed on the top panel of the footer */
  productVersion?: string;
  /** 'undefined' or 'null' means 'don't show Credits',
   * empty string means 'emit creditsLinkClick event',
   * not empty string means 'open the url and emit creditsLinkClick event' */
  productCreditsLink?: string;
  /** True if the product must display a "Report a problem" button on the top panel of the footer */
  showReportAProblemButton?: boolean;
  /** Maximum width of footer content */
  contentMaxWidth?: number;
  private jsonData;
  creditsLinkId: string;
  constructor();
  componentWillLoad(): void;
  zLinkClickListener(e: CustomEvent): void;
  /** Emitted on credits link click */
  creditsLinkClick: EventEmitter;
  emitCreditsLinkClick(): void;
  /** Emitted on report a problem button click */
  reportAProblemButtonClick: EventEmitter;
  emitReportAProblemButtonClick(): void;
  renderZLogo(): HTMLZLogoElement;
  renderAddress(): HTMLParagraphElement;
  renderSocial(): HTMLDivElement;
  renderCopyright(): HTMLParagraphElement;
  renderCertification(): HTMLParagraphElement;
  renderBottomLinks(): HTMLDivElement;
  renderFooterBottom(): HTMLElement;
  renderFooterTop(): HTMLElement;
  renderFooterProductInfo(): HTMLElement;
  renderFooterTopJsonData(): null | HTMLElement;
  renderFooterBottomJsonData(): null | HTMLElement;
  renderFooterSocialJsonData(): null | HTMLElement;
  render(): HTMLElement;
}
