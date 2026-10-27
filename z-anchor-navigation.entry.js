import { r as registerInstance, h, H as Host, d as getElement } from './index-SFwvdS4t.js';
import { B as ButtonVariant, e as ControlSize } from './index-DdetsoIY.js';

const stylesCss = () => `html{scroll-behavior:smooth}z-anchor-navigation nav{display:none;flex-direction:column;justify-content:flex-start;row-gap:calc(var(--space-unit) / 2)}z-anchor-navigation[collapsed] nav{display:flex;margin-top:var(--space-unit)}z-anchor-navigation nav a{display:-webkit-box;overflow:clip;width:100%;box-sizing:border-box;padding:calc(var(--space-unit) * 1.5) calc(var(--space-unit) * 2);-webkit-box-orient:vertical;font-weight:inherit;-webkit-line-clamp:2;line-clamp:2;overflow-clip-margin:content-box;text-decoration:none}z-anchor-navigation nav>* a{color:inherit}z-anchor-navigation nav * a:not(:only-child){padding-right:calc(var(--space-unit) * 5)}@supports not (overflow-clip-margin: content-box){z-anchor-navigation nav a{display:inline-block;overflow:hidden;-webkit-line-clamp:none;line-clamp:none;text-overflow:ellipsis;white-space:nowrap}}z-anchor-navigation nav>*{position:relative;border-left:var(--border-size-large) solid var(--color-default-icon);color:var(--color-default-text);font-family:var(--font-family-sans);transition:background-color 0.3s ease-in-out,     border-color 0.3s ease-in-out,     color 0.3s ease-in-out}z-anchor-navigation nav>[data-current]{border-left-color:var(--color-primary01);color:var(--color-primary01);font-weight:var(--font-sb)}z-anchor-navigation nav>*>*:is(z-button,button){position:absolute;top:50%;right:0;transform:translateY(-50%);transition:opacity 0.3s ease-in-out}z-anchor-navigation nav>*:focus:focus-visible,z-anchor-navigation nav>*>*:focus:focus-visible{box-shadow:var(--shadow-focus-primary);outline:none}z-anchor-navigation nav button{padding:0;border:none;margin:0;background-color:transparent}@media (min-width: 768px){z-anchor-navigation:not([is-collapsed]) z-button.toggle{display:none !important}z-anchor-navigation:not([is-collapsed]) nav{display:flex}z-anchor-navigation nav>*>:is(z-button,button){opacity:0;pointer-events:none}@media (hover: hover){z-anchor-navigation nav>:is([data-current],:hover,:focus,:focus-within)>:is(z-button,button){fill:var(--color-default-icon);opacity:1;pointer-events:unset}z-anchor-navigation nav>*:hover{border-left-color:var(--color-hover-primary);background-color:var(--color-background);color:var(--color-hover-primary)}}z-anchor-navigation[hide-unselected] nav>*:not([data-current],:hover,:focus,:focus-within){color:transparent;fill:transparent}}`;

const ZAnchorNavigation = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * If enabled, the text of each anchor will be hidden unless
         * for the current one or the one the user is hovering.
         */
        this.hideUnselected = false;
        /**
         * Enables automatic inference of the current item, listening for hash change
         * and checking the `href` of the slotted anchors.
         * When disabled, the highlight of current item must be handled manually by setting the `data-current`
         * attribute to the correct slotted items and the `aria-current` attribute to the anchors.
         */
        this.autoCurrent = true;
        /**
         * Sets the label of the button displayed on mobile viewport when the anchor navigation is collapsed
         */
        this.collapsedLabel = "salta a";
        /**
         * Explicitly collapse anchor navigation.
         * If false, it will collapse automatically only on mobile.
         */
        this.isCollapsed = false;
        /**
         * Whether the mobile list is collapsed.
         */
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
        return (h(Host, { key: '011b87db007cf01c52321e35439e10331efbc792', collapsed: this.collapsed, class: "z-scrollbar" }, h("z-button", { key: '29af3c3ba5b6706aebb7ac269a4004a98d3f0dd9', class: "toggle", size: ControlSize.SMALL, variant: ButtonVariant.SECONDARY, icon: this.collapsed ? "chevron-up" : "chevron-down", onClick: this.toggleCollapsed.bind(this) }, this.collapsedLabel), h("nav", { key: 'a6f0dd31673d81f822cd65ad024434f58a1e1fa3', ref: (el) => (this.nav = el) }, h("slot", { key: '8488115014b8e3d1a81930c9dedf8dce1d08975e' }))));
    }
    get host() { return getElement(this); }
};
ZAnchorNavigation.style = stylesCss();

export { ZAnchorNavigation as z_anchor_navigation };
