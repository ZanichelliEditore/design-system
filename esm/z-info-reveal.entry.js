import { r as registerInstance, h, a as Host, g as getElement } from './index-f16bc2ca.js';
import { J as InfoRevealPosition, e as ControlSize } from './index-2255c6c8.js';

const stylesCss = ":host{--z-info-reveal-panel-width:384px;--trigger-size:44px;position:relative}:host *{box-sizing:border-box}button{--trigger-icon-size:calc(var(--trigger-size) / 2);display:flex;align-items:center;justify-content:center;padding:0;border:none;background-color:transparent;cursor:pointer;font-family:inherit;letter-spacing:inherit}button:focus:focus-visible{box-shadow:var(--shadow-focus-primary);outline:none}.z-info-reveal-trigger{min-width:var(--trigger-size);height:var(--trigger-size);padding:calc((var(--trigger-size) - var(--trigger-icon-size)) / 2);background-color:var(--color-surface05);border-radius:var(--border-radius);color:var(--color-text-inverse);column-gap:var(--space-unit);font-weight:var(--font-sb);line-height:1rem}:host([size=\"big\"]) .z-info-reveal-trigger{font-size:var(--font-size-2)}:host([size=\"small\"]) .z-info-reveal-trigger{--trigger-size:36px;font-size:var(--font-size-2)}:host([size=\"x-small\"]) .z-info-reveal-trigger{--trigger-size:32px;padding:var(--space-unit);font-size:var(--font-size-1)}:host>.z-info-reveal-trigger z-icon{--z-icon-width:var(--trigger-icon-size);--z-icon-height:var(--trigger-icon-size);display:flex;fill:var(--color-inverse-icon)}:host([size=\"small\"])>.z-info-reveal-trigger z-icon{--trigger-icon-size:18px}:host([size=\"x-small\"])>.z-info-reveal-trigger z-icon{--trigger-icon-size:16px}.z-info-reveal-panel{position:absolute;display:flex;width:var(--z-info-reveal-panel-width);height:fit-content;align-items:flex-start;padding:calc(var(--space-unit) * 1.5);background-color:var(--color-surface05);border-radius:var(--border-radius);box-shadow:var(--shadow-4);color:var(--color-text-inverse);column-gap:var(--space-unit)}.z-info-reveal-panel[hidden]{display:none}:host([position=\"top_left\"]) .z-info-reveal-panel,:host([position=\"top_right\"]) .z-info-reveal-panel{top:0}:host([position=\"bottom_left\"]) .z-info-reveal-panel,:host([position=\"bottom_right\"]) .z-info-reveal-panel{bottom:0}:host([position=\"top_right\"]) .z-info-reveal-panel,:host([position=\"bottom_right\"]) .z-info-reveal-panel{right:0}:host([position=\"top_left\"]) .z-info-reveal-panel,:host([position=\"bottom_left\"]) .z-info-reveal-panel{left:0}.z-info-reveal-panel .z-info-reveal-close{margin-left:auto}.z-info-reveal-panel z-icon{fill:var(--color-inverse-icon)}@media (max-width: 767px){.z-info-reveal-panel{position:fixed;top:auto !important;bottom:auto !important;left:var(--grid-margin) !important;width:calc(100% - (var(--grid-margin) * 2)) !important;max-width:none !important;margin-top:calc(var(--trigger-size) * -1)}}";
const ZInfoRevealStyle0 = stylesCss;

const ZInfoReveal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: '9760fea9358ffa3422f6dad090a03c30cd8b51f2', open: this.open }, h("button", { key: '52c39a04ac63089ecb493927b49dea106a94ee93', class: "z-info-reveal-trigger", type: "button", onClick: this.togglePanel.bind(this), "aria-label": !this.label ? this.ariaLabel : undefined, "aria-expanded": this.open ? "true" : "false", "aria-controls": "z-info-reveal-panel" }, this.icon && h("z-icon", { name: this.icon }), this.label && h("span", { class: "z-info-reveal-label" }, this.label)), h("div", { key: '839afc7d65706951dcf0b5a56aaa69c6c56cc720', class: "z-info-reveal-panel", id: "z-info-reveal-panel", ref: (el) => (this.panel = el), hidden: !this.open }, h("slot", { key: '598c69722edab2f836962b3807e50a4a8a296aee' }), h("button", { key: '53c5f103f7bcca4bf1d6ccb8d4454459b1a82afd', class: "z-info-reveal-close", type: "button", onClick: this.closePanel.bind(this), "aria-label": "Chiudi pannello informazioni" }, h("z-icon", { key: '506717510c3ab82f30efbfe70753af7bc277a29f', name: "multiply" })))));
    }
    get host() { return getElement(this); }
    static get watchers() { return {
        "position": ["adjustPanelPosition"],
        "open": ["adjustPanelPosition"]
    }; }
};
ZInfoReveal.style = ZInfoRevealStyle0;

export { ZInfoReveal as z_info_reveal };

//# sourceMappingURL=z-info-reveal.entry.js.map