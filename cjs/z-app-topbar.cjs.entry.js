'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');
const index$1 = require('./index-f08f7171.js');
const breakpoints = require('./breakpoints-88c4fd6c.js');

const stylesCss = ":host{position:sticky;z-index:99;top:0;display:block;height:calc(var(--space-unit) * 6);box-sizing:border-box;padding:calc(var(--space-unit) / 2) calc(var(--space-unit) * 2);background-color:var(--gray900);border-radius:var(--border-no-radius)}:host(.light){background-color:var(--color-white)}:host>div{display:flex;align-items:center;justify-content:space-between}:host(.limited-width) #content-container{--mw:none;max-width:var(--mw);margin:auto}.content-panel{display:flex;align-items:center}.content-panel>:not(:last-child){margin-right:calc(var(--space-unit) * 2)}#divider-container{display:none}z-link{font-family:var(--font-family-sans);font-size:14px;font-weight:var(--font-sb);letter-spacing:0.3px;line-height:20px}@media only screen and (min-width: 768px){:host{padding:var(--space-unit) calc(var(--space-unit) * 2) var(--space-unit) var(--space-unit)}:host(.limited-width){padding:var(--space-unit)}#divider-container{display:block;height:calc(var(--space-unit) * 3)}}";

const ZAppTopbar = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /** theme variant, default 'dark' */
    this.theme = index$1.ThemeVariant.DARK;
    this.topbarLinks = [];
  }
  handleResize() {
    this.isMobile = window.innerWidth <= breakpoints.mobileBreakpoint;
  }
  componentWillLoad() {
    this.isMobile = window.screen.width <= breakpoints.mobileBreakpoint || window.innerWidth <= breakpoints.mobileBreakpoint;
  }
  componentWillRender() {
    if (this.topbarContent) {
      this.topbarLinks = typeof this.topbarContent === "string" ? JSON.parse(this.topbarContent) : this.topbarContent;
    }
  }
  renderTopbarLinks() {
    return this.topbarLinks.map((link) => (index.h("z-link", { htmlid: link.id, textcolor: this.theme === index$1.ThemeVariant.LIGHT ? "black" : "white", href: link.link, target: link.target, icon: this.isMobile ? link.icon : undefined }, !this.isMobile && link.label)));
  }
  render() {
    return (index.h(index.Host, { class: {
        [this.theme]: true,
        "limited-width": !!this.contentMaxWidth,
      } }, index.h("div", { id: "content-container", style: this.contentMaxWidth ? { "--mw": `${this.contentMaxWidth}px` } : {} }, index.h("div", { id: "left-panel", class: "content-panel" }, index.h("z-logo", { mobileLogo: this.isMobile, width: this.isMobile ? 32 : 128, height: this.isMobile ? 40 : 32, imageAlt: "zanichelli-logo", link: this.logoLink, targetBlank: true }), this.isMobile && this.renderTopbarLinks()), index.h("div", { id: "right-panel", class: "content-panel" }, !this.isMobile && this.renderTopbarLinks(), this.showAppSwitcher && index.h("z-app-switcher", { theme: this.theme }), index.h("div", { id: "divider-container" }, index.h("z-divider", { orientation: index$1.DividerOrientation.VERTICAL, color: this.theme === index$1.ThemeVariant.LIGHT ? "gray800" : "color-white" })), index.h("slot", { name: "login" })))));
  }
};
ZAppTopbar.style = stylesCss;

exports.z_app_topbar = ZAppTopbar;
