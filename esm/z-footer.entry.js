import { r as registerInstance, c as createEvent, h } from './index-a2ca4b97.js';
import { c as ButtonSize } from './index-aee91593.js';

const stylesCss = ":host{width:100%}footer{width:auto;height:auto;box-sizing:border-box;padding:var(--space-unit) 0;background-color:var(--gray900);color:var(--gray50);font-family:var(--font-family-sans);font-size:13px}footer *{box-sizing:border-box}footer>section>div{display:grid}#top{padding:0 calc(var(--space-unit) * 2)}#bottom{width:auto;height:auto;padding:0 calc(var(--space-unit) * 2);margin:0;font-size:12px;white-space:pre-line}#bottom>div{display:grid;grid-template-columns:1fr}#bottom>div>div.item{display:flex;width:auto;height:auto;flex-direction:column;align-items:flex-start;padding:calc(var(--space-unit) * 2) 0;grid-column:span 1}#bottom>div>div.item:nth-child(1){order:2}#bottom>div>div.item:nth-child(2){order:1;border-bottom:1px solid var(--gray50)}#bottom>div>div.item>div.social{display:grid;padding:0;margin-bottom:0;column-gap:12px;grid-template-columns:repeat(5, 1fr);grid-template-rows:repeat(auto-fill, 24px)}#bottom>div>div.bottom-links{display:none}#bottom>div>div.item>p{padding:var(--space-unit) 0;margin:var(--space-unit) 0}#bottom>div>div.item>p:first-child{margin-top:0}#bottom>div>div.item>p:last-child{margin-bottom:0}#bottom>div>div.logo>p>span{display:block}#extension{padding:0 calc(var(--space-unit) * 2)}#extension>div{display:grid;align-items:center;grid-row-gap:var(--space-unit);grid-template-columns:1fr}#extension z-divider{margin-top:var(--space-unit)}#extension z-button{margin-left:var(--space-unit)}div.limited-width{--mw:none;max-width:var(--mw);margin:auto}z-button{--color-primary01:var(--gray600);--color-hover-primary:var(--gray700)}@media only screen and (min-width: 768px){footer{padding:0}#top{padding:calc(var(--space-unit) * 2) calc(var(--space-unit) * 3);background-color:var(--gray800)}#top z-footer-section:last-child{display:none}#bottom{padding:0 calc(var(--space-unit) * 3);background-color:var(--gray900)}#bottom>div{grid-column-gap:var(--grid-tablet-margin);grid-template-columns:repeat(4, 1fr)}#bottom>div>div.item{margin:0}#bottom>div>div.item:nth-child(1){order:1}#bottom>div>div.item:nth-child(2){order:2;border-bottom:none}#bottom>div>div.item>p{padding-top:0}#bottom>div>div.logo>z-logo{width:auto;height:39px}#bottom>div>div.bottom-links{display:grid;order:3;font-size:12px;grid-column:span 2;grid-column-gap:var(--grid-tablet-margin);grid-template-columns:repeat(2, 1fr);grid-template-rows:repeat(auto-fill, 24px)}#extension{padding:calc(var(--space-unit) * 2) calc(var(--space-unit) * 3) 0;margin:auto;background-color:var(--gray800);color:white;grid-template-columns:1fr 1fr}#extension>div>div{text-align:end}#extension z-divider{grid-column:1 / span 2}}@media only screen and (min-width: 1152px){#top{width:100%}#top>div{grid-column-gap:var(--grid-desktop-margin);grid-template-columns:repeat(6, 1fr)}#bottom>div>div.item:nth-child(1)>p:nth-of-type(2){font-size:10px}#bottom>div>div.item>p{padding-bottom:0;margin-bottom:calc(var(--space-unit) * 2)}#bottom>div>div.item>div.social{margin-top:0}#bottom>div>div.bottom-links{padding:calc(var(--space-unit) * 2) 0 0 0;margin:0;grid-column-gap:var(--grid-desktop-margin);grid-template-columns:repeat(3, 1fr)}}@media only screen and (min-width: 1366px){#top{padding:calc(var(--space-unit) * 2) calc(var(--space-unit) * 4)}#bottom{padding:0 calc(var(--space-unit) * 4)}#extension{padding:calc(var(--space-unit) * 2) calc(var(--space-unit) * 4) 0}}";

