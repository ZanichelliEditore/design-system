import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './index9.js';

const stylesCss = ":host,::slotted(*),*{box-sizing:border-box}:host{position:relative;display:inline-flex;flex-direction:column;--z-menu-label-color:var(--color-default-text)}::slotted(a){text-decoration:none}::slotted(*){color:var(--color-default-text);font-family:var(--font-family-sans);font-weight:var(--font-rg)}.menu-label{padding:0;border:0;margin:0;background:transparent;border-radius:0;color:inherit;outline:none;text-align:left}button.menu-label{cursor:pointer}.menu-label:focus-within{z-index:1;padding-right:calc(var(--space-unit) * 0.5);padding-left:calc(var(--space-unit) * 0.5);margin-right:calc(var(--space-unit) * -0.5);margin-left:calc(var(--space-unit) * -0.5);box-shadow:var(--shadow-focus-primary)}.menu-label .menu-label-content{position:relative;display:flex;align-items:center}:host(:is([active],[open])) .menu-label-content,.menu-label:focus-within .menu-label-content{font-weight:var(--font-bd)}:host(:is([active],[open])) .menu-label-content ::slotted(*),.menu-label:focus-within .menu-label-content ::slotted(*){letter-spacing:normal}:host .menu-label .menu-label-content ::slotted(*:not([slot]):focus:focus-visible){box-shadow:none !important}:host(:is([active],[open],[vertical-context])) .menu-label .menu-label-content::after,.menu-label .menu-label-content:hover::after,.menu-label:focus-within .menu-label-content::after{position:absolute;bottom:0;left:0;width:100%;content:\"\";pointer-events:none}:host([vertical-context]) .menu-label-content::after{height:var(--border-size-small);background-color:var(--color-surface03)}:host(:is([active],[open])) .menu-label .menu-label-content::after,.menu-label .menu-label-content:hover::after,.menu-label:focus-within .menu-label-content::after{height:var(--border-size-large);background-color:var(--color-secondary01)}::slotted([data-text])::after{height:0;content:attr(data-text);content:attr(data-text) / \"\";font-weight:var(--font-bd);letter-spacing:normal;pointer-events:none;user-select:none;visibility:hidden}@media speech{::slotted([data-text])::after{display:none}}::slotted([data-text]){display:inline-flex;flex-direction:column}.menu-label .menu-label-content ::slotted(*){display:inline-flex;width:100%;margin:0;appearance:none;color:var(--z-menu-label-color);font-family:var(--font-family-sans);font-size:var(--font-size-5);font-weight:inherit;letter-spacing:0.36px;line-height:1.2;outline:none}.menu-label .menu-label-content ::slotted(*),.menu-label .menu-label-content z-icon{padding:var(--space-unit) 0}.menu-label .menu-label-content z-icon{margin-left:calc(var(--space-unit) * 1.5);fill:currentcolor}.content{background:var(--color-surface01)}:host(:not([open])) .content{display:none}:host([floating]) .content{position:absolute;top:100%;left:0;width:375px;min-width:100%;max-width:100vw;padding:var(--space-unit) var(--space-unit) calc(var(--space-unit) * 2);box-shadow:var(--shadow-2)}:host(:not([floating])) .content{width:100%}.header{display:flex;align-items:center;padding:var(--space-unit) 0 calc(var(--space-unit) * 2)}.header ::slotted(img[slot=\"header\"]){width:calc(var(--space-unit) * 11.25);height:auto;object-fit:contain}.header ::slotted([slot=\"header\"]:not(:first-child)){margin:auto 0;margin-left:calc(var(--space-unit) * 2.5);font-size:var(--font-size-3);font-weight:var(--font-sb);line-height:1.5}.items{display:flex;flex-direction:column;align-items:flex-start;background:inherit}.items>::slotted([slot=\"item\"]){width:100%;margin:0;font-size:var(--font-size-3);line-height:1.25;outline:none}.items>::slotted([slot=\"item\"]:focus:focus-visible){box-shadow:var(--shadow-focus-primary)}.items>::slotted([slot=\"item\"]:not(z-menu-section)){padding:calc(var(--space-unit) * 2) calc(var(--space-unit) * 0.5);border-bottom:var(--border-size-small) solid var(--color-surface05)}.items>::slotted([slot=\"item\"]:hover),.items>::slotted([slot=\"item\"]:focus:focus-visible),.items>::slotted([slot=\"item\"]:active){border-color:var(--color-secondary01);font-weight:var(--font-bd)}";
const ZMenuStyle0 = stylesCss;

