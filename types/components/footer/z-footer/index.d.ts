/**
 * @slot - main navigation
 * @slot links - bottom navigation
 * @slot social - social links
 */
export declare class ZFooter {
  /** deprecated - JSON stringified data to fill the footer */
  data?: string;
  /** deprecated - set copyright user */
  copyrightuser?: string;
  private jsonData;
  componentWillLoad(): void;
  renderZLogo(): HTMLZLogoElement;
  renderAddress(): HTMLParagraphElement;
  renderSocial(): HTMLDivElement;
  renderCopyright(): HTMLParagraphElement;
  renderCertification(): HTMLParagraphElement;
  renderBottomLinks(): HTMLDivElement;
  renderFooterBottom(): HTMLElement;
  renderFooterTop(): HTMLElement;
  renderFooterTopJsonData(): null | HTMLElement;
  renderFooterBottomJsonData(): null | HTMLElement;
  renderFooterSocialJsonData(): null | HTMLElement;
  render(): HTMLElement;
}
