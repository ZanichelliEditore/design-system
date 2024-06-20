import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './index9.js';

const stylesCss = ".sc-z-tag-h{--z-icon-width:14px;--z-icon-height:14px;--z-tag-text-color:var(--color-primary03);--z-tag-bg:var(--color-hover-primary);display:-ms-flexbox;display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;max-width:inherit;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;max-height:inherit;padding:calc(var(--space-unit) / 2);background-color:var(--z-tag-bg);border-radius:var(--border-radius);color:var(--z-tag-text-color);fill:var(--z-tag-text-color);font-family:var(--font-family-sans);line-height:14px;text-transform:uppercase}.sc-z-tag-h>z-icon.sc-z-tag{margin-right:var(--space-unit)}.expandable.sc-z-tag-h>z-icon.sc-z-tag{margin-right:0;-webkit-transition:margin-right 0.3s ease-out;transition:margin-right 0.3s ease-out}.sc-z-tag-h:not(.expandable)>z-icon.sc-z-tag:not(:last-child),.expandable.sc-z-tag-h:hover>z-icon.sc-z-tag:not(:last-child){margin-right:var(--space-unit);-webkit-transition:margin-right 0.3s ease-out 0s;transition:margin-right 0.3s ease-out 0s}.expandable.sc-z-tag-h>div.sc-z-tag{overflow:hidden;max-width:0;max-height:0}.expandable.sc-z-tag-h:hover>div.sc-z-tag{max-width:100%;max-height:100%}";
const ZTagStyle0 = stylesCss;

const ZTag = /*@__PURE__*/ proxyCustomElement(class ZTag extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.icon = undefined;
        this.expandable = undefined;
    }
    render() {
        return (h(Host, { key: '0b2f0fda539ab5e9f07e93bd1eeab8eb098e3245', class: {
                "body-5-sb": true,
                "expandable": this.expandable && !!this.icon,
            } }, this.icon && h("z-icon", { key: '1ce99af72a0ee664304ffc0a0fd401e98e043788', name: this.icon }), h("div", { key: 'fb9aee905ab56d5c086ee850eaf7f7cb8fa10dfe' }, h("slot", { key: '8f1d8bb919793b9570fb49a0761be534b6e454ce' }))));
    }
    static get style() { return ZTagStyle0; }
}, [6, "z-tag", {
        "icon": [1],
        "expandable": [4]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-tag", "z-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "z-tag":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZTag);
            }
            break;
        case "z-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { ZTag as Z, defineCustomElement as d };

//# sourceMappingURL=index27.js.map