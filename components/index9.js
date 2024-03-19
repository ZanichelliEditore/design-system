import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { I as ICONS } from './icons.js';

const stylesCss = ":host{margin-right:var(--z-icon-right-margin, 0);margin-left:var(--z-icon-left-margin, 0);line-height:0;vertical-align:middle}:host svg:not([width]){width:var(--z-icon-width, 18px)}:host svg:not([height]){height:var(--z-icon-height, 18px)}";
const ZIconStyle0 = stylesCss;

const ZIcon = /*@__PURE__*/ proxyCustomElement(class ZIcon extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.name = undefined;
        this.height = undefined;
        this.width = undefined;
        this.iconid = undefined;
        this.fill = undefined;
    }
    selectPathOrPolygon(iconValue) {
        if (iconValue === null || iconValue === void 0 ? void 0 : iconValue.startsWith("M")) {
            return h("path", { d: ICONS[this.name] });
        }
        return h("polygon", { points: ICONS[this.name] });
    }
    render() {
        return (h(Host, { key: '2b01f04c92ac8e4772036eb52aad46a62d46d35c', "aria-hidden": "true" }, h("svg", { key: '18067d6877c79af11d5af240d030c8f82531cf6b', viewBox: "0 0 1000 1000", width: this.width, height: this.height, id: this.iconid, fill: this.fill ? `var(--${this.fill})` : "" }, this.selectPathOrPolygon(ICONS[this.name]))));
    }
    static get style() { return ZIconStyle0; }
}, [1, "z-icon", {
        "name": [1],
        "height": [2],
        "width": [2],
        "iconid": [1],
        "fill": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "z-icon":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZIcon);
            }
            break;
    } });
}

export { ZIcon as Z, defineCustomElement as d };

//# sourceMappingURL=index9.js.map