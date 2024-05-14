import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { L as LicenseType } from './index2.js';

const stylesCss = ":host{--card-overflow:hidden}div{display:flex;overflow:var(--card-overflow);width:auto;width:256px;height:522px;box-sizing:border-box;flex-direction:column;border:var(--border-size-medium) solid var(--color-surface03);background-color:var(--color-surface01);border-radius:var(--border-radius)}div.real,div.trial,div.temp{border-color:var(--blue100)}div.faded{border:var(--border-size-medium) solid var(--color-surface02)}div.highlighted{box-shadow:var(--shadow-4);outline:none}div.pressed{box-shadow:var(--shadow-8);outline:none}div:focus{box-shadow:var(--shadow-focus-primary);outline:none}";
const ZMyzCardStyle0 = stylesCss;

const ZMyzCardComponent = /*@__PURE__*/ proxyCustomElement(class ZMyzCardComponent extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.faded = undefined;
        this.cardtype = undefined;
        this.ispressed = false;
        this.ishighlighted = false;
    }
    retrieveClass() {
        let elemClasses = "";
        if (this.cardtype === LicenseType.REAL) {
            elemClasses += "real";
        }
        else if (this.cardtype === LicenseType.TRIAL) {
            elemClasses += "trial";
        }
        else if (this.cardtype === LicenseType.TEMP) {
            elemClasses += "temp";
        }
        if (this.faded) {
            elemClasses += " faded";
        }
        else if (this.ispressed) {
            elemClasses += " pressed";
        }
        else if (this.ishighlighted) {
            elemClasses += " highlighted";
        }
        return elemClasses;
    }
    render() {
        return (h("div", { key: 'a72f39c9ad9161449a5f58965e2d93d83a107490', class: this.retrieveClass(), tabindex: "0" }, h("slot", { key: '66669fd94e4018f6c6dd05ff9d9bda41c0f007bf' })));
    }
    static get style() { return ZMyzCardStyle0; }
}, [1, "z-myz-card", {
        "faded": [4],
        "cardtype": [1],
        "ispressed": [4],
        "ishighlighted": [4]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-myz-card"];
    components.forEach(tagName => { switch (tagName) {
        case "z-myz-card":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZMyzCardComponent);
            }
            break;
    } });
}

export { ZMyzCardComponent as Z, defineCustomElement as d };

//# sourceMappingURL=index16.js.map