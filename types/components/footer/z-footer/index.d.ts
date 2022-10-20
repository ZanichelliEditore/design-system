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
  private creditsLinkId;
  constructor();
  componentWillLoad(): void;
  zLinkClickListener(e: CustomEvent): void;
  /** Emitted on credits link click */
  creditsLinkClick: EventEmitter;
  private emitCreditsLinkClick;
  /** Emitted on report a problem button click */
  reportAProblemButtonClick: EventEmitter;
  private emitReportAProblemButtonClick;
  private renderZLogo;
  private renderAddress;
  private renderSocial;
  private renderCopyright;
  private renderCertification;
  private renderBottomLinks;
  private renderFooterBottom;
  private renderFooterTop;
  private renderFooterProductInfo;
  private renderFooterTopJsonData;
  private renderFooterBottomJsonData;
  private renderFooterSocialJsonData;
  render(): HTMLElement;
}