const ZFooter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.creditsLinkClick = createEvent(this, "creditsLinkClick", 7);
    this.reportAProblemButtonClick = createEvent(this, "reportAProblemButtonClick", 7);
    this.creditsLinkId = "creditsLinkId";
    this.emitReportAProblemButtonClick = this.emitReportAProblemButtonClick.bind(this);
  }
  componentWillLoad() {
    if (this.data) {
      console.warn("z-footer: `data` prop is deprecated and will be removed in a future version. Use slots instead.");
      this.jsonData = JSON.parse(this.data);
    }
  }
  zLinkClickListener(e) {
    if (e.detail.linkId === this.creditsLinkId) {
      this.emitCreditsLinkClick();
    }
  }
  emitCreditsLinkClick() {
    this.creditsLinkClick.emit();
  }
  emitReportAProblemButtonClick() {
    this.reportAProblemButtonClick.emit();
  }
  renderZLogo() {
    return (h("z-logo", { link: "https://www.zanichelli.it", width: 144, height: 38, imageAlt: "Home Zanichelli", targetBlank: true }));
  }
  renderAddress() {
    return (h("p", null, "Zanichelli editore S.p.A. via Irnerio 34, 40126 Bologna", h("br", null), "Fax 051 - 249.782 / 293.224 | Tel. 051 - 293.111 / 245.024", h("br", null), "Partita IVA 03978000374"));
  }
  renderSocial() {
    return (h("div", { class: "social" }, h("slot", { name: "social" }), this.renderFooterSocialJsonData()));
  }
  renderCopyright() {
    return (h("p", null, "Copyright \u2013 2018-", new Date().getFullYear(), " Zanichelli", h("span", null, "All rights reserved")));
  }
  renderCertification() {
    return (h("p", null, "Zanichelli editore S.p.A. opera con sistema qualit\u00E0 certificato CertiCarGraf n. 477", h("br", null), "secondo la norma UNI EN ISO 9001:2015"));
  }
  renderBottomLinks() {
    return (h("div", { class: "item bottom-links" }, h("slot", { name: "links" }), this.renderFooterBottomJsonData()));
  }
  renderFooterBottom() {
    return (h("section", { id: "bottom" }, h("div", { class: { "limited-width": !!this.contentMaxWidth }, style: this.contentMaxWidth ? { "--mw": `${this.contentMaxWidth}px` } : {} }, h("div", { class: "item logo" }, this.renderZLogo(), this.renderCopyright(), this.renderCertification()), h("div", { class: "item" }, this.renderAddress(), this.renderSocial()), this.renderBottomLinks())));
  }
  renderFooterTop() {
    return (h("section", { id: "top" }, h("div", { class: { "limited-width": !!this.contentMaxWidth }, style: this.contentMaxWidth ? { "--mw": `${this.contentMaxWidth}px` } : {} }, h("slot", null), this.renderFooterTopJsonData())));
  }
  renderFooterProductInfo() {
    var _a;
    if (this.productName || this.productVersion || this.productCreditsLink != null || this.showReportAProblemButton) {
      const versionString = `${this.productName ? " versione" : "Versione"} ${this.productVersion}`;
      const creditsObject = (h("z-body", { level: 5 }, (this.productName || this.productVersion) && " - ", h("z-link", { htmlid: this.creditsLinkId, href: (_a = this.productCreditsLink) === null || _a === void 0 ? void 0 : _a.trim(), target: "_blank", textcolor: "white" }, "Credits")));
      return (h("div", { id: "extension" }, h("div", { class: { "limited-width": !!this.contentMaxWidth }, style: this.contentMaxWidth ? { "--mw": `${this.contentMaxWidth}px` } : {} }, h("span", null, this.productName && (h("z-body", { level: 5, variant: "semibold" }, this.productName)), this.productVersion && h("z-body", { level: 5 }, versionString), this.productCreditsLink != null && creditsObject), this.showReportAProblemButton && (h("div", null, h("z-body", { level: 5 }, "Hai bisogno di aiuto?"), h("z-button", { size: ButtonSize.SMALL, onClick: this.emitReportAProblemButtonClick }, "SEGNALA UN PROBLEMA"))), h("z-divider", { color: "gray500" }))));
    }
  }
  // INFO: backward compatibility
  renderFooterTopJsonData() {
    if (!this.jsonData || !this.jsonData.zanichelliLinks) {
      return null;
    }
    const zanichelliLinks = this.jsonData.zanichelliLinks;
    if (this.jsonData.bottomLinks) {
      const bottomLinks = this.jsonData.bottomLinks;
      zanichelliLinks.push({
        title: "Altre informazioni",
        items: bottomLinks,
      });
    }
    return zanichelliLinks.map((item) => (h("z-footer-section", { name: item.title }, item.items.map((item) => (h("z-footer-link", { href: item.link }, item.label))))));
  }
  // INFO: backward compatibility
  renderFooterBottomJsonData() {
    if (!this.jsonData || !this.jsonData.bottomLinks) {
      return null;
    }
    const bottomLinks = this.jsonData.bottomLinks;
    return bottomLinks.map((item) => h("z-footer-link", { href: item.link }, item.label));
  }
  // INFO: backward compatibility
  renderFooterSocialJsonData() {
    if (!this.jsonData || !this.jsonData.social) {
      return null;
    }
    const social = this.jsonData.social;
    return social.map((item) => (h("z-footer-social", { href: item.link, icon: item.icon, description: item.description })));
  }
  render() {
    return (h("footer", null, this.renderFooterProductInfo(), this.renderFooterTop(), this.renderFooterBottom()));
  }
};
ZFooter.style = stylesCss;

export { ZFooter as z_footer };