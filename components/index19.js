import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { L as LicenseType } from './index2.js';

const stylesCss = "header{position:relative;display:flex;width:auto;height:calc(var(--space-unit) * 6);flex-direction:row;align-items:flex-start;justify-content:space-between;border-bottom:var(--border-size-medium) solid var(--color-surface03);background-color:var(--color-surface01);border-radius:var(--border-radius) var(--border-radius) var(--border-no-radius) var(--border-no-radius)}slot[name=\"aria-heading\"]::slotted(*){position:absolute;overflow:hidden !important;width:1px !important;height:1px !important;padding:0 !important;border:0 none !important;margin:-1px !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important}header.real,header.trial,header.temp{border-bottom:var(--border-size-medium) solid var(--blue100);background-color:var(--color-primary03)}.card-title{overflow:hidden;height:calc(var(--space-unit) * 2);padding:calc(var(--space-unit) * 2);margin:0;color:var(--color-surface05);font-family:var(--font-family-sans);font-size:12px;font-weight:var(--font-sb);letter-spacing:0.22px;line-height:calc(var(--space-unit) * 2);text-overflow:ellipsis;text-transform:uppercase;white-space:nowrap}.faded{border-bottom:var(--border-size-medium) solid var(--color-surface02)}.faded.real,.faded.trial,.faded.temp{border-top:var(--border-size-medium) solid var(--blue100);border-right:var(--border-size-medium) solid var(--blue100);border-left:var(--border-size-medium) solid var(--blue100)}";
const ZMyzCardHeaderStyle0 = stylesCss;

const ZMyzCardHeader = /*@__PURE__*/ proxyCustomElement(class ZMyzCardHeader extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.titolo = undefined;
        this.faded = undefined;
        this.cardtype = undefined;
        this.allowTooltip = false;
    }
    getTitle() {
        return this.allowTooltip ? this.titolo : "";
    }
    componentDidLoad() {
        if (this.elementHasEllipsis()) {
            this.allowTooltip = true;
        }
    }
    elementHasEllipsis() {
        return this.ellipsis.offsetWidth < this.ellipsis.scrollWidth;
    }
    retrieveClass() {
        return {
            real: this.cardtype === LicenseType.REAL,
            trial: this.cardtype === LicenseType.TRIAL,
            temp: this.cardtype === LicenseType.TEMP,
            faded: this.faded,
        };
    }
    render() {
        return (h("header", { key: '42e4bbade9cd208a99dcee56b87ee0fcff8202b2', class: this.retrieveClass() }, h("slot", { key: '939ec6cec0e6b04daba246efa4cbd841c8f72199', name: "aria-heading" }), h("span", { key: 'd71fe4dcb951f026dccdb791f67c56aa74508487', class: "card-title", ref: (el) => (this.ellipsis = el), title: this.getTitle() }, this.titolo), h("slot", { key: 'dd4ad05319e7c87f1ad55a6fb1ff02e2e529757d', name: "icon" })));
    }
    static get style() { return ZMyzCardHeaderStyle0; }
}, [1, "z-myz-card-header", {
        "titolo": [1],
        "faded": [4],
        "cardtype": [1],
        "allowTooltip": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-myz-card-header"];
    components.forEach(tagName => { switch (tagName) {
        case "z-myz-card-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZMyzCardHeader);
            }
            break;
    } });
}

export { ZMyzCardHeader as Z, defineCustomElement as d };

//# sourceMappingURL=index19.js.map