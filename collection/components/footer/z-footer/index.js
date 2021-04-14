import { Component, h, Prop } from "@stencil/core";
/**
 * @slot - main navigation
 * @slot links - bottom navigation
 * @slot social - social links
 */
export class ZFooter {
  componentWillLoad() {
    if (this.data) {
      console.warn("z-footer: `data` prop is deprecated and will be removed in a future version. Use slots instead.");
      this.jsonData = JSON.parse(this.data);
    }
    if (this.copyrightuser) {
      console.warn("z-footer: `copyrightuser` prop is deprecated and will be removed in a future version.");
    }
  }
  renderZLogo() {
    return (h("z-logo", { link: "https://www.zanichelli.it", width: 144, height: 38, imagealt: "Home Zanichelli", targetblank: true }));
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
    return (h("section", { class: "bottom" },
      h("div", { class: "item logo" },
        this.renderZLogo(),
        this.renderCopyright(),
        this.renderCertification()),
      h("div", { class: "item" },
        this.renderAddress(),
        this.renderSocial()),
      this.renderBottomLinks()));
  }
  renderFooterTop() {
    return (h("section", { class: "top" },
      h("slot", null),
      this.renderFooterTopJsonData()));
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
    "copyrightuser": {
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
        "text": "deprecated - set copyright user"
      },
      "attribute": "copyrightuser",
      "reflect": false
    }
  }; }
}
