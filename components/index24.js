import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './index9.js';

const stylesCss = ".sc-z-tag-h{--z-icon-width:14px;--z-icon-height:14px;display:-ms-flexbox;display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;max-width:inherit;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;max-height:inherit;-ms-flex-align:start;align-items:flex-start;padding:calc(var(--space-unit) / 2);background-color:var(--z-tag-bg, var(--color-hover-primary));border-radius:var(--border-radius);color:var(--z-tag-text-color, var(--color-text-inverse));fill:currentcolor;font-family:var(--font-family-sans);font-size:var(--font-size-1);font-weight:var(--font-sb);letter-spacing:0.32px;line-height:14px;text-transform:uppercase}.expandable.sc-z-tag-h>z-icon.sc-z-tag{-webkit-transition:margin-right 0.3s ease-out;transition:margin-right 0.3s ease-out}.sc-z-tag-h:not(.expandable)>z-icon.sc-z-tag,.expandable.sc-z-tag-h:hover>z-icon.sc-z-tag{margin-right:var(--space-unit);-webkit-transition:margin-right 0.3s ease-out 0s;transition:margin-right 0.3s ease-out 0s}.expandable.sc-z-tag-h>div.sc-z-tag{overflow:hidden;max-width:0;max-height:0}.expandable.sc-z-tag-h:hover>div.sc-z-tag{max-width:100%;max-height:100%}";
const ZTagStyle0 = stylesCss;

const ZTag = /*@__PURE__*/ proxyCustomElement(class ZTag extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.icon = undefined;
        this.expandable = undefined;
    }
    render() {
        return (h(Host, { key: '2b457c2a7462afa36499c0991a32436751b2b6d1', class: {
                expandable: this.expandable && !!this.icon,
            } }, this.icon && h("z-icon", { key: '3f6b461a15c9221c658221894f62895bdbd8e108', name: this.icon }), h("div", { key: '0bb11571e1f99587a62e9d345fc731bf795656e5' }, h("slot", { key: '46ccbc8282a3611e7a3188651bbe96df1aacb5b2' }))));
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

//# sourceMappingURL=index24.js.map