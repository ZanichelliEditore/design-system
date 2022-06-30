import { Component, h, Prop, Event, Listen } from "@stencil/core";
import { ButtonSizeEnum, ButtonVariantEnum } from "../../../beans";
/**
 * @slot - main navigation
 * @slot links - bottom navigation
 * @slot social - social links
 */
export class ZFooter {
  constructor() {
    this.creditsLinkId = "creditsLinkId";
    this.emitReportAProblemButtonClick =
      this.emitReportAProblemButtonClick.bind(this);
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
    return (h("p", null,
      "Zanichelli editore S.p.A. via Irnerio 34, 40126 Bologna",
      h("br", null),
      "Fax 051 - 249.782 / 293.224 | Tel. 051 - 293.111 / 245.024",
      h("br", null),
      "Partita IVA 03978000374"));
  }
  renderSocial() {
    return (h("div", { class: "social" },
      h("slot", { name: "social" }),
      this.renderFooterSocialJsonData()));
  }
  renderCopyright() {
    return (h("p", null,
      "Copyright \u2013 2018-",
      new Date().getFullYear(),
      " Zanichelli",
      h("span", null, "All rights reserved")));
  }
  renderCertification() {
    return (h("p", null,
      "Zanichelli editore S.p.A. opera con sistema qualit\u00E0 certificato CertiCarGraf n. 477",
      h("br", null),
      "secondo la norma UNI EN ISO 9001:2015"));
  }
  renderBottomLinks() {
    return (h("div", { class: "item bottom-links" },
      h("slot", { name: "links" }),
      this.renderFooterBottomJsonData()));
  }
  renderFooterBottom() {
    return (h("section", { id: "bottom" },
      h("div", { class: { "limited-width": !!this.contentMaxWidth }, style: this.contentMaxWidth ? { "--mw": `${this.contentMaxWidth}px` } : {} },
        h("div", { class: "item logo" },
          this.renderZLogo(),
          this.renderCopyright(),
          this.renderCertification()),
        h("div", { class: "item" },
          this.renderAddress(),
          this.renderSocial()),
        this.renderBottomLinks())));
  }
  renderFooterTop() {
    return (h("section", { id: "top" },
      h("div", { class: { "limited-width": !!this.contentMaxWidth }, style: this.contentMaxWidth ? { "--mw": `${this.contentMaxWidth}px` } : {} },
        h("slot", null),
        this.renderFooterTopJsonData())));
  }
  renderFooterProductInfo() {
    var _a;
    if (this.productName ||
      this.productVersion ||
      this.productCreditsLink != null ||
      this.showReportAProblemButton) {
      const versionString = `${this.productName ? " versione" : "Versione"} ${this.productVersion}`;
      const creditsObject = (h("z-body", { level: 5 },
        (this.productName || this.productVersion) && " - ",
        h("z-link", { htmlid: this.creditsLinkId, href: (_a = this.productCreditsLink) === null || _a === void 0 ? void 0 : _a.trim(), target: "_blank", textcolor: "white" }, "Credits")));
      return (h("div", { id: "extension" },
        h("div", { class: { "limited-width": !!this.contentMaxWidth }, style: this.contentMaxWidth
            ? { "--mw": `${this.contentMaxWidth}px` }
            : {} },
          h("span", null,
            this.productName && (h("z-body", { level: 5, variant: "semibold" }, this.productName)),
            this.productVersion && (h("z-body", { level: 5 }, versionString)),
            this.productCreditsLink != null && creditsObject),
          this.showReportAProblemButton && (h("div", null,
            h("z-body", { level: 5 }, "Hai bisogno di aiuto?"),
            h("z-button-deprecated", { variant: ButtonVariantEnum["dark-bg"], size: ButtonSizeEnum.small, onClick: this.emitReportAProblemButtonClick }, "SEGNALA UN PROBLEMA"))),
          h("z-divider", { color: "gray500" }))));
    }
  }
  // INFO: backward compatibility
  renderFooterTopJsonData() {
    if (!this.jsonData || !this.jsonData.zanichelliLinks)
      return null;
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
    if (!this.jsonData || !this.jsonData.bottomLinks)
      return null;
    const bottomLinks = this.jsonData.bottomLinks;
    return bottomLinks.map((item) => (h("z-footer-link", { href: item.link }, item.label)));
  }
  // INFO: backward compatibility
  renderFooterSocialJsonData() {
    if (!this.jsonData || !this.jsonData.social)
      return null;
    const social = this.jsonData.social;
    return social.map((item) => (h("z-footer-social", { href: item.link, icon: item.icon, description: item.description })));
  }
  render() {
    return (h("footer", null,
      this.renderFooterProductInfo(),
      this.renderFooterTop(),
      this.renderFooterBottom()));
  }
  static get is() { return "z-footer"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get properties() { return {
    "data": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "deprecated - JSON stringified data to fill the footer"
      },
      "attribute": "data",
      "reflect": false
    },
    "productName": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The product name to be displayed on the top panel of the footer"
      },
      "attribute": "product-name",
      "reflect": false
    },
    "productVersion": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The product version to be displayed on the top panel of the footer"
      },
      "attribute": "product-version",
      "reflect": false
    },
    "productCreditsLink": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "'undefined' or 'null' means 'don't show Credits',\nempty string means 'emit creditsLinkClick event',\nnot empty string means 'open the url and emit creditsLinkClick event'"
      },
      "attribute": "product-credits-link",
      "reflect": false
    },
    "showReportAProblemButton": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "True if the product must display a \"Report a problem\" button on the top panel of the footer"
      },
      "attribute": "show-report-a-problem-button",
      "reflect": false
    },
    "contentMaxWidth": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Maximum width of footer content"
      },
      "attribute": "content-max-width",
      "reflect": false
    }
  }; }
  static get events() { return [{
      "method": "creditsLinkClick",
      "name": "creditsLinkClick",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted on credits link click"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "reportAProblemButtonClick",
      "name": "reportAProblemButtonClick",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted on report a problem button click"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get listeners() { return [{
      "name": "zLinkClick",
      "method": "zLinkClickListener",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
