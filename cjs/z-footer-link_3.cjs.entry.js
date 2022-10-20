'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');

const stylesCss$2 = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>a{display:inline-block;width:100%;padding:calc(var(--space-unit) / 2 * 3) 0;border-bottom:1px solid var(--gray50);color:var(--color-white);font-size:14px;text-decoration:none}@media only screen and (min-width: 768px){:host a{width:initial;padding:0;border-bottom:none;font-size:12px;text-decoration:underline}}";

const ZFooterLink = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("a", { href: this.href, target: "_blank" }, index.h("slot", null)));
  }
};
ZFooterLink.style = stylesCss$2;

const stylesCss$1 = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>nav{display:flex;overflow:hidden;flex-direction:column;padding:0;margin:calc(var(--space-unit) / 2) 0;background-color:var(--gray900);justify-items:flex-start}:host>nav>.header{position:relative;display:flex;height:calc(var(--space-unit) * 4);flex-flow:row wrap;align-content:flex-start;align-items:stretch;justify-content:flex-start;border-bottom:1px solid var(--gray50);fill:var(--color-white);line-height:1}:host>nav>.header>h2{margin:var(--space-unit) 0;color:var(--color-white);font-size:16px}:host>nav>.header>button{position:absolute;top:var(--space-unit);right:0;padding:0;border:0;margin:0;appearance:none;background:transparent;cursor:pointer}:host>nav>.header>z-icon{display:block}:host>nav>.content{display:none;height:0;padding:calc(var(--space-unit) * 3) calc(var(--space-unit) * 2);background-color:var(--gray800);transition:0.3s ease}:host>nav>.content.show{display:block;height:auto;transition:0.3s ease}@media only screen and (min-width: 768px){:host>nav{display:grid;padding:calc(var(--space-unit) * 2) 0;border-bottom:1px solid var(--color-white);margin:0;background-color:var(--gray800);grid-column-gap:var(--grid-tablet-margin);grid-template-columns:repeat(4, 1fr);grid-template-rows:1fr}:host>nav>.header>button.toggle-button{display:none}:host>nav>.header{padding:0;border-bottom:none;margin:0}:host>nav>.header>h2{border:none}:host>nav>.content,:host>nav>.content.show{display:grid;width:100%;height:auto;align-content:stretch;align-items:stretch;padding:0;margin:0;gap:var(--space-unit) var(--grid-tablet-margin);grid-column:span 3;grid-template-columns:repeat(3, 1fr)}}@media only screen and (min-width: 1152px){:host>nav{display:grid;padding:0;border-bottom:none;grid-template-columns:1fr;grid-template-rows:40px 4fr}:host>nav>.header{position:relative;display:inline-flex;height:24px}:host>nav>.header>h2{width:auto;padding:0 0 var(--space-unit);margin:0;color:var(--gray50);font-size:16px;font-weight:600;line-height:1}:host>nav>.header::after{position:absolute;top:100%;left:0;display:block;width:120px;border-bottom:1px solid var(--gray50);content:\"\"}:host>nav>.content,:host>nav>.content.show{display:flex;flex-flow:column wrap;justify-content:flex-start;grid-column:auto}}";

const ZFooterSection = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.isOpen = false;
  }
  renderToggleButton() {
    return (index.h("button", { class: "toggle-button", onClick: () => (this.isOpen = !this.isOpen) }, index.h("z-icon", { name: this.isOpen ? "chevron-up" : "chevron-down", width: 16, height: 16 })));
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
