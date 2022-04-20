import { r as registerInstance, h, H as Host } from './index-fa9e549c.js';
import { T as ThemeVariant, f as DividerOrientation } from './index-a4f73ed9.js';
import { m as mobileBreakpoint } from './breakpoints-c386984e.js';

const stylesCss = ":host{display:block;position:sticky;box-sizing:border-box;top:0;height:calc(var(--space-unit) * 6);padding:calc(var(--space-unit) / 2) calc(var(--space-unit) * 2);border-radius:var(--border-no-radius);background-color:var(--gray900);z-index:99}:host(.light){background-color:var(--color-white)}:host>div{display:flex;justify-content:space-between;align-items:center}:host(.limited-width) #content-container{margin:auto;max-width:var(--mw)}.content-panel{display:flex;align-items:center}.content-panel>:not(:last-child){margin-right:calc(var(--space-unit) * 2)}#divider-container{display:none}z-link{font-family:var(--font-family-sans);font-weight:var(--font-sb);font-size:14px;line-height:20px;letter-spacing:0.3px}@media only screen and (min-width: 768px){:host{padding:var(--space-unit) calc(var(--space-unit) * 2) var(--space-unit) var(--space-unit)}:host(.limited-width){padding:var(--space-unit)}#divider-container{display:block;height:calc(var(--space-unit) * 3)}}";

const ZAppTopbar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** theme variant, default 'dark' */
    this.theme = ThemeVariant.dark;
    this.topbarLinks = [];
  }
  handleResize() {
    this.isMobile = window.innerWidth <= mobileBreakpoint;
  }
  componentWillLoad() {
    this.isMobile = window.screen.width <= mobileBreakpoint || window.innerWidth <= mobileBreakpoint;
  }
  componentWillRender() {
    if (this.topbarContent) {
      this.topbarLinks = typeof this.topbarContent === "string" ? JSON.parse(this.topbarContent) : this.topbarContent;
    }
  }
  renderTopbarLinks() {
    return this.topbarLinks.map((link) => h("z-link", { htmlid: link.id, textcolor: this.theme === ThemeVariant.light ? "black" : "white", href: link.link, target: link.target, icon: this.isMobile ? link.icon : undefined }, !this.isMobile && link.label));
  }
  render() {
    return (h(Host, { class: {
        [this.theme]: true,
        "limited-width": !!this.contentMaxWidth
      } }, h("div", { id: "content-container", style: this.contentMaxWidth ? { "--mw": `${this.contentMaxWidth}px` } : {} }, h("div", { id: "left-panel", class: "content-panel" }, h("z-logo", { mobileLogo: this.isMobile, width: this.isMobile ? 32 : 128, height: this.isMobile ? 40 : 32, imageAlt: "zanichelli-logo", link: this.logoLink, targetBlank: true }), this.isMobile && this.renderTopbarLinks()), h("div", { id: "right-panel", class: "content-panel" }, !this.isMobile && this.renderTopbarLinks(), this.showAppSwitcher && h("z-app-switcher", { theme: this.theme }), h("div", { id: "divider-container" }, h("z-divider", { orientation: DividerOrientation.vertical, color: this.theme === ThemeVariant.light ? "gray800" : "color-white" })), h("slot", { name: "login" })))));
  }
};
ZAppTopbar.style = stylesCss;

export { ZAppTopbar as z_app_topbar };
