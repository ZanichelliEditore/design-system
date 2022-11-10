import { r as registerInstance, h, H as Host } from './index-a2ca4b97.js';
import { T as ThemeVariant, i as DividerOrientation } from './index-9d028352.js';
import { m as mobileBreakpoint } from './breakpoints-c386984e.js';

const stylesCss = ":host{position:sticky;z-index:99;top:0;display:block;height:calc(var(--space-unit) * 6);box-sizing:border-box;padding:calc(var(--space-unit) / 2) calc(var(--space-unit) * 2);background-color:var(--gray900);border-radius:var(--border-no-radius)}:host(.light){background-color:var(--color-white)}:host>div{display:flex;align-items:center;justify-content:space-between}:host(.limited-width) #content-container{--mw:none;max-width:var(--mw);margin:auto}.content-panel{display:flex;align-items:center}.content-panel>:not(:last-child){margin-right:calc(var(--space-unit) * 2)}#divider-container{display:none}z-link{font-family:var(--font-family-sans);font-size:14px;font-weight:var(--font-sb);letter-spacing:0.3px;line-height:20px}@media only screen and (min-width: 768px){:host{padding:var(--space-unit) calc(var(--space-unit) * 2) var(--space-unit) var(--space-unit)}:host(.limited-width){padding:var(--space-unit)}#divider-container{display:block;height:calc(var(--space-unit) * 3)}}";

const ZAppTopbar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** theme variant, default 'dark' */
    this.theme = ThemeVariant.DARK;
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
    return this.topbarLinks.map((link) => (h("z-link", { htmlid: link.id, textcolor: this.theme === ThemeVariant.LIGHT ? "black" : "white", href: link.link, target: link.target, icon: this.isMobile ? link.icon : undefined }, !this.isMobile && link.label)));
  }
  render() {
    return (h(Host, { class: {
        [this.theme]: true,
        "limited-width": !!this.contentMaxWidth,
      } }, h("div", { id: "content-container", style: this.contentMaxWidth ? { "--mw": `${this.contentMaxWidth}px` } : {} }, h("div", { id: "left-panel", class: "content-panel" }, h("z-logo", { mobileLogo: this.isMobile, width: this.isMobile ? 32 : 128, height: this.isMobile ? 40 : 32, imageAlt: "zanichelli-logo", link: this.logoLink, targetBlank: true }), this.isMobile && this.renderTopbarLinks()), h("div", { id: "right-panel", class: "content-panel" }, !this.isMobile && this.renderTopbarLinks(), this.showAppSwitcher && h("z-app-switcher", { theme: this.theme }), h("div", { id: "divider-container" }, h("z-divider", { orientation: DividerOrientation.VERTICAL, color: this.theme === ThemeVariant.LIGHT ? "gray800" : "color-white" })), h("slot", { name: "login" })))));
  }
};
ZAppTopbar.style = stylesCss;

export { ZAppTopbar as z_app_topbar };
