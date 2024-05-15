import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { q as PocketStatus } from './index2.js';
import { d as defineCustomElement$5 } from './index9.js';
import { d as defineCustomElement$4 } from './index22.js';
import { d as defineCustomElement$3 } from './index23.js';
import { d as defineCustomElement$2 } from './index24.js';

const stylesCss = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>z-pocket{width:100%}:host>z-pocket.closed{width:158px}:host>z-pocket>z-pocket-header{color:var(--color-primary01);fill:var(--color-primary01);font-size:12px;font-weight:var(--font-sb)}:host>z-pocket>z-pocket-header span.badge{display:inline-block;padding:0 calc(var(--space-unit) * 0.5);margin-left:var(--space-unit);background:var(--color-secondary02);border-radius:50%;color:var(--color-surface01)}:host>z-pocket>z-pocket-header>z-icon{margin-left:var(--space-unit)}:host>z-pocket>z-pocket-body>div.body{overflow:hidden;padding:var(--space-unit);margin:0 var(--space-unit)}:host>z-pocket.preview>z-pocket-body{position:relative}:host>z-pocket.preview>z-pocket-body>div.gradient{position:absolute;top:0;right:0;bottom:0;left:0;background-image:linear-gradient(rgb(255 0 0 / 0%), white)}:host>z-pocket.open>z-pocket-body>div.body{overflow:auto;max-height:calc(100vh - 166px);scrollbar-width:none}:host ::-webkit-scrollbar{width:0}@media only screen and (min-width: 768px){:host>z-pocket{width:768px;margin:0 calc((100% - 768px) / 2)}:host>z-pocket.closed{margin:0 calc((100% - 158px) / 2)}:host>z-pocket.open>z-pocket-body>div.body{max-height:326px}}@media only screen and (min-width: 1152px){:host>z-pocket.open>z-pocket-body>div.body{scrollbar-color:var(--color-primary01) var(--color-surface03);scrollbar-width:thin}:host ::-webkit-scrollbar{width:10px;background:linear-gradient(\n      90deg,\n      var(--color-surface01) 2px,\n      var(--color-surface03) 4px,\n      var(--color-surface01) 8px\n    );border-radius:var(--border-radius)}:host ::-webkit-scrollbar-thumb{width:var(--space-unit);background-color:var(--color-primary01);border-radius:var(--border-radius)}}";
const ZMessagesPocketStyle0 = stylesCss;

const ZMessagesPocket$1 = /*@__PURE__*/ proxyCustomElement(class ZMessagesPocket extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.pocketid = undefined;
        this.messages = undefined;
        this.status = PocketStatus.PREVIEW;
    }
    handlePocketToggle(e) {
        if (e.detail.id === this.pocketid) {
            this.status = e.detail.status;
        }
    }
    renderHeader() {
        let message;
        let icon;
        switch (this.status) {
            case PocketStatus.PREVIEW:
            case PocketStatus.CLOSED:
                message = (h("span", null, "Messaggi ", h("span", { class: "badge" }, this.messages)));
                icon = "chevron-up";
                break;
            case PocketStatus.OPEN:
                message = h("span", null, "Riduci");
                icon = "chevron-down";
                break;
        }
        return (h("z-pocket-header", { pocketid: this.pocketid }, message, h("z-icon", { name: icon, width: 14, height: 14 })));
    }
    renderBody() {
        return (h("z-pocket-body", { pocketid: this.pocketid }, h("div", { class: "body" }, h("slot", null)), h("div", { class: "gradient" })));
    }
    render() {
        return (h("z-pocket", { key: 'e68496d2dd8bdcf5a008d06a6b4b57f971a8134d', pocketid: this.pocketid, status: this.status, class: this.status }, this.renderHeader(), this.renderBody()));
    }
    static get style() { return ZMessagesPocketStyle0; }
}, [1, "z-messages-pocket", {
        "pocketid": [1],
        "messages": [2],
        "status": [1025]
    }, [[16, "pocketToggle", "handlePocketToggle"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-messages-pocket", "z-icon", "z-pocket", "z-pocket-body", "z-pocket-header"];
    components.forEach(tagName => { switch (tagName) {
        case "z-messages-pocket":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZMessagesPocket$1);
            }
            break;
        case "z-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "z-pocket":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "z-pocket-body":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "z-pocket-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const ZMessagesPocket = ZMessagesPocket$1;
const defineCustomElement = defineCustomElement$1;

export { ZMessagesPocket, defineCustomElement };

//# sourceMappingURL=z-messages-pocket.js.map