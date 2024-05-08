import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './index9.js';

const stylesCss = ".sc-z-tag-h{--z-icon-width:14px;--z-icon-height:14px;--z-tag-text-color:var(--color-primary03);--z-tag-bg:var(--color-hover-primary);display:flex;width:fit-content;max-width:inherit;height:fit-content;max-height:inherit;padding:calc(var(--space-unit) / 2);background-color:var(--z-tag-bg);border-radius:var(--border-radius);color:var(--z-tag-text-color);fill:var(--z-tag-text-color);font-family:var(--font-family-sans);line-height:14px;text-transform:uppercase}.sc-z-tag-h>z-icon.sc-z-tag{margin-right:var(--space-unit)}.expandable.sc-z-tag-h>z-icon.sc-z-tag{margin-right:0;transition:margin-right 0.3s ease-out}.sc-z-tag-h:not(.expandable)>z-icon.sc-z-tag:not(:last-child),.expandable.sc-z-tag-h:hover>z-icon.sc-z-tag:not(:last-child){margin-right:var(--space-unit);transition:margin-right 0.3s ease-out 0s}.expandable.sc-z-tag-h>div.sc-z-tag{overflow:hidden;max-width:0;max-height:0}.expandable.sc-z-tag-h:hover>div.sc-z-tag{max-width:100%;max-height:100%}";
const ZTagStyle0 = stylesCss;

const ZTag = /*@__PURE__*/ proxyCustomElement(class ZTag extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.icon = undefined;
        this.expandable = undefined;
    }
    render() {
        return (h(Host, { key: '1c3bc302ffa93e3950f50aa33560e3f6dbe3f003', class: {
                "body-5-sb": true,
                "expandable": this.expandable && !!this.icon,
            } }, this.icon && h("z-icon", { name: this.icon }), h("div", { key: '73bf2526e308bd86ce198807bfc8c77c7f917a37' }, h("slot", { key: '31d6b94d10752d3c3bea0ec36ecb897af3db28f7' }))));
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