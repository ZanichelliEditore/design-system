import { r as registerInstance, h, H as Host } from './index-a2ca4b97.js';
import { B as ButtonVariant } from './index-03c8b0f0.js';

const stylesCss = "html{scroll-behavior:smooth}z-anchor-navigation nav{display:none;flex-direction:column;justify-content:flex-start;row-gap:calc(var(--space-unit) / 2)}z-anchor-navigation[collapsed] nav{display:flex;margin-top:var(--space-unit)}z-anchor-navigation nav a{display:-webkit-box;overflow:clip;width:100%;box-sizing:border-box;padding:calc(var(--space-unit) * 1.5) calc(var(--space-unit) * 2);-webkit-box-orient:vertical;color:inherit;font-weight:inherit;-webkit-line-clamp:2;overflow-clip-margin:content-box;text-decoration:none}z-anchor-navigation nav * a:not(:only-child){padding-right:calc(var(--space-unit) * 5)}@supports not (overflow-clip-margin: content-box){z-anchor-navigation nav a{display:inline-block;overflow:hidden;-webkit-line-clamp:none;text-overflow:ellipsis;white-space:nowrap}}z-anchor-navigation nav>*{position:relative;border-left:var(--border-size-large) solid var(--color-surface04);color:var(--color-text01);font-family:var(--font-family-sans);transition:background-color 0.3s ease-in-out, border-color 0.3s ease-in-out, color 0.3s ease-in-out}z-anchor-navigation nav>[current]{border-left-color:var(--color-primary01);color:var(--color-link-primary);font-weight:var(--font-sb)}z-anchor-navigation nav>*>*:is(z-button,button,z-icon){position:absolute;top:50%;right:0;transform:translateY(-50%);transition:opacity 0.3s ease-in-out}z-anchor-navigation nav button{padding:0;border:none;margin:0;background-color:transparent}z-anchor-navigation nav z-icon{--z-icon-width:16px;--z-icon-height:16px;display:flex;padding:calc(var(--space-unit) * 1.5);fill:var(--color-icon02)}@media (min-width: 768px){z-anchor-navigation z-button.toggle{display:none !important}z-anchor-navigation nav{display:flex}z-anchor-navigation nav a{outline:none}@media (hover: hover){z-anchor-navigation nav>*:hover{border-left-color:var(--color-hover-secondary);background-color:var(--color-hover-surface);color:var(--color-hover-link)}}z-anchor-navigation nav>*:is(:focus,:focus-within),z-anchor-navigation nav :is(z-icon,button):focus:focus-visible{box-shadow:var(--shadow-focus-primary);outline:none}z-anchor-navigation[hide-unselected] nav>*:not([current],:hover,:focus,:focus-within){color:transparent}z-anchor-navigation nav>*:not([current],:hover,:focus,:focus-within)>*:is(z-button,button,z-icon):not(:focus:focus-visible){opacity:0;pointer-events:none}@media (hover: none){z-anchor-navigation:not([hide-unselected]) nav>*>*:is(z-button,button,z-icon){opacity:1;pointer-events:all}}}";

const ZAnchorNavigation = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * If enabled, the text of each anchor will be hidden unless
     * for the current one or the one the user is hovering.
     */
    this.hideUnselected = false;
    /**
     * Whether the mobile list is collapsed.
     */
    this.collapsed = false;
  }
  /**
   * Set aria-current attribute to the anchors and `current` to nav children.
   */
  setAriaCurrent() {
    Array.from(this.nav.children).forEach((item) => {
      const anchor = item instanceof HTMLAnchorElement ? item : item.querySelector("a");
      const isCurrent = window.location.href === anchor.href;
      anchor.setAttribute("aria-current", isCurrent.toString());
      item.toggleAttribute("current", isCurrent);
    });
  }
  /**
   * Toggle collapsed state.
   */
  toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }
  componentDidLoad() {
    window.addEventListener("hashchange", this.setAriaCurrent.bind(this));
    this.setAriaCurrent();
  }
  disconnectedCallback() {
    window.removeEventListener("hashchange", this.setAriaCurrent);
  }
  render() {
    return (h(Host, { collapsed: this.collapsed }, h("z-button", { class: "toggle", variant: ButtonVariant.SECONDARY, icon: this.collapsed ? "chevron-up" : "chevron-down", onClick: this.toggleCollapsed.bind(this) }, "salta a"), h("nav", { ref: (el) => (this.nav = el) }, h("slot", null))));
  }
};
ZAnchorNavigation.style = stylesCss;

export { ZAnchorNavigation as z_anchor_navigation };