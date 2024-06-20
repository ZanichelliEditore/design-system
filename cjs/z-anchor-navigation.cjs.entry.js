'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5dc4a8de.js');
const index$1 = require('./index-39ce4edf.js');

const stylesCss = "html{scroll-behavior:smooth}z-anchor-navigation nav{display:none;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:start;justify-content:flex-start;row-gap:calc(var(--space-unit) / 2)}z-anchor-navigation[collapsed] nav{display:-ms-flexbox;display:flex;margin-top:var(--space-unit)}z-anchor-navigation nav a{display:-webkit-box;overflow:clip;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:calc(var(--space-unit) * 1.5) calc(var(--space-unit) * 2);-webkit-box-orient:vertical;color:inherit;font-weight:inherit;-webkit-line-clamp:2;overflow-clip-margin:content-box;text-decoration:none}z-anchor-navigation nav * a:not(:only-child){padding-right:calc(var(--space-unit) * 5)}@supports not (overflow-clip-margin: content-box){z-anchor-navigation nav a{display:inline-block;overflow:hidden;-webkit-line-clamp:none;text-overflow:ellipsis;white-space:nowrap}}z-anchor-navigation nav>*{position:relative;border-left:var(--border-size-large) solid var(--color-surface04);color:var(--color-default-text);font-family:var(--font-family-sans);-webkit-transition:background-color 0.3s ease-in-out,\n    border-color 0.3s ease-in-out,\n    color 0.3s ease-in-out;transition:background-color 0.3s ease-in-out,\n    border-color 0.3s ease-in-out,\n    color 0.3s ease-in-out}z-anchor-navigation nav>[data-current]{border-left-color:var(--color-primary01);color:var(--color-link-primary);font-weight:var(--font-sb)}z-anchor-navigation nav>*>*:is(z-button,button){position:absolute;top:50%;right:0;-webkit-transform:translateY(-50%);transform:translateY(-50%);-webkit-transition:opacity 0.3s ease-in-out;transition:opacity 0.3s ease-in-out}z-anchor-navigation nav>*:focus:focus-visible,z-anchor-navigation nav>*>*:focus:focus-visible{-webkit-box-shadow:var(--shadow-focus-primary);box-shadow:var(--shadow-focus-primary);outline:none}z-anchor-navigation nav button{padding:0;border:none;margin:0;background-color:transparent}@media (min-width: 768px){z-anchor-navigation z-button.toggle{display:none !important}z-anchor-navigation nav{display:-ms-flexbox;display:flex}z-anchor-navigation nav>*>:is(z-button,button){opacity:0;pointer-events:none}@media (hover: hover){z-anchor-navigation nav>:is([data-current],:hover,:focus,:focus-within)>:is(z-button,button){opacity:1;pointer-events:unset}z-anchor-navigation nav>*:hover{border-left-color:var(--color-hover-secondary);background-color:var(--color-hover-surface);color:var(--color-hover-link)}}z-anchor-navigation[hide-unselected] nav>*:not([data-current],:hover,:focus,:focus-within){color:transparent;fill:transparent}}";
const ZAnchorNavigationStyle0 = stylesCss;

const ZAnchorNavigation = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.hideUnselected = false;
        this.autoCurrent = true;
        this.collapsed = false;
    }
    /**
     * Set `aria-current` attribute to the anchors.
     */
    setCurrent() {
        const currentElement = Array.from(this.nav.querySelectorAll("a")).find((anchor) => anchor.href === this.host.ownerDocument.location.href);
        Array.from(this.nav.children).forEach((item) => {
            const anchor = item instanceof HTMLAnchorElement ? item : item.querySelector("a");
            const isCurrent = anchor === currentElement;
            anchor.setAttribute("aria-current", isCurrent.toString());
            item.toggleAttribute("data-current", isCurrent);
        });
    }
    /**
     * Toggle collapsed state.
     */
    toggleCollapsed() {
        this.collapsed = !this.collapsed;
    }
    componentDidLoad() {
        if (this.autoCurrent) {
            window.addEventListener("hashchange", this.setCurrent.bind(this));
            this.setCurrent();
        }
    }
    disconnectedCallback() {
        window.removeEventListener("hashchange", this.setCurrent);
    }
    render() {
        return (index.h(index.Host, { key: '6869675f35b8ca58e36058d10ed89301d2b49034', collapsed: this.collapsed }, index.h("z-button", { key: 'd6bacaf89ac6731dacb2250793c7ffba4a43a989', class: "toggle", variant: index$1.ButtonVariant.SECONDARY, icon: this.collapsed ? "chevron-up" : "chevron-down", onClick: this.toggleCollapsed.bind(this) }, "salta a"), index.h("nav", { key: '0c308debc3e444015e1c8733af628d0b7a5d8b6e', ref: (el) => (this.nav = el) }, index.h("slot", { key: '02b49c5a23db78d839ba6320f1cbbd770cfa6d3f' }))));
    }
    get host() { return index.getElement(this); }
};
ZAnchorNavigation.style = ZAnchorNavigationStyle0;

exports.z_anchor_navigation = ZAnchorNavigation;

//# sourceMappingURL=z-anchor-navigation.cjs.entry.js.map