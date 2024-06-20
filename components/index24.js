import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { H as Hammer } from './hammer.js';
import { h as handleKeyboardSubmit } from './utils.js';

const stylesCss = ":host{display:block;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>header{display:-ms-flexbox;display:flex;height:36px;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border:var(--border-size-small) solid var(--color-surface03);background:var(--color-surface01);border-radius:var(--space-unit) var(--space-unit) 0 0;cursor:pointer}:host>header:focus{outline:none}:host>header::-moz-focus-inner{border:0}";
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
        return (h("header", { key: 'e7f1ed78dd4b33c701d5bd0f648c9401d8a38313', role: "button", tabindex: 0, onClick: () => this.emitPocketHeaderClick(), onKeyPress: (ev) => handleKeyboardSubmit(ev, this.emitPocketHeaderClick), ref: (el) => (this.swipeWrap = el) }, h("slot", { key: '1d8bb012ac6dcdf3337d0c70df59b3b098e9de56' })));
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