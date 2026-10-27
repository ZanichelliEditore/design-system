import { r as registerInstance, h, H as Host, d as getElement } from './index-SFwvdS4t.js';
import { M as InfoRevealPosition, e as ControlSize } from './index-DdetsoIY.js';

const stylesCss = () => `:host{--z-info-reveal-panel-width:384px;--trigger-size:44px;position:relative}:host *{box-sizing:border-box}button{--trigger-icon-size:calc(var(--trigger-size) / 2);display:flex;align-items:center;justify-content:center;padding:0;border:none;background-color:transparent;cursor:pointer;font-family:inherit;letter-spacing:inherit}button:focus:focus-visible{box-shadow:var(--shadow-focus-primary);outline:none}.z-info-reveal-trigger{min-width:var(--trigger-size);height:var(--trigger-size);padding:calc((var(--trigger-size) - var(--trigger-icon-size)) / 2);background-color:var(--color-surface05);border-radius:var(--border-radius);color:var(--color-text-inverse);column-gap:var(--space-unit);font-weight:var(--font-sb);line-height:1rem}:host([size="big"]) .z-info-reveal-trigger{font-size:var(--font-size-2)}:host([size="small"]) .z-info-reveal-trigger{--trigger-size:36px;font-size:var(--font-size-2)}:host([size="x-small"]) .z-info-reveal-trigger{--trigger-size:32px;padding:var(--space-unit);font-size:var(--font-size-1)}:host>.z-info-reveal-trigger z-icon{--z-icon-width:var(--trigger-icon-size);--z-icon-height:var(--trigger-icon-size);display:flex;fill:var(--color-inverse-icon)}:host([size="small"])>.z-info-reveal-trigger z-icon{--trigger-icon-size:var(--trigger-icon-size-small, 18px)}:host([size="x-small"])>.z-info-reveal-trigger z-icon{--trigger-icon-size:var(--trigger-icon-size-x-small, 16px)}.z-info-reveal-panel{position:absolute;z-index:19;display:flex;width:var(--z-info-reveal-panel-width);height:fit-content;align-items:flex-start;padding:calc(var(--space-unit) * 1.5);background-color:var(--color-surface05);border-radius:var(--border-radius);box-shadow:var(--shadow-4);color:var(--color-text-inverse);column-gap:var(--space-unit)}.z-info-reveal-panel[hidden]{display:none}:host([position="top_left"]) .z-info-reveal-panel,:host([position="top_right"]) .z-info-reveal-panel{top:0}:host([position="bottom_left"]) .z-info-reveal-panel,:host([position="bottom_right"]) .z-info-reveal-panel{bottom:0}:host([position="top_right"]) .z-info-reveal-panel,:host([position="bottom_right"]) .z-info-reveal-panel{right:0}:host([position="top_left"]) .z-info-reveal-panel,:host([position="bottom_left"]) .z-info-reveal-panel{left:0}.z-info-reveal-panel .z-info-reveal-close{margin-left:auto}.z-info-reveal-panel z-icon{fill:var(--color-inverse-icon)}@media (max-width: 767px){.z-info-reveal-panel{top:auto !important;bottom:auto !important;width:calc(var(--z-info-reveal-panel-width) - (var(--grid-margin) * 4)) !important;margin-top:calc(var(--trigger-size) * -1)}}`;

const ZInfoReveal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** Name of the icon for the trigger button */
        this.icon = "informationsource";
        /**
         * The position of the z-info-reveal in the page. This helps to correctly place the info panel.
         * The panel will grow in the opposite direction of the position.
         * For example, with the default position `BOTTOM_RIGHT`, the panel will grow vertically upwards and horizontally to the left.
         */
        this.position = InfoRevealPosition.BOTTOM_RIGHT;
        /** `aria-label` of the trigger button. It will be used only when the `label` prop is empty. */
        this.htmlAriaLabel = "Apri pannello informazioni";
        /** Size of the trigger button */
        this.size = ControlSize.BIG;
        /** Whether the info panel is open. */
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
        return (h(Host, { key: 'a17eade11bb03b087b94b47e8f2232870ebcc31c', open: this.open }, h("button", { key: 'c426d62e2ac8e362b343e665ae6a641c3833c234', class: "z-info-reveal-trigger", type: "button", onClick: this.togglePanel.bind(this), "aria-label": !this.label ? this.htmlAriaLabel || undefined : undefined, "aria-expanded": this.open ? "true" : "false", "aria-controls": "z-info-reveal-panel" }, this.icon && h("z-icon", { key: '2d93750e8a45a57a1ca3e8ae3510d8ad68ad7fec', name: this.icon }), this.label && h("span", { key: 'ecafc40fb1a65b3a2b7525a9b1b4f57e50e5bd95', class: "z-info-reveal-label" }, this.label)), h("div", { key: '1528cfab126f69091886760bf8eadf6cc92d2134', class: "z-info-reveal-panel", id: "z-info-reveal-panel", ref: (el) => (this.panel = el), hidden: !this.open }, h("slot", { key: '71736de1992142746e1ead583aad1ded7ea5e4a0' }), h("button", { key: 'cbe6e1671bdc2503a137f01a41a9194ff8cb6a6b', class: "z-info-reveal-close", type: "button", onClick: this.closePanel.bind(this), "aria-label": "Chiudi pannello informazioni" }, h("z-icon", { key: '5d2a752ad271c6a66f2c0dadb17eab9577d4ed88', name: "multiply" })))));
    }
    get host() { return getElement(this); }
    static get watchers() { return {
        "position": [{
                "adjustPanelPosition": 0
            }],
        "open": [{
                "adjustPanelPosition": 0
            }]
    }; }
};
ZInfoReveal.style = stylesCss();

export { ZInfoReveal as z_info_reveal };
