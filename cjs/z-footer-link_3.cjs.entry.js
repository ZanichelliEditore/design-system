'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-84b7063a.js');

const stylesCss$2 = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>a{display:inline-block;color:var(--color-white);padding:calc(var(--space-unit) / 2 * 3) 0;border-bottom:1px solid var(--gray50);text-decoration:none;font-size:14px;width:100%}@media only screen and (min-width: 768px){:host a{font-size:12px;border-bottom:none;text-decoration:underline;padding:0;width:initial}}";

const ZFooterLink = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("a", { href: this.href, target: "_blank" }, index.h("slot", null)));
  }
};
ZFooterLink.style = stylesCss$2;

const stylesCss$1 = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>nav{background-color:var(--gray900);display:flex;flex-direction:column;justify-items:flex-start;overflow:hidden;margin:calc(var(--space-unit) / 2) 0;padding:0}:host>nav>.header{position:relative;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-items:stretch;align-content:flex-start;height:calc(var(--space-unit) * 4);border-bottom:1px solid var(--gray50);line-height:1}:host>nav>.header>h2{color:var(--color-white);font-size:16px;margin:var(--space-unit) 0}:host>nav>.header{fill:var(--color-white)}:host>nav>.header>button{position:absolute;top:var(--space-unit);right:0;margin:0;padding:0;background:transparent;border:0;appearance:none;cursor:pointer}:host>nav>.header>z-icon{display:block}:host>nav>.content{background-color:var(--gray800);display:none;height:0;transition:0.3s ease;padding:calc(var(--space-unit) * 3) calc(var(--space-unit) * 2)}:host>nav>.content.show{display:block;height:auto;transition:0.3s ease}@media only screen and (min-width: 768px){:host>nav{display:grid;grid-template-columns:repeat(4, 1fr);grid-template-rows:1fr;grid-column-gap:var(--grid-tablet-margin);padding:calc(var(--space-unit) * 2) 0;border-bottom:1px solid var(--color-white);margin:0;background-color:var(--gray800)}:host>nav>.header>button.toggleButton{display:none}:host>nav>.header{border-bottom:none;padding:0;margin:0}:host>nav>.header>h2{border:none}:host>nav>.content,:host>nav>.content.show{grid-column:span 3;width:100%;padding:0;margin:0;display:grid;grid-template-columns:repeat(3, 1fr);grid-column-gap:var(--grid-tablet-margin);grid-row-gap:var(--space-unit);height:auto;align-items:stretch;align-content:stretch;margin:0}}@media only screen and (min-width: 1152px){:host>nav{display:grid;grid-template-columns:1fr;grid-template-rows:40px 4fr;padding:0;border-bottom:none}:host>nav>.header{position:relative;display:inline-flex;height:24px}:host>nav>.header>h2{width:auto;font-size:16px;line-height:1;font-weight:600;color:var(--gray50);padding:0 0 var(--space-unit);margin:0}:host>nav>.header::after{content:\"\";display:block;position:absolute;top:100%;left:0;width:120px;border-bottom:1px solid var(--gray50)}:host>nav>.content,:host>nav>.content.show{grid-column:auto;display:flex;flex-direction:column;flex-wrap:wrap;justify-content:flex-start}}";

const ZFooterSection = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.isOpen = false;
  }
  renderToggleButton() {
    return (index.h("button", { class: "toggleButton", onClick: () => (this.isOpen = !this.isOpen) }, index.h("z-icon", { name: this.isOpen ? "chevron-up" : "chevron-down", width: 16, height: 16 })));
  }
  render() {
    return (index.h("nav", null, index.h("div", { class: "header" }, index.h("h2", null, this.name), this.renderToggleButton()), index.h("div", { class: `content ${this.isOpen ? "show" : ""}` }, index.h("slot", null))));
  }
};
ZFooterSection.style = stylesCss$1;

const stylesCss = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>a>img{width:calc(var(--space-unit) * 3)}@media only screen and (min-width: 1152px){:host>a>img{width:16px}}";

const ZFooterSocial = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("a", { href: this.href, target: "_blank" }, index.h("img", { src: this.icon, alt: this.description })));
  }
};
ZFooterSocial.style = stylesCss;

exports.z_footer_link = ZFooterLink;
exports.z_footer_section = ZFooterSection;
exports.z_footer_social = ZFooterSocial;
