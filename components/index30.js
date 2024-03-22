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
        return (h(Host, { key: '9d45170a5cefce5d815ac7b5402123645a8d243b', class: {
                "body-5-sb": true,
                "expandable": this.expandable && !!this.icon,
            } }, this.icon && h("z-icon", { name: this.icon }), h("div", { key: '9cf3b9f7b169709cf109cdab4d0cfe346a9eb29c' }, h("slot", { key: 'c26454112b3fa7ce120eaf50844cb82c9e11e751' }))));
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

//# sourceMappingURL=index30.js.map