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
        return (h("header", { key: '904634bcd078321c3142c3b92eb8ad14244c6c4b', class: this.retrieveClass() }, h("slot", { key: 'c6e19f0f2b536def7a32c3dd9343439f8d532e98', name: "aria-heading" }), h("span", { key: '36da9db6eb1620f5ef38db575ec81196997ccb48', class: "card-title", ref: (el) => (this.ellipsis = el), title: this.getTitle() }, this.titolo), h("slot", { key: '7f3f94bb0161e385189963b861eb61ef224c1548', name: "icon" })));
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