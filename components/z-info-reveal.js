import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { H as InfoRevealPosition, e as ControlSize } from './index2.js';
import { d as defineCustomElement$2 } from './index9.js';

const stylesCss = ":host{--z-info-reveal-panel-width:384px;--trigger-size:44px;position:relative}:host *{box-sizing:border-box}button{--trigger-icon-size:calc(var(--trigger-size) / 2);display:flex;align-items:center;justify-content:center;padding:0;border:none;background-color:transparent;cursor:pointer;font-family:inherit;letter-spacing:inherit}button:focus:focus-visible{box-shadow:var(--shadow-focus-primary);outline:none}.z-info-reveal-trigger{min-width:var(--trigger-size);height:var(--trigger-size);padding:calc((var(--trigger-size) - var(--trigger-icon-size)) / 2);background-color:var(--color-surface05);border-radius:var(--border-radius);color:var(--color-text-inverse);column-gap:var(--space-unit);font-weight:var(--font-sb);line-height:1rem}:host([size=\"big\"]) .z-info-reveal-trigger{font-size:var(--font-size-2)}:host([size=\"small\"]) .z-info-reveal-trigger{--trigger-size:36px;font-size:var(--font-size-2)}:host([size=\"x-small\"]) .z-info-reveal-trigger{--trigger-size:32px;padding:var(--space-unit);font-size:var(--font-size-1)}:host>.z-info-reveal-trigger z-icon{--z-icon-width:var(--trigger-icon-size);--z-icon-height:var(--trigger-icon-size);display:flex;fill:var(--color-inverse-icon)}:host([size=\"small\"])>.z-info-reveal-trigger z-icon{--trigger-icon-size:18px}:host([size=\"x-small\"])>.z-info-reveal-trigger z-icon{--trigger-icon-size:16px}.z-info-reveal-panel{position:absolute;display:flex;width:var(--z-info-reveal-panel-width);height:fit-content;align-items:flex-start;padding:calc(var(--space-unit) * 1.5);background-color:var(--color-surface05);border-radius:var(--border-radius);box-shadow:var(--shadow-4);color:var(--color-text-inverse);column-gap:var(--space-unit)}.z-info-reveal-panel[hidden]{display:none}:host([position=\"top_left\"]) .z-info-reveal-panel,:host([position=\"top_right\"]) .z-info-reveal-panel{top:0}:host([position=\"bottom_left\"]) .z-info-reveal-panel,:host([position=\"bottom_right\"]) .z-info-reveal-panel{bottom:0}:host([position=\"top_right\"]) .z-info-reveal-panel,:host([position=\"bottom_right\"]) .z-info-reveal-panel{right:0}:host([position=\"top_left\"]) .z-info-reveal-panel,:host([position=\"bottom_left\"]) .z-info-reveal-panel{left:0}.z-info-reveal-panel .z-info-reveal-close{margin-left:auto}.z-info-reveal-panel z-icon{fill:var(--color-inverse-icon)}@media (max-width: 767px){.z-info-reveal-panel{position:fixed;top:auto !important;bottom:auto !important;left:var(--grid-margin) !important;width:calc(100% - (var(--grid-margin) * 2)) !important;max-width:none !important;margin-top:calc(var(--trigger-size) * -1)}}";
const ZInfoRevealStyle0 = stylesCss;

const ZInfoReveal$1 = /*@__PURE__*/ proxyCustomElement(class ZInfoReveal extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.icon = "informationsource";
        this.position = InfoRevealPosition.BOTTOM_RIGHT;
        this.label = undefined;
        this.ariaLabel = "Apri pannello informazioni";
        this.size = ControlSize.BIG;
        this.open = false;
    }
    /**
     * Adjust the position of the info panel to prevent exiting the viewport.
     */
    adjustPanelPosition() {
        if (!this.open || !this.panel) {
            return;
        }
        const rect = this.host.getBoundingClientRect();
        const gridMargin = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--grid-margin"), 10);
        const pageWidth = document.documentElement.offsetWidth;
        // Available space for the info panel to grow towards the edge of the page, based on the `position` prop.
        const availableSpace = Math.round((this.position.includes("left") ? pageWidth - rect.left : rect.right) - gridMargin);
        this.panel.style.maxWidth = `${availableSpace}px`;
    }
    /**
     * Toggle the open state of the info panel.
     */
    togglePanel() {
        this.open = !this.open;
    }
    /**
     * Close the info panel.
     */
    closePanel() {
        this.open = false;
    }
    handleEscapeKey(event) {
        if (event.key === "Escape" && this.open) {
            this.closePanel();
        }
    }
    render() {
        return (h(Host, { key: 'f6264a965cec2cac4e38ce1ffb8e6738f3b1fcd4', open: this.open }, h("button", { key: 'fdeac683e761204c28a6f9a017062a2bf86a06d6', class: "z-info-reveal-trigger", type: "button", onClick: this.togglePanel.bind(this), "aria-label": !this.label ? this.ariaLabel : undefined, "aria-expanded": this.open ? "true" : "false", "aria-controls": "z-info-reveal-panel" }, this.icon && h("z-icon", { key: 'ea75d8979c67562f88768aa02e237883f0ea89f8', name: this.icon }), this.label && h("span", { key: '4e37cd8bdb878f083682f65ac592b15af04d48e4', class: "z-info-reveal-label" }, this.label)), h("div", { key: '1808554bf404059a691058c5069c7e3bddf8e50f', class: "z-info-reveal-panel", id: "z-info-reveal-panel", ref: (el) => (this.panel = el), hidden: !this.open }, h("slot", { key: 'b1aca025f4e3fe0e27ebe28b0faaf37971cb2c32' }), h("button", { key: '9037710ed3fc0f2972dbe263b0d5df120373b34a', class: "z-info-reveal-close", type: "button", onClick: this.closePanel.bind(this), "aria-label": "Chiudi pannello informazioni" }, h("z-icon", { key: 'f0cc7e4778dfa59623c32b02c69b0aed00892aeb', name: "multiply" })))));
    }
    get host() { return this; }
    static get watchers() { return {
        "position": ["adjustPanelPosition"],
        "open": ["adjustPanelPosition"]
    }; }
    static get style() { return ZInfoRevealStyle0; }
}, [1, "z-info-reveal", {
        "icon": [1],
        "position": [513],
        "label": [1],
        "ariaLabel": [1, "aria-label"],
        "size": [513],
        "open": [32]
    }, [[9, "resize", "adjustPanelPosition"], [10, "keydown", "handleEscapeKey"]], {
        "position": ["adjustPanelPosition"],
        "open": ["adjustPanelPosition"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-info-reveal", "z-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "z-info-reveal":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZInfoReveal$1);
            }
            break;
        case "z-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const ZInfoReveal = ZInfoReveal$1;
const defineCustomElement = defineCustomElement$1;

export { ZInfoReveal, defineCustomElement };

//# sourceMappingURL=z-info-reveal.js.map