const ZMenu$1 = /*@__PURE__*/ proxyCustomElement(class ZMenu extends HTMLElement {
    toggle() {
        if (!this.hasContent) {
            return;
        }
        this.open = !this.open;
        this.open ? this.opened.emit() : this.closed.emit();
    }
    /** Close the floating list when a click is performed outside of this Element. */
    handleClick(ev) {
        if (!this.floating || !this.open || this.hostElement.contains(ev.target)) {
            return;
        }
        this.reflow();
        this.open = false;
        this.closed.emit();
    }
    onOpenChanged() {
        if (this.open) {
            this.reflow(true);
        }
        else {
            cancelAnimationFrame(this.raf);
        }
    }
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.opened = createEvent(this, "opened", 7);
        this.closed = createEvent(this, "closed", 7);
        this.active = undefined;
        this.floating = false;
        this.open = false;
        this.verticalContext = false;
        this.hasHeader = undefined;
        this.hasContent = undefined;
        this.toggle = this.toggle.bind(this);
        this.checkContent = this.checkContent.bind(this);
        this.onLabelSlotChange = this.onLabelSlotChange.bind(this);
        this.onItemsChange = this.onItemsChange.bind(this);
    }
    componentWillLoad() {
        this.checkContent();
    }
    /**
     * Sets slotted item text as `data-text` attribute value, to let CSS use it through `attr()`.
     * @param ev Slotchange event
     */
    onLabelSlotChange(ev) {
        const labelElement = ev.target.assignedElements()[0];
        labelElement.dataset.text = labelElement === null || labelElement === void 0 ? void 0 : labelElement.textContent;
    }
    /**
     * Correctly set position of the floating menu in order to prevent overflow.
     * @param live Should run the method on every refresh frame.
     */
    reflow(live = false) {
        if (this.content) {
            const { style } = this.content;
            const { left } = this.hostElement.getBoundingClientRect();
            const widthPx = getComputedStyle(this.content).width;
            const width = widthPx ? parseFloat(widthPx.replace("px", "")) : 375;
            const safeScrollbarSpace = 30;
            style.left = `${Math.min(window.innerWidth - left - width - safeScrollbarSpace, 0)}px`;
        }
        if (live) {
            this.raf = requestAnimationFrame(this.reflow.bind(this, live));
        }
    }
    /**
     * Check if some content slot is set.
     */
    checkContent() {
        this.hasHeader = !!this.hostElement.querySelectorAll("[slot=header]").length;
        this.hasContent = !!this.hostElement.querySelectorAll("[slot=item]").length || this.hasHeader;
    }
    /**
     * Set `menuitem` role to all menu items.
     * Set the item's inner text to the `data-text` attribute (this is for using bold text avoiding layout shifts).
     */
    onItemsChange() {
        this.checkContent();
        const items = this.hostElement.querySelectorAll("[slot=item]");
        items.forEach((item) => {
            item.setAttribute("role", "menuitem");
            item.dataset.text = item.textContent;
        });
    }
    renderMenuLabel() {
        if (this.hasContent) {
            return (h("button", { class: "menu-label", "aria-expanded": this.open ? "true" : "false", "aria-label": this.open ? "Chiudi menù" : "Apri menù", onClick: this.toggle }, h("div", { class: "menu-label-content" }, h("slot", { onSlotchange: this.onLabelSlotChange }), h("z-icon", { name: this.open ? "chevron-up" : "chevron-down" }))));
        }
        return (h("div", { class: "menu-label" }, h("div", { class: "menu-label-content" }, h("slot", { onSlotchange: this.onLabelSlotChange }))));
    }
    render() {
        return (h(Host, { key: '0ecfa6c7439e2472ebb454362e5dd86b4eef9ad3' }, this.renderMenuLabel(), this.hasContent && (h("div", { class: "content", ref: (el) => (this.content = el) }, this.hasHeader && (h("header", { class: "header" }, h("slot", { name: "header", onSlotchange: this.checkContent }))), h("div", { class: "items", role: "menu" }, h("slot", { name: "item", onSlotchange: this.onItemsChange }))))));
    }
    get hostElement() { return this; }
    static get watchers() { return {
        "open": ["onOpenChanged"]
    }; }
    static get style() { return ZMenuStyle0; }
}, [1, "z-menu", {
        "active": [516],
        "floating": [516],
        "open": [1540],
        "verticalContext": [516, "vertical-context"],
        "hasHeader": [32],
        "hasContent": [32]
    }, [[4, "click", "handleClick"]], {
        "open": ["onOpenChanged"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-menu", "z-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "z-menu":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZMenu$1);
            }
            break;
        case "z-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const ZMenu = ZMenu$1;
const defineCustomElement = defineCustomElement$1;

export { ZMenu, defineCustomElement };

//# sourceMappingURL=z-menu.js.map