'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dc60bee7.js');
const index$1 = require('./index-39ce4edf.js');

const stylesCss = ":host{--z-info-reveal-panel-width:384px;--trigger-size:44px;position:relative}:host *{box-sizing:border-box}button{--trigger-icon-size:calc(var(--trigger-size) / 2);display:flex;align-items:center;justify-content:center;padding:0;border:none;background-color:transparent;cursor:pointer;font-family:inherit;letter-spacing:inherit}button:focus:focus-visible{box-shadow:var(--shadow-focus-primary);outline:none}.z-info-reveal-trigger{min-width:var(--trigger-size);height:var(--trigger-size);padding:calc((var(--trigger-size) - var(--trigger-icon-size)) / 2);background-color:var(--color-surface05);border-radius:var(--border-radius);color:var(--color-text-inverse);column-gap:var(--space-unit);font-weight:var(--font-sb);line-height:1rem}:host([size=\"big\"]) .z-info-reveal-trigger{font-size:var(--font-size-2)}:host([size=\"small\"]) .z-info-reveal-trigger{--trigger-size:36px;font-size:var(--font-size-2)}:host([size=\"x-small\"]) .z-info-reveal-trigger{--trigger-size:32px;padding:var(--space-unit);font-size:var(--font-size-1)}:host>.z-info-reveal-trigger z-icon{--z-icon-width:var(--trigger-icon-size);--z-icon-height:var(--trigger-icon-size);display:flex;fill:var(--color-inverse-icon)}:host([size=\"small\"])>.z-info-reveal-trigger z-icon{--trigger-icon-size:18px}:host([size=\"x-small\"])>.z-info-reveal-trigger z-icon{--trigger-icon-size:16px}.z-info-reveal-panel{position:absolute;display:flex;width:var(--z-info-reveal-panel-width);height:fit-content;align-items:flex-start;padding:calc(var(--space-unit) * 1.5);background-color:var(--color-surface05);border-radius:var(--border-radius);box-shadow:var(--shadow-4);color:var(--color-text-inverse);column-gap:var(--space-unit)}.z-info-reveal-panel[hidden]{display:none}:host([position=\"top_left\"]) .z-info-reveal-panel,:host([position=\"top_right\"]) .z-info-reveal-panel{top:0}:host([position=\"bottom_left\"]) .z-info-reveal-panel,:host([position=\"bottom_right\"]) .z-info-reveal-panel{bottom:0}:host([position=\"top_right\"]) .z-info-reveal-panel,:host([position=\"bottom_right\"]) .z-info-reveal-panel{right:0}:host([position=\"top_left\"]) .z-info-reveal-panel,:host([position=\"bottom_left\"]) .z-info-reveal-panel{left:0}.z-info-reveal-panel .z-info-reveal-close{margin-left:auto}.z-info-reveal-panel z-icon{fill:var(--color-inverse-icon)}@media (max-width: 767px){.z-info-reveal-panel{position:fixed;top:auto !important;bottom:auto !important;left:var(--grid-margin) !important;width:calc(100% - (var(--grid-margin) * 2)) !important;max-width:none !important;margin-top:calc(var(--trigger-size) * -1)}}";
const ZInfoRevealStyle0 = stylesCss;

const ZInfoReveal = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.icon = "informationsource";
        this.position = index$1.InfoRevealPosition.BOTTOM_RIGHT;
        this.label = undefined;
        this.ariaLabel = "Apri pannello informazioni";
        this.size = index$1.ControlSize.BIG;
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
        return (index.h(index.Host, { key: 'db425718606f2b7f411fab9cdac57d91ce88560c', open: this.open }, index.h("button", { key: 'a70882d456af51c526726220a05864ab54ea86d6', class: "z-info-reveal-trigger", type: "button", onClick: this.togglePanel.bind(this), "aria-label": !this.label ? this.ariaLabel : undefined, "aria-expanded": this.open ? "true" : "false", "aria-controls": "z-info-reveal-panel" }, this.icon && index.h("z-icon", { name: this.icon }), this.label && index.h("span", { class: "z-info-reveal-label" }, this.label)), index.h("div", { key: '765172552ea823e07e010a68c201f5fa76fbc93d', class: "z-info-reveal-panel", id: "z-info-reveal-panel", ref: (el) => (this.panel = el), hidden: !this.open }, index.h("slot", { key: 'f95ed8f0c6c94758b389139dde42289ef8b78ffc' }), index.h("button", { key: 'a80d002f3d07f101af8bcc84ef2a78d85da7036f', class: "z-info-reveal-close", type: "button", onClick: this.closePanel.bind(this), "aria-label": "Chiudi pannello informazioni" }, index.h("z-icon", { key: '015386db04b0f4bdb2fefd9da623fb03327fbf86', name: "multiply" })))));
    }
    get host() { return index.getElement(this); }
    static get watchers() { return {
        "position": ["adjustPanelPosition"],
        "open": ["adjustPanelPosition"]
    }; }
};
ZInfoReveal.style = ZInfoRevealStyle0;

exports.z_info_reveal = ZInfoReveal;

//# sourceMappingURL=z-info-reveal.cjs.entry.js.map