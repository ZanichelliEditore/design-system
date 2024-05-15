import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { P as PopoverPosition } from './index2.js';
import { d as defineCustomElement$2 } from './index25.js';

const stylesCss = ":host{--z-tooltip-theme--surface:var(--color-surface01);--z-tooltip-theme--text:var(--color-default-text);--z-tooltip-shadow-filter:drop-shadow(0 1px 2px var(--shadow-color-base))}:host([dark]) z-popover{--z-popover-theme--surface:var(--color-surface05);--z-popover-theme--text:var(--color-text-inverse)}z-popover{--z-popover-padding:var(--space-unit);--z-popover-theme--surface:var(--z-tooltip-theme--surface);--z-popover-theme--text:var(--z-tooltip-theme--text);--z-popover-shadow-filter:var(--z-tooltip-shadow-filter)}";
const ZTooltipStyle0 = stylesCss;

const ZTooltip$1 = /*@__PURE__*/ proxyCustomElement(class ZTooltip extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.position = PopoverPosition.AUTO;
        this.dark = false;
        this.open = false;
        this.bindTo = undefined;
        this.closable = true;
    }
    onPopoverOpenChange() {
        this.open = this.popoverEl.open;
    }
    render() {
        return (h("z-popover", { key: '307a54499b3c7c6b9929f427a226fbb784b4c620', ref: (el) => (this.popoverEl = el), bindTo: this.bindTo, open: this.open, position: this.position, closable: this.closable, center: true, showArrow: true }, h("slot", { key: '09baa9194d76cec1bb471d65a5903ac3642823b8' })));
    }
    static get style() { return ZTooltipStyle0; }
}, [1, "z-tooltip", {
        "position": [513],
        "dark": [516],
        "open": [1540],
        "bindTo": [1, "bind-to"],
        "closable": [4]
    }, [[0, "openChange", "onPopoverOpenChange"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-tooltip", "z-popover"];
    components.forEach(tagName => { switch (tagName) {
        case "z-tooltip":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZTooltip$1);
            }
            break;
        case "z-popover":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const ZTooltip = ZTooltip$1;
const defineCustomElement = defineCustomElement$1;

export { ZTooltip, defineCustomElement };

//# sourceMappingURL=z-tooltip.js.map