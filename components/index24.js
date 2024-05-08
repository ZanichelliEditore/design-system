import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { h as handleKeyboardSubmit } from './utils.js';
import { H as Hammer } from './hammer.js';

const stylesCss = ":host{display:block;width:100%;box-sizing:border-box;font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>header{display:flex;height:36px;flex-flow:row nowrap;align-items:center;justify-content:center;border:var(--border-size-small) solid var(--color-surface03);background:var(--color-surface01);border-radius:var(--space-unit) var(--space-unit) 0 0;cursor:pointer}:host>header:focus{outline:none}:host>header::-moz-focus-inner{border:0}";
const ZPocketHeaderStyle0 = stylesCss;

const ZPocketHeader = /*@__PURE__*/ proxyCustomElement(class ZPocketHeader extends HTMLElement {
    emitPocketHeaderClick() {
        this.pocketHeaderClick.emit({ id: this.pocketid });
    }
    emitPocketHeaderPan(direction) {
        this.pocketHeaderPan.emit({ id: this.pocketid, direction });
    }
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.pocketHeaderClick = createEvent(this, "pocketHeaderClick", 7);
        this.pocketHeaderPan = createEvent(this, "pocketHeaderPan", 7);
        this.pocketid = undefined;
        this.emitPocketHeaderClick = this.emitPocketHeaderClick.bind(this);
    }
    componentDidLoad() {
        // INFO: swipe handling
        const mc = new Hammer(this.swipeWrap);
        mc.get("pan").set({ direction: Hammer.DIRECTION_VERTICAL });
        mc.on("panup", () => this.emitPocketHeaderPan("up"));
        mc.on("pandown", () => this.emitPocketHeaderPan("down"));
    }
    render() {
        return (h("header", { key: 'f14fbd3ff1d6757a840175eb9f17e71e40d7c507', role: "button", tabindex: 0, onClick: () => this.emitPocketHeaderClick(), onKeyPress: (ev) => handleKeyboardSubmit(ev, this.emitPocketHeaderClick), ref: (el) => (this.swipeWrap = el) }, h("slot", { key: 'f6087dbe044ca3f0d2777194a73e60c4d5306c3c' })));
    }
    static get style() { return ZPocketHeaderStyle0; }
}, [1, "z-pocket-header", {
        "pocketid": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-pocket-header"];
    components.forEach(tagName => { switch (tagName) {
        case "z-pocket-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZPocketHeader);
            }
            break;
    } });
}

export { ZPocketHeader as Z, defineCustomElement as d };

//# sourceMappingURL=index24.js.